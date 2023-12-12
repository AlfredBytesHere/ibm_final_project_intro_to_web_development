import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CallOutlined, EmailOutlined } from "@mui/icons-material";

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ paddingY: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Typography variant="h5" component="div">
              Alfred Tang
              <br />
              <Typography variant="body2" display="flex" alignContent="center" my={0.5}>
                <EmailOutlined fontSize="small"/>
                &nbsp;alfredbytes123@gmail.com
              </Typography>
              <Typography variant="body2" display="flex" alignContent="center" mt={0.5}>
                <CallOutlined fontSize="small"/>
                &nbsp;Contact: +1234567890
              </Typography>
            </Typography>
          </Box>
          <Button color="inherit" onClick={() => scrollToSection("about-me")}>
            About Me
          </Button>
          <Button color="inherit" onClick={() => scrollToSection("skills")}>
            Skills
          </Button>
          <Button color="inherit" onClick={() => scrollToSection("projects")}>
            Projects
          </Button>
          <Button color="inherit" onClick={() => scrollToSection("recommendations")}>
            Recommendations
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
