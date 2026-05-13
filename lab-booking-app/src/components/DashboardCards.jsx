function DashboardCards({
  totalTests,
  pendingTests,
  completedTests,
  totalRevenue,
}) {
  const cards = [
    {
      title: "Total Tests",
      value: totalTests,
      color: "bg-blue-500",
    },
    {
      title: "Pending Tests",
      value: pendingTests,
      color: "bg-yellow-500",
    },
    {
      title: "Completed Tests",
      value: completedTests,
      color: "bg-green-500",
    },
    {
      title: "Revenue",
      value: `₹${totalRevenue}`,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} text-white p-6 rounded-2xl shadow-lg`}
        >
          <h2 className="text-lg">
            {card.title}
          </h2>

          <p className="text-4xl font-bold mt-3">
            {card.value}
          </p>
        </div>
      ))}

    </div>
  );
}

export default DashboardCards;