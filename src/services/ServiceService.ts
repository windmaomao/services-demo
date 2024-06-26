const SERVICES_URL = "http://localhost:3000/api/services";

export async function GetServices() {
  let res = await fetch(SERVICES_URL);
  let data = await res.json();
  return data;
}

export async function GetAppointments() {
  const available = [
    "Monday, May 5th 08:00 AM",
    "Monday, May 5th 10:00 AM",
    "Tuesday, May 6th 02:00 PM",
  ];

  return available;
}
