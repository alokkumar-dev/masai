import { Navbar } from "./Navbar";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ProductsPage } from "./ProductsPage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { NotFoundPage } from "./NotFoundPage";
export const RoutesBox = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductsDetailsPage />} />
        <Route path="*" element={<NotFoundPage /> } />
      </Routes>
    </>
  );
};
