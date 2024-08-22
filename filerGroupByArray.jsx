const data = dates.map((date, index) => ({
  date,
  name: names[index],
  amount: amounts[index]
}));

// Group by date, count names, and sum amounts
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
==========================================================================================

  const dates = [
  "2024-08-20T00:00:00.000Z",
  "2024-08-20T00:00:00.000Z",
  "2024-08-21T12:30:00.000Z",
  "2024-08-21T14:45:00.000Z",
  "2024-08-20T08:15:00.000Z"
];

const names = ["John", "Jane", "John", "Doe", "Mike"];

const amounts = [100, 200, 150, 100, 300];

// Combine the arrays into an array of objects
const data = dates.map((date, index) => ({
  date: date.split('T')[0], // Extract only the date part
  name: names[index],
  amount: amounts[index]
}));

// Group by name and then by date for each name
const groupedData = data.reduce((acc, item) => {
  if (!acc[item.name]) {
    acc[item.name] = {};
  }

  if (!acc[item.name][item.date]) {
    acc[item.name][item.date] = 0;
  }

  acc[item.name][item.date] += 1;

  return acc;
}, {});

// Format the result
const result = Object.entries(groupedData).map(([name, dates]) => ({
  name,
  dates: Object.entries(dates).map(([date, count]) => ({ date, count }))
}));

console.log(result);
