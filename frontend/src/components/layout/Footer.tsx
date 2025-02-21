import React from "react";
import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.5,
        }}
      >
        Made with{" "}
        <FavoriteIcon
          sx={{
            fontSize: "1rem",
            color: "primary.main",
          }}
        />
        | Developed by{" "}
        <a
          href="https://www.varunvishal.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Varun Vishal
        </a>{" "}
        | {currentYear}
      </Typography>
    </Box>
  );
};

export default Footer;
