import { Link } from "react-router";

const PaymentCanceled = () => {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-amber-700">Payment Canceled</h1>
        <p className="mt-3 text-sm text-amber-800">
          You canceled the payment process. No charge was made.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/dashboard/orders"
            className="rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600"
          >
            Return to Orders
          </Link>
          <Link
            to="/shop"
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PaymentCanceled;