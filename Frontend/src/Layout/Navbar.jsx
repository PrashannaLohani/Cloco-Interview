import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ChecklistIcon from "@mui/icons-material/Checklist";

import { Avatar, Badge, Box, Typography } from "@mui/material";
import { useState } from "react";
import Search from "../Components/Field/search";

export default function Navbar() {
  const Navbar = [
    {
      id: 1,
      name: "Notification",
      path: "/notification",
      icon: <CircleNotificationsIcon />,
      variant: "dot",
      color: "error",
    },
    {
      id: 2,
      name: "TODO",
      path: "/todo",
      icon: <ChecklistIcon />,
      badge: 3,
      variant: "standard",
      color: "success",
    },
    {
      id: 3,
      name: "History",
      path: "/history",
      icon: <AccessTimeFilledIcon />,
      badge: 7,
      variant: "dot",
      color: "info",
    },
  ];

  // State to track the active item
  const [activeId, setActiveId] = useState(
    Number(localStorage.getItem("active")) || null
  );

  const handleNavigation = (path, id) => {
    window.location.href = path;
    localStorage.setItem("active", id);
    setActiveId(id); // Update activeId state
  };
  const items = [
    "Home",
    "About",
    "Services",
    "Contact",
    "Dashboard",
    "Settings",
    "Profile",
  ];

  return (
    <>
      <Box
        minHeight="10vh"
        bgcolor="primary.background"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px="1rem"
      >
        <Box display="flex" alignItems="center" gap="1rem">
          {Navbar.map((item) => (
            <Box
              key={item.id}
              display="flex"
              alignItems="center"
              gap="0.5rem"
              p="0.5rem"
              sx={{
                cursor: "pointer",
                borderRadius: "1rem",
                bgcolor: activeId === item.id ? "#EFB036" : "transparent", // Highlight active item
                "&:hover": {
                  textDecoration: "underline",
                  color: "primary.text",
                  transition: "0.5s",
                },
              }}
              onClick={() => handleNavigation(item.path, item.id)}
            >
              <Badge
                badgeContent={item.badge}
                variant={item.variant}
                color={item.color}
              >
                {item.icon}
              </Badge>
              <Typography variant="h6">{item.name}</Typography>
            </Box>
          ))}
        </Box>
        <Avatar />
      </Box>
    </>
  );
}
