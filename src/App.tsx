import { Route, Routes } from "react-router-dom";
import { ProductDetail, Home, ProductCart, NotFound } from "./pages";
import { MainLayout } from "./layouts";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
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
