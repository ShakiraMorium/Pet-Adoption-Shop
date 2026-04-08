const formatValue = (value, isCurrency = false) => {
  if (isCurrency) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }
 


  return new Intl.NumberFormat("en-US").format(value || 0);
};

const StatCard = ({ icon: Icon, title, value, hint, isCurrency = false }) => {

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-600">{title}</h3>
        <span className="rounded-xl bg-indigo-50 p-2 text-indigo-600">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
        {formatValue(value, isCurrency)}
      </p>

      {hint ? <p className="mt-1 text-xs text-slate-500">{hint}</p> : null}

    </article>
  );
};

export default StatCard;