import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { AddShoppingCart, Search, Close } from "@mui/icons-material";
import { addToCart } from "redux/cartSlice";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const CartPage = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <div className="container max-w-7xl mx-auto mb-10">
      <div className="my-8">
        <h2 className="text-4xl text-[#244d4d] font-bold">Giỏ hàng</h2>
      </div>
      <Paper>
        <table className="w-full">
          <thead>
            <tr className="font-bold bg-slate-100">
              <th className="text-left p-4">Sản phẩm</th>
              <th className="p-4">Đơn giá</th>
              <th className="p-4">Số lượng</th>
              <th className="text-right p-4">Thành tiền</th>
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
                <td className="text-center p-4">{item.price}</td>
                <td className="text-center p-4">{item.fat}</td>
                <td className="text-center p-4">
                  {item.quantity * item.price}
                </td>
                <td className="p-4">{""}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 text-right">Tổng cộng: {cart.total}</div>
        <div className="flex justify-between items-center p-4">
          <Link to="/san-pham">
            <Button>Tiếp tục mua hàng</Button>
          </Link>
          <Link to="/thanh-toan">
            <Button variant="contained">Tiến hành thành toán</Button>
          </Link>
        </div>
      </Paper>
    </div>
  );
};

export default CartPage;
