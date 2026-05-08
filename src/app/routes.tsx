import { createBrowserRouter, Outlet, Link, useLocation } from "react-router";
import { LandingPage } from "./screens/LandingPage";
import { LoanSimulator } from "./screens/LoanSimulator";
import { UserRegistration } from "./screens/UserRegistration";
import { Login } from "./screens/Login";
import { ClientDashboard } from "./screens/ClientDashboard";
import { LoanApplicationForm } from "./screens/LoanApplicationForm";
import { LoanStatusTracker } from "./screens/LoanStatusTracker";
import { PaymentHistory } from "./screens/PaymentHistory";
import { AdminDashboard } from "./screens/AdminDashboard";
import { LoanRequestManagement } from "./screens/LoanRequestManagement";
import { UserManagement } from "./screens/UserManagement";
import { PaymentScreen } from "./screens/PaymentScreen";
import { PublicPaymentMethods } from "./screens/PublicPaymentMethods";
import { Layout } from "./components/Layout";
import { AdminLayout } from "./components/AdminLayout";
import { ClientLayout } from "./components/ClientLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "simular", Component: LoanSimulator },
      { path: "registro", Component: UserRegistration },
      { path: "ingresar", Component: Login },
      { path: "medios-de-pago", Component: PublicPaymentMethods },
    ],
  },
  {
    path: "/cliente",
    Component: ClientLayout,
    children: [
      { index: true, Component: ClientDashboard },
      { path: "solicitar", Component: LoanApplicationForm },
      { path: "estado", Component: LoanStatusTracker },
      { path: "historial", Component: PaymentHistory },
      { path: "pagos", Component: PaymentScreen },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "solicitudes", Component: LoanRequestManagement },
      { path: "usuarios", Component: UserManagement },
    ],
  }
]);
