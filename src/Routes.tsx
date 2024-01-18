import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { Layout } from "./components/Layout";
import { Menu } from "./pages/Menu";

export function RoutesForPages() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />

      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/dashboard"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedLayout>
            <Layout>
              <Menu />
            </Layout>
          </ProtectedLayout>
        }
      />
    </Routes>
  );
}
