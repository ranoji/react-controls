const data = [
  { "holiday": "Christmas", "country": "BE", "currency": "EUR" },
  { "holiday": "Christmas", "country": "NL", "currency": "EUR" },
  { "holiday": "New Year", "country": "IT", "currency": "EUR" },
  { "holiday": "New Year", "country": "CH", "currency": "CHF" },
  { "holiday": "Easter", "country": "NL", "currency": "EUR" },
  { "holiday": "Easter", "country": "BE", "currency": "EUR" }
];

const groupedData = data.reduce((acc, { holiday, country, currency }) => {
  if (!acc[holiday]) {
    acc[holiday] = { countries: [], currencies: new Set() };
  }
  acc[holiday].countries.push(country);
  acc[holiday].currencies.add(currency);
  return acc;
}, {});

const result = Object.keys(groupedData).map(holiday => ({
  holiday,
  countries: groupedData[holiday].countries.join(", "),
  currencies: Array.from(groupedData[holiday].currencies)
}));

console.log(JSON.stringify(result, null, 2));
