import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { Layout } from "./components/Layout";
import { Menu } from "./pages/Menu";
import { Logout } from "./pages/Logout";

export function RoutesForPages() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
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
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
