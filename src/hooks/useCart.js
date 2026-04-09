import { useCallback, useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
  const [authToken] = useState(
    () => JSON.parse(localStorage.getItem("authTokens"))?.access
  );
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
  const [loading, setLoading] = useState(false);

  // Create or retrieve cart
  const createOrGetCart = useCallback(async () => {
    setLoading(true);
    try {
      const response = await authApiClient.post("/carts/");
      

     const createdCart = response.data;

      if (!cartId && createdCart?.id) {
        localStorage.setItem("cartId", createdCart.id);
        setCartId(createdCart.id);
      }

      setCart(createdCart);
      return createdCart;
    } catch (error) {
    console.log("Error creating cart", error);;
    
  } finally {
      setLoading(false);
    }
  }, [cartId]);

  // Add items to the cart
  const AddCartItems = useCallback(
    async (pet_id, quantity) => {
      setLoading(true);
      try {
      // const response = await authApiClient.post(`/carts/${cartId}/items/`, {
        let activeCartId = cartId;

        if (!activeCartId) {
          const createdCart = await createOrGetCart();
          activeCartId = createdCart?.id;
        }

        if (!activeCartId) {
          throw new Error("Cart is not available.");
        }

        const response = await authApiClient.post(`/carts/${activeCartId}/items/`, {
          pet_id,
          quantity,
        });

        await createOrGetCart();
        return response.data;
      } catch (error) {
        console.log("Error adding items", error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [cartId, createOrGetCart]
  );

  // Update Item quantity
  const updateCartItemQuantity = useCallback(
    async (itemId, quantity) => {
      try {
        await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`, {
          quantity,
        });
        await createOrGetCart();
      } catch (error) {
        console.log("Error updating cart items", error);
      }
    },
       [cartId, createOrGetCart]
  );

  // Delete Cart Items
  const deleteCartItems = useCallback(
    async (itemId) => {
      try {
        
        await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`);
        await createOrGetCart();
      } catch (error) {
        console.log(error);
      }
    },
    [cartId, createOrGetCart]
  );

  useEffect(() => {
    const initializeCart = async () => {
      if (!authToken) return;
      await createOrGetCart();
    }; // stop if user is not logged in

    initializeCart();
  }, [authToken, createOrGetCart]);

  return {
    cart,
    loading,
    cartId,
    createOrGetCart,
    AddCartItems,
    updateCartItemQuantity,
    deleteCartItems,
  };
};

export default useCart;