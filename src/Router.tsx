import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ProtectedLayout } from "./components/ProtectedLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Home/>} />
      <Route
        path="/profile"
        element={
          <ProtectedLayout>
            <Home />
          </ProtectedLayout>
        }
      />

      <Route path="*" element={<Login />} />
    </Routes>
  );
}
