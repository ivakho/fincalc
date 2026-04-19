import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts";
import { MainPage, CategoryPage, TransactionPage } from "../pages";

export function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
      </Routes>
    </MainLayout>
  );
}
