const groupedData = data.reduce((acc, item) => {
  // Extract only the date part (e.g., "2024-08-20")
  const date = item.date.split('T')[0];

  if (!acc[date]) {
    acc[date] = { date, nameCount: 0, amountSum: 0 };
  }
  acc[date].nameCount += 1;
  acc[date].amountSum += item.amount;

  return acc;
}, {});

const result = Object.values(groupedData);
