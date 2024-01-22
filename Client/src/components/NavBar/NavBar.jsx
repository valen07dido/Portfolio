import React from "react";
import { Toolbar, Button, Box } from "@mui/material";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import PATHROUTES from "../../utils/PATHROUTES";

const NavBar = () => {
  const navPages = [
    { Text: "INICIO", link: PATHROUTES.HOME },
    { Text: "SOBRE MI", link: PATHROUTES.ABOUT },
    { Text: "PROYECTOS", link: PATHROUTES.PROYECTS },
    { Text: "CONTACTO", link: PATHROUTES.CONTACT },
  ];

  return (
    <>
      <Toolbar
        sx={{
          backgroundColor: "#0d113c",
          display: "flex",
          justifyContent: "space-between",
          border: "solid 2px #1e2974",
        }}
      >
        <Box>
          {navPages.map((page, i) => (
            <Link
              key={i}
              to={page.link}
              style={{ textDecoration: "none", color: "black", margin: "0 20px 0 20px" }}
            >
              <Button
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#1e2974", // Color invertido en hover
                    color: "white", // Texto en color blanco en hover
                  },
                }}
              >
                {page.Text}
              </Button>
            </Link>
          ))}
        </Box>
        <Button>
          <img
            src="https://en.wh.ms/dist/img/avatar/avatar-1.png"
            alt="foto de perfil"
            width="50px"
            height="50px"
            style={{ borderRadius: "50%" }}
          />
        </Button>
      </Toolbar>
    </>
  );
};

export default NavBar;