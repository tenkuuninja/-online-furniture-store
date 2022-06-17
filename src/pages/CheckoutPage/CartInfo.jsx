import { useSelector } from "react-redux";
import { toVietnamCurentcy } from "utils";

const CartPage = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <div className="flex-grow pl-8 mt-2">
      <ul className="space-y-2">
        {Object.values(cart.data).map((item, i) => (
          <li className="flex gap-2" key={i}>
            <div>
              <img
                className="w-20 h-20 object-cover"
                src={item.product.image}
                alt=""
              />
            </div>
            <div className="flex-grow">
              <p className="text-lg text-slate-800 font-bold">
                {item.product.name}
              </p>
              <p className="text-sm text-slate-500">
                {item.product.category.name}
              </p>
            </div>
            <div className="self-end justify-self-end text-right">
              <p className="text-sm text-slate-700">x{item.quantity}</p>
              <p className="text-base text-slate-800 font-semibold">
                {toVietnamCurentcy(item.price)}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-right">
        Tổng cộng:{" "}
        <span className="text-xl text-rose-600 font-bold">
          {toVietnamCurentcy(cart.total)}
        </span>
      </div>
    </div>
  );
};

export default CartPage;
