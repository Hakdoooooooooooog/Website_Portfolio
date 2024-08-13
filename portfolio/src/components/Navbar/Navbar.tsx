import { AppBar, Box, Drawer, MenuItem, MenuList } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./navbar.module.css";
import { useState } from "react";

type Props = {};

const drawerWidth = 240;
const navbarLinks = ["About Me", "Projects", "Contacts"];

const Navbar = (_props: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="fixed"
      classes={{
        root: styles["navbar"],
      }}
    >
      <Box component={"div"} className={styles["navbar__links"]}>
        {navbarLinks.map((text, index) => (
          <Box
            key={index}
            href={`#${text.replace(" ", "").toLowerCase()}`}
            component={"a"}
            className={styles["navbar__link"]}
          >
            {text}
          </Box>
        ))}
      </Box>

      <Box component={"div"} className={styles["navbar__mobile"]}>
        <Box
          component={"button"}
          onClick={handleDrawerToggle}
          className={styles["navbar__menu--btn"]}
        >
          <MenuIcon
            classes={{
              root: styles["navbar__menu--icon"],
            }}
          />
        </Box>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          classes={{
            paper: styles["navbar__drawer--paper"],
          }}
        >
          <Box
            component={"div"}
            className={styles["navbar__drawer"]}
            sx={{ width: drawerWidth }}
            role="presentation"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
          >
            <MenuList
              classes={{
                root: styles["navbar__drawer--menu-list"],
              }}
            >
              {navbarLinks.map((text, index) => (
                <MenuItem key={index}>{text}</MenuItem>
              ))}
            </MenuList>
          </Box>
        </Drawer>
      </Box>
    </AppBar>
  );
};

export default Navbar;
