const SERVICES_URL = "http://localhost:3000/api/services";

export async function GetServices() {
  let res = await fetch(SERVICES_URL);
  let data = await res.json();
  return data;
}
