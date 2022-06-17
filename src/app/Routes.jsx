import AdminLayout from "components/Layout/AdminLayout";
import AppLayout from "components/Layout/AppLayout";
import AdminBillPage from "pages/Admin/BillPage";
import AdminCategoryPage from "pages/Admin/CategoryPage";
import AdminDashboardPage from "pages/Admin/Dashboard";
import AdminProductPage from "pages/Admin/ProductPage";
import AdminUserPage from "pages/Admin/UserPage";
import CartPage from "pages/CartPage";
import CheckoutPage from "pages/CheckoutPage";
import HomePage from "pages/HomePage";
import ProductDetailPage from "pages/ProductDetailPage";
import ProductListPage from "pages/ProductListPage";
import ContactPage from "pages/ContactPage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="san-pham" element={<ProductListPage />}/>
          <Route path="san-pham/:url" element={<ProductDetailPage />}/>
          <Route path="gio-hang" element={<CartPage />}/>
          <Route path="thanh-toan" element={<CheckoutPage />}/>
          <Route path="lien-he" element={<ContactPage />}/>
          <Route path="dang-nhap" element={<LoginPage />}/>
          <Route path="dang-ky" element={<RegisterPage />}/>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="users" element={<AdminUserPage />}/>
          <Route path="categories" element={<AdminCategoryPage />}/>
          <Route path="products" element={<AdminProductPage />}/>
          <Route path="bills" element={<AdminBillPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
