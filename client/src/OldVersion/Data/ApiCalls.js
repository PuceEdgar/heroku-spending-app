export async function getData() {
  const response = await fetch("/api/getitems");
  const result = await response.json();

  const sortedActivities = result.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return sortedActivities;
}
