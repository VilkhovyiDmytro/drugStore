/* eslint-disable react/prop-types */
function Item({ medecine, onAddToCart }) {
  return (
    <div className="col-span-1 w-[16vw] h-[16vw] flex flex-col justify-center items-center gap-4 border">
      <p>{medecine.name}</p>
      <p>{medecine.price}</p>
      <button
        className="btn"
        onClick={() => onAddToCart(medecine)}
      >
        В КОРЗИНУ
      </button>
    </div>
  );
}

export default Item;
