import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/Loyout"
import AdminDashboard from "./pages/Admin-view/dashboard"
import AdminOrder from "./pages/Admin-view/Order"
import AdminFeature from "./pages/Admin-view/Features"
import AdminProduct from "./pages/Admin-view/Products"
import ShoppingLayout from "./components/shopping-view/Layout"
import NotFound from "./pages/not-found"
import ShoppingAccount from "./pages/shopping-view/Account"
import ShoppingCheckout from "./pages/shopping-view/Checkout"
import ShoppingHome from "./pages/shopping-view/Home"
import ShopingListing from "./pages/shopping-view/Listing"
import CheckAuth from "./components/common/check-auth"
import UnauthPage from "./pages/unauth-page/indix"





function App() {

  const isAuthenticated = false;
  const user = null;

  return (
    <div className="flex flex-col overflow-hidden bg-white">

      {/* AuthLayout */}
      <Routes>

        {/* checkout authlayout authentication method */}
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />

        </Route>


        {/* AdminLayout */}
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user} >
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="feature" element={<AdminFeature />} />
          <Route path="order" element={<AdminOrder />} />
          <Route path="product" element={<AdminProduct />} />

        </Route>

        {/* shoppingLayout */}
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }>
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShopingListing />} />

        </Route>

        {/* Page not found elements */}
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  )
}

export default App
