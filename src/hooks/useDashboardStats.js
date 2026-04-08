import { useEffect, useMemo, useState } from "react";
import authApiClient from "../services/auth-api-client";

const toArray = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  return [];
};

const getCreatedDate = (item) =>
  item?.created_at || item?.created || item?.createdAt || item?.date || null;

const getOrderAmount = (order) => {
  const value =
    order?.total_price ??
    order?.total ??
    order?.amount ??
    order?.grand_total ??
    order?.subtotal;

  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : 0;
};

const useDashboardStats = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pets, setPets] = useState([]);
  const [orders, setOrders] = useState([]);
  const [adoptionRequests, setAdoptionRequests] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchStats = async () => {
      setLoading(true);
      setError("");

      const [petsRes, ordersRes, adoptionRes] = await Promise.allSettled([
        authApiClient.get("/pets/"),
        authApiClient.get("/orders/"),
        authApiClient.get("/adoption-requests/"),
      ]);

      if (!mounted) return;

      const nextPets =
        petsRes.status === "fulfilled" ? toArray(petsRes.value?.data) : [];
      const nextOrders =
        ordersRes.status === "fulfilled" ? toArray(ordersRes.value?.data) : [];
      const nextAdoptionRequests =
        adoptionRes.status === "fulfilled" ? toArray(adoptionRes.value?.data) : [];

      setPets(nextPets);
      setOrders(nextOrders);
      setAdoptionRequests(nextAdoptionRequests);

      if (
        petsRes.status === "rejected" ||
        ordersRes.status === "rejected" ||
        adoptionRes.status === "rejected"
      ) {
        setError("Some dashboard metrics could not be loaded from the API.");
      }

      setLoading(false);
    };

    fetchStats();

    return () => {
      mounted = false;
    };
  }, []);

  const stats = useMemo(() => {
    const totalPets = pets.length;
    const totalOrders = orders.length;
    const totalAdoptionRequests = adoptionRequests.length;
    const revenue = orders.reduce((sum, order) => sum + getOrderAmount(order), 0);

    const recentOrders = [...orders]
      .sort((a, b) => {
        const dateA = new Date(getCreatedDate(a) || 0).getTime();
        const dateB = new Date(getCreatedDate(b) || 0).getTime();
        return dateB - dateA;
      })
      .slice(0, 6);

    return {
      totalPets,
      totalOrders,
      totalAdoptionRequests,
      revenue,
      recentOrders,
    };
  }, [adoptionRequests, orders, pets]);

  return { stats, loading, error };
};

export default useDashboardStats;