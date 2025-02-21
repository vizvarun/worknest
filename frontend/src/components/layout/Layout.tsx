import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useScrollTrigger,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  AccountCircle,
  Brightness4,
  Brightness7,
  Logout,
} from "@mui/icons-material";
import { useTheme } from "../../contexts/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../store";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const user = useSelector((state: RootState) => state.auth.user);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleMenuClose();
    navigate("/profile");
  };

  const handleLogout = () => {
    handleMenuClose();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: trigger ? "blur(10px)" : "none",
          backgroundColor: trigger
            ? isDarkMode
              ? "rgba(18, 18, 18, 0.7)"
              : "rgba(249, 249, 249, 0.7)"
            : "transparent",
          borderBottom: trigger ? "1px solid" : "none",
          borderColor: isDarkMode
            ? "rgba(255,255,255,0.12)"
            : "rgba(0,0,0,0.12)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => navigate("/")}
            sx={{ mr: 2, ...(isAuthenticated && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            onClick={() => navigate("/")}
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontSize: "1.5rem",
              letterSpacing: "-0.02em",
              cursor: "pointer",
              "&:hover": {
                opacity: 0.8,
              },
              "& span": {
                fontWeight: 700,
              },
            }}
          >
            worknest
            <Box component="span" sx={{ color: "primary.main" }}>
              .
            </Box>
          </Typography>
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            sx={{ ml: 1, outline: 'none' }}
            disableRipple
            disableFocusRipple
          >
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              ml: 2,
              padding: "6px 12px",
              borderRadius: 2,
              transition: "all 0.2s ease",
              "&:hover": {
                bgcolor: "action.hover",
              },
              "&:active": {
                bgcolor: "action.selected",
              },
            }}
            onClick={handleProfileMenuOpen}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                border: 1,
                borderColor: "divider",
              }}
            >
              {user?.email?.[0].toUpperCase()}
            </Avatar>
            <Box
              sx={{
                ml: 1,
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                {user?.email?.split("@")[0]}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1,
                }}
              >
                View profile
              </Typography>
            </Box>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleProfile}>
              <ListItemIcon>
                <AccountCircle fontSize="small" />
              </ListItemIcon>
              <ListItemText>My Profile</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
