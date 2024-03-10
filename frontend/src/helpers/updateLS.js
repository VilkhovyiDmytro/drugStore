export function updateLS(medecine, shopId) {
  const cartLS = localStorage.getItem("cart");
  const cart = cartLS ? JSON.parse(cartLS) : [];
  const existEl = cart.find(
    (el) => el.name === medecine.name && el.shopId === shopId
  );
  if (existEl) {
    existEl.quantity += 1;
    return localStorage.setItem(
      "cart",
      JSON.stringify(cart.map((el) => (el._id === existEl._id ? existEl : el)))
    );
  }
  return localStorage.setItem(
    "cart",
    JSON.stringify([...cart, { ...medecine, quantity: 1, shopId }])
  );
}
