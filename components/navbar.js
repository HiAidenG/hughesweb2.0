import React from "react";
import { Navbar, Link, Text, Grid } from "@nextui-org/react";

export const Nav = () => {  
    return (
    <Navbar isCompact variant="sticky" height="90px" maxWidth={'fluid'}>
      <Navbar.Brand>
        <Text b color="inherit">
          Hughes Lab
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn='xs' variant="underline">
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Navbar.Link href="/">Home</Navbar.Link>
          </Grid>
          <Grid>
            <Navbar.Link href="/people">People</Navbar.Link>
          </Grid>
          <Grid>
            <Navbar.Link href="/projects">Projects</Navbar.Link>
          </Grid>
          <Grid>
            <Navbar.Link href="/contact">Contact</Navbar.Link>
          </Grid>
        </Grid.Container>
     </Navbar.Content>
    </Navbar>
  );
};