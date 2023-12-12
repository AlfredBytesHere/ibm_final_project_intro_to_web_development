import Box from "@mui/material/Box";
import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
