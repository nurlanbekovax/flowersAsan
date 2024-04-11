import React, { useState } from "react";
import { HiAcademicCap } from "react-icons/hi"; // Correct the import if necessary
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import "./Navbar.css";

const Navbar = ({ refs }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      ref: refs.homeRef,
    },
    {
      text: "About",
      icon: <InfoIcon />,
      ref: refs.aboutRef,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      ref: refs.testimonialsRef,
    },
    {
      text: "Work",
      icon: <HiAcademicCap />,
      ref: refs.workRef,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      ref: refs.contactRef,
    },
  ];

  return (
    <nav className="navbar-container">
      <div className="navbar-left-content">
        <div className="nav-logo-container h1">
        <h1>FlowerLand</h1>
        </div>
        
        <IconButton onClick={() => setSearchOpen(!searchOpen)} size="large">
          <SearchIcon />
        </IconButton>
        {searchOpen && (
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        )}
      </div>
      <div className="navbar-right-content">
        {menuOptions.map((item, index) => (
          <Button key={index} onClick={() => scrollToSection(item.ref)} className="navbar-link">
            {item.text}
          </Button>
        ))}
        <IconButton onClick={handleLoginOpen} size="large">
          <AccountCircleIcon />
        </IconButton>
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {menuOptions.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => { scrollToSection(item.ref); setOpenMenu(false); }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <DialogTitle>Login or Register</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To access your account, please login or register.
          </DialogContentText>
          {/* Your login or registration form */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginClose}>Cancel</Button>
          <Button onClick={handleLoginClose}>Login/Register</Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
};

export default Navbar;