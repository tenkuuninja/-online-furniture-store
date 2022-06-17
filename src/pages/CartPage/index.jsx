import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { Remove, Add, Close } from "@mui/icons-material";
import {
  incrementQuantityByProductId,
  decrementQuantityByProductId,
  setQuantityByProductId,
  removeFromCartByProductId,
} from "redux/cartSlice";
import { toVietnamCurentcy } from "utils";

const CartPage = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto mb-10">
      <div className="my-8">
        <h2 className="text-4xl text-[#244d4d] font-bold">Giỏ hàng</h2>
      </div>
      <div className="rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="font-bold bg-slate-100">
              <th className="text-left p-4">Sản phẩm</th>
              <th className="p-4">Đơn giá</th>
              <th className="p-4">Số lượng</th>
              <th className="p-4">Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.values(cart.data).map((item, i) => (
              <tr key={i}>
                <td className="flex items-center p-4">
                  <img
                    className="w-20 h-20 object-cover"
                    src={item.product.image}
                    alt=""
                  />
                  <div className="ml-2">
                    <p className="text-lg text-slate-800 font-bold">
                      {item.product.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      Danh mục: {item.product.category.name}
                    </p>
                  </div>
                </td>
                <td className="text-center p-4">
                  {toVietnamCurentcy(item.price)}
                </td>
                <td className="text-center p-4">
                  <div className="inline-flex items-center border">
                    <div
                      className="p-1 cursor-pointer"
                      onClick={() =>
                        dispatch(decrementQuantityByProductId(item.product?.id))
                      }
                    >
                      <Remove />
                    </div>
                    <div className="w-12 h-full border-x p-1">
                      <input
                        className="w-full p-[1px] outline-none text-center"
                        type="text"
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(
                            setQuantityByProductId({
                              productId: item.product?.id,
                              quantity: e.target.value,
                            })
                          )
                        }
                      />
                    </div>
                    <div
                      className="p-1 cursor-pointer"
                      onClick={() =>
                        dispatch(incrementQuantityByProductId(item.product?.id))
                      }
                    >
                      <Add />
                    </div>
                  </div>
                </td>
                <td className="text-center p-4">
                  {toVietnamCurentcy(item.quantity * item.price)}
                </td>
                <td className="text-right p-4">
                  <IconButton
                    onClick={() =>
                      dispatch(removeFromCartByProductId(item.product?.id))
                    }
                  >
                    <Close />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 text-right">
          Tổng cộng:{" "}
          <span className="text-xl text-rose-600 font-bold">
            {toVietnamCurentcy(cart.total)}
          </span>
        </div>
        <div className="flex justify-between items-center p-4">
          <Link to="/san-pham">
            <Button>Tiếp tục mua hàng</Button>
          </Link>
          <Link to={cart.total === 0 ? "" : "/thanh-toan"}>
            <Button disabled={cart.total === 0} variant="contained">
              Tiến hành thành toán
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
