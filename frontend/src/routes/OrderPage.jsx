import { useNavigate } from "react-router-dom";
import { useLocalStorageState } from "../helpers/useLocalStorageState";
import CartItem from "../components/CartItem";
import { useState } from "react";
import { postForm } from "../helpers/api";
import toast from "react-hot-toast";

function OrderPage() {
  const [cart, setCart] = useLocalStorageState([], "cart");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();
  function handleChangeQuantity(name, shopId, quantity) {
    setCart((c) => {
      const isExist = c.find((el) => el.name === name && el.shopId === shopId);
      if (isExist) {
        return c.map((el) =>
          el.name === isExist.name && el.shopId === shopId
            ? { ...isExist, quantity }
            : el
        );
      }
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    toast
      .promise(
        postForm({
          ...formData,
          order: cart,
        }),
        {
          error: "Ой, щосб пішло не так, спробуйте ще раз",
          loading: "Обробляємо ваше замовлення",
          success: "Замовлення прийнято",
        }
      )
      .then(() => {
        navigate("/");
        setCart([]);
      });
  }
  return (
    <>
      <div className="h-full grid grid-cols-2 px-12 py-8 gap-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-around h-full items-start border-2 rounded-3xl p-6 "
        >
          <input
            type="text"
            required={true}
            placeholder="name"
            className="inp"
            value={formData.name}
            onChange={(e) => {
              setFormData((d) => ({ ...d, name: e.target.value }));
            }}
          />
          <input
            type="email"
            required={true}
            placeholder="email"
            className="inp"
            value={formData.email}
            onChange={(e) => {
              setFormData((d) => ({ ...d, email: e.target.value }));
            }}
          />
          <input
            type="tel"
            required={true}
            placeholder="tel"
            className="inp"
            value={formData.phone}
            onChange={(e) => {
              setFormData((d) => ({ ...d, phone: e.target.value }));
            }}
          />
          <input
            type="text"
            required={true}
            placeholder="address"
            className="inp"
            value={formData.address}
            onChange={(e) => {
              setFormData((d) => ({ ...d, address: e.target.value }));
            }}
          />
          <button type="submit" className="btn w-fit">
            SUBMIT
          </button>
        </form>
        <div className="flex flex-col justify-start h-full items-start border-2 rounded-3xl p-6 gap-4 overflow-auto ">
          {cart.map((el, i) => (
            <CartItem
              medecine={el}
              key={i}
              onChangeQuantity={handleChangeQuantity}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default OrderPage;
