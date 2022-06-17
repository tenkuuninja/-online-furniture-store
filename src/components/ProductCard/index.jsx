import { Rating, IconButton, Tooltip } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="product__cart border rounded-lg overflow-hidden hover:shadow-md transition-shadow ease-out duration-200">
      <div className="relative pt-[100%] overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover transition-transform ease-in-out duration-200"
          src={product.image}
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity ease-in-out duration-200"></div>
      </div>
      <div className="px-3 py-2">
        <p className="text-sm text-slate-400">{product?.category?.name}</p>
        <h3 className="text-lg text-slate-800 font-bold h-14">
          {product.name}
        </h3>
        <Rating size="small" defaultValue={5} readOnly />
        <div className="flex justify-between items-center">
          <p className="font-bold text-rose-600 mt-4 mb-4">
            {product.price}
            <span className="text-xs">₫</span>
          </p>
          <Tooltip title="Thêm vào giỏ hàng" placement="top-end">
            <IconButton
              onClick={() => dispatch(addToCart({ product: product }))}
            >
              <AddShoppingCart />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;