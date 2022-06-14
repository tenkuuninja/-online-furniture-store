import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const menu = [
  { text: "Trang chủ", url: "/" },
  { text: "Sản phẩm", url: "/san-pham" },
  { text: "Giỏ hàng", url: "/gio-hang" },
  { text: "Liên hệ", url: "/lien-he" },
];

const Header = () => {
  const count = useSelector((store) => store.cart.length);
  return (
    <header className="flex justify-between px-6 h-16 border-b border-slate-100">
      <div className="h-16 py-2 flex items-center">
        <img
          className="h-full"
          src="/images/logo-vh-black-transparent.png"
          alt=""
        />
        <div>
          <p className="text-sm italic leading-3">Nội thất</p>
          <p className="text-2xl font-bold italic leading-none">VIETHOANG</p>
        </div>
      </div>
      <div className="h-16 space-x-6">
        {menu.map((item, i) => (
          <Link
            to={item.url}
            className="leading-[4rem] text-slate-800 font-bold"
            key={i}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="h-16 flex items-center text-sm font-bold">
        <div className="mr-8">
          <Badge badgeContent={count} color="primary">
            <ShoppingCart />
          </Badge>
        </div>
        <Link to="/dang-nhap">
          <div className="px-4 py-2 text-[#244d4d] border border-[#244d4d] rounded-full mr-2 opacity-90 hover:opacity-100 ease-out duration-200">
            Đăng Nhập
          </div>
        </Link>
        <Link to="/dang-ky">
          <div className="px-4 py-2 text-white bg-[#244d4d] border border-[#244d4d] rounded-full opacity-90 hover:opacity-100 ease-out duration-200">
            Đăng ký
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
