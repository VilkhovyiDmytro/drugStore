import { getMedecines, getShops } from "../helpers/api";

export async function loader() {
  const shops = await getShops();
  console.log(shops);
  if (!shops) return null;
  return shops;
}

export async function medecinesLoader({ params }) {
  const medecines = await getMedecines(params.id);
  if (!medecines) return null;
  return medecines;
}
