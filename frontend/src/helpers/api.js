import axios from "axios";
import toast from "react-hot-toast";

export async function getShops() {
  try {
    const data = await axios.get("http://localhost:5555/shops");
    return data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getMedecines(id) {
  try {
    const data = await axios.get(`http://localhost:5555/shops/${id}`);

    return data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
export async function postOrder({ request }) {
  try {
    const formData = await request.formData();
    const corrD = {
      email: formData.get("email"),
      address: formData.get("address"),
      name: formData.get("name"),
      phone: formData.get("phone"),
      order: [
        {
          shop: "65ed97a8493d877894215613",
          medecine: {
            name: "Pharmaceasd",
            priceForOne: 22,
            quantity: 1,
          },
        },
      ],
    };
    const order = await axios.post(`http://localhost:5555/orders`, corrD);
    return order.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export async function postForm(data) {
  try {
    await axios.post(`http://localhost:5555/orders`, data);
  } catch (error) {
    console.error(error);
    toast.error(error.message);
  }
}
