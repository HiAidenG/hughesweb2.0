import React from "react";
import { Grid } from "@nextui-org/react";
import { Text, Image } from "@nextui-org/react";

export const Footer = () => {
  return (
    <Grid.Container
      gap={2}
      justify="center">
      <Grid xs={8}>
        <Text justify="left">
          160 College Street Room 13xx | Toronto, ON | M5S 3E1
        </Text>
        <Text b>
          © Hughes Lab 2023
        </Text>
        <div>
          <Image
            src="../images/University_of_Toronto-Logo.png"
            width={200}
            height={75}

          />
          <Image
            src="../images/donnelly_logo.png"
            width={200}
            height={75}
          />
        </div>
      </Grid>
    </Grid.Container>
  );
};

