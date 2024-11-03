import {
  IconButton,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import LogoIcon from "../../assets/logoIcon.png";
import { PALETTE } from "../../assets/variables";
import { isMobile } from "react-device-detect";
import MenuIcon from "@mui/icons-material/Menu";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CV from "../../assets/CV.pdf";
import { Link } from "react-scroll";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = CV;
  link.download = "CV.pdf";
  link.click();
};

const ButtonText = styled(Typography)({
  fontFamily: "Poppins",
  color: PALETTE.WHITE,
  fontWeight: 700,
});

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      minHeight="5svh"
      bgcolor={PALETTE.CYAN}
    >
      {isMobile && (
        <IconButton onClick={handleDownload} sx={{ mx: 1 }}>
          <CloudDownloadIcon fontSize="large" />
        </IconButton>
      )}
      <img
        src={LogoIcon}
        alt="Florian A."
        style={{ maxHeight: "56px", padding: "8px", alignSelf: 'center' }}
      />
      {isMobile ? (
        <Stack maxWidth="56px" alignItems="center" justifyContent="center">
          <IconButton sx={{ mx: 1 }} onClick={handleClick}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Stack>
      ) : (
        <Stack height="100%" direction="row">
          <ListItem key="experiences">
            <Link to="experiences">
              <ListItemButton sx={{ textAlign: "center", mx: 2 }}>
                <ButtonText>Experiences</ButtonText>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem>
            <Link to="projects">
              <ListItemButton sx={{ textAlign: "center", mx: 2 }}>
                <ButtonText>Projects</ButtonText>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem>
            <Link to="educations">
              <ListItemButton sx={{ textAlign: "center", mx: 2 }}>
                <ButtonText>Education</ButtonText>
              </ListItemButton>
            </Link>
          </ListItem>

          {/* <ListItem>
            <Link to="contacts">
              <ListItemButton sx={{ textAlign: "center", mx: 2 }}>
                <ButtonText>Contacts</ButtonText>
              </ListItemButton>
            </Link>
          </ListItem> */}
        </Stack>
      )}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
              },
            },
          },
        }}
        // transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Link to="experiences"> Experiences </Link>
        </MenuItem>
        <MenuItem>
          <Link to="projects"> School Projects </Link>
        </MenuItem>
        <MenuItem>
          <Link to="educations"> Education </Link>
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default NavBar;
