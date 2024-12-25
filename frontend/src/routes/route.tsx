import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/Landing";
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";
import ForgotPasswordPage from "../pages/Auth/forgot-password";
import RecoveryPasswordPage from "../pages/Auth/Recovery-password";
import DashboardPage from "../pages/Dashboard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/forgot-password",
        element: <ForgotPasswordPage />
    },
    {
        path: "/recovery-password",
        element: <RecoveryPasswordPage />
    },
    {
        path: "/dashboard",
        element: <DashboardPage />
    }
]);

export default router