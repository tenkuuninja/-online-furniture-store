import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Badge, Drawer, Collapse } from "@mui/material";
import {
  ShoppingCart,
  Menu,
  ExpandMore,
  Home,
  Category,
  Chair,
} from "@mui/icons-material";
import Dropdown from "components/Dropdown";

const Header = () => {
  const count = useSelector((store) => store.cart.length);
  const categories = useSelector((store) => store.category.data);

  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const [isOpenCollapse, setOpenCollapse] = useState(false);

  const { pathname } = useLocation();

  return (
    <header className="flex justify-between px-6 h-16 border-b border-slate-100 text-slate-800">
      <div className="flex lg:hidden items-center cursor-pointer">
        <div className="py-4" onClick={() => setOpenDrawer(true)}>
          <Menu />
        </div>
      </div>
      <Drawer
        anchor="left"
        open={isOpenDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div className="w-[20rem] max-w-[80vw]">
          <div className="flex items-center px-4 py-2 text-xl font-bold uppercase border-b text-stone-700">
            <Menu />
            <span className="ml-2">Menu</span>
          </div>
          <Link
            className="block px-4 py-2 hover:bg-slate-50 hover:text-primary ease-in-out duration-200"
            to="/"
            onClick={() => setOpenDrawer(false)}
          >
            <Home />
            <span className="ml-2">Trang chủ</span>
          </Link>
          <div
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-slate-50 hover:text-primary ease-in-out duration-200"
            onClick={() => setOpenCollapse(!isOpenCollapse)}
          >
            <Category />
            <span className="flex-grow ml-2">Danh mục</span>
            <div
              className={`ease-in-out duration-100 ${
                isOpenCollapse ? "rotate-180" : ""
              }`}
            >
              <ExpandMore />
            </div>
          </div>
          <Collapse in={isOpenCollapse}>
            <ul className="mb-2">
              {categories.map((item, i) => (
                <li key={i} onClick={() => setOpenDrawer(false)}>
                  <Link
                    className="block pl-8 py-2 hover:bg-slate-50 hover:text-primary ease-in-out duration-200"
                    to="/san-pham"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Collapse>
          <Link
            className="flex items-center px-4 py-2 hover:bg-slate-50 hover:text-primary ease-in-out duration-200"
            to="/san-pham"
            onClick={() => setOpenDrawer(false)}
          >
            <Chair />
            <span className="ml-2">Sản phẩm</span>
          </Link>
          <Link
            className="flex items-center px-4 pr-8 py-2 hover:bg-slate-50 hover:text-primary ease-in-out duration-200"
            to="/gio-hang"
            onClick={() => setOpenDrawer(false)}
          >
            <ShoppingCart />
            <span className="ml-2 flex-grow">Giỏ hàng</span>
            <Badge badgeContent={count} color="primary" />
          </Link>
        </div>
      </Drawer>
      <Link className="h-16 py-2 flex items-center" to="/">
        <img
          className="h-full"
          src="/images/logo-vh-black-transparent.png"
          alt=""
        />
        <div className="block">
          <p className="text-sm italic leading-3">Nội thất</p>
          <p className="text-2xl font-bold italic leading-none">VIETHOANG</p>
        </div>
      </Link>
      <div className="h-16 hidden lg:flex space-x-6">
        <Link
          to="/"
          className={`leading-[4rem] text-slate-800 font-bold ${
            pathname === "/" ? "text-primary border-b-2 border-b-primary" : ""
          }`}
        >
          Trang chủ
        </Link>
        <Dropdown
          overlay={
            <ul className="bg-white shadow py-2 w-56">
              {categories.map((item, i) => (
                <li key={i}>
                  <Link className="block px-4 py-2" to="/san-pham">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          }
        >
          <span className="leading-[4rem] text-slate-800 font-bold cursor-pointer">
            Danh mục
          </span>
        </Dropdown>
        <Link
          to="/san-pham"
          className={`leading-[4rem] text-slate-800 font-bold ${
            pathname === "/san-pham"
              ? "text-primary border-b-2 border-b-primary"
              : ""
          }`}
        >
          Sản phẩm
        </Link>
        <Link
          to="/gio-hang"
          className={`leading-[4rem] text-slate-800 font-bold ${
            pathname === "/gio-hang"
              ? "text-primary border-b-2 border-b-primary"
              : ""
          }`}
        >
          Giỏ hàng
        </Link>
      </div>
      <div className="h-16 flex items-center text-sm font-bold">
        <Link to="/gio-hang">
          <div className="lg:mr-8">
            <Badge badgeContent={count} color="primary">
              <ShoppingCart />
            </Badge>
          </div>
        </Link>
        <Link className="hidden lg:block" to="/dang-nhap">
          <div className="px-4 py-2 text-[#244d4d] border border-[#244d4d] rounded-full mr-2 opacity-90 hover:opacity-100 ease-out duration-200">
            Đăng Nhập
          </div>
        </Link>
        <Link className="hidden lg:block" to="/dang-ky">
          <div className="px-4 py-2 text-white bg-[#244d4d] border border-[#244d4d] rounded-full opacity-90 hover:opacity-100 ease-out duration-200">
            Đăng ký
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
