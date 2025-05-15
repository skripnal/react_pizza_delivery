import { Route, Routes } from "react-router-dom";
import { ProductDetail, Home, ProductCart, NotFound } from "./pages";
import { MainLayout } from "./layouts";
import { RoutesEnum } from "./enums/routing";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={RoutesEnum.BASEURL} element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="pizzas/:id" element={<ProductDetail />} />
          <Route path="cart" element={<ProductCart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
