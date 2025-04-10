import { Box } from "@mui/material";
import { StyledDrawer } from "./StyledComponents";
import NavLinks from "./NavLinks";

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MenuDrawer = ({ open, onClose }: MenuDrawerProps) => {
  return (
    <StyledDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      transitionDuration={300}
    >
      <Box role="presentation" onClick={onClose} onKeyDown={onClose}>
        <NavLinks />
      </Box>
    </StyledDrawer>
  );
};

export default MenuDrawer;
