import "./styles/fonts.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lazy, Suspense, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { login } from "./features/auth/authSlice";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AuthRoute from "./components/auth/AuthRoute";
import Profile from "./components/profile/Profile";

// Lazy load components
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Login = lazy(() => import("./components/auth/Login"));
const Register = lazy(() => import("./components/auth/Register"));

// Separate component for the app content
const AppContent = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "WorkNest";

    // Check for existing authentication
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const user = localStorage.getItem("user");

    if (isAuthenticated === "true" && user) {
      dispatch(login(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Auth Routes - Can't access if logged in */}
            <Route
              path="/login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />
            <Route
              path="/register"
              element={
                <AuthRoute>
                  <Register />
                </AuthRoute>
              }
            />

            {/* Protected Routes - Can't access if not logged in */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </MuiThemeProvider>
  );
};

function App() {
  useEffect(() => {
    document.title = "WorkNest";
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
