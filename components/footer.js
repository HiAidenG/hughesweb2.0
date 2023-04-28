import React from "react";
import { Grid } from "@nextui-org/react";
import { Text, Image } from "@nextui-org/react";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiCopyright } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa" }}>
      <Grid.Container alignItems="center">
        <Grid xs={12} md={6}>
          <Text h5 style={{ marginLeft: "7.5rem", marginTop: "1rem", marginBottom: "1.5rem"}}> Contact Us: <br />
              <ImLocation /> 160 College Street | Toronto, ON | M5S 3E1<br />
              <BsFillTelephoneFill /> +1 (416) 978-8861<br />
              <MdEmail/> t.hughes@utoronto.ca<br />
              <br />
          <Text> © Hughes Lab 2023. </Text>
          </Text>
        </Grid>
        <Grid xs={12} md={3} justifyContent="right" justify="right" style={{ marginLeft: "17.5rem", display: "flex" }}>
          <Image
            src="../images/University_of_Toronto-Logo.png"
            width={200}
            height={75}
          />
          <Image
            src="../images/donnelly_logo.png"
            width={200}
            height={75}
            style={{ marginLeft: "0rem" }}
          />
        </Grid>
      </Grid.Container>
    </footer>
  );
};


