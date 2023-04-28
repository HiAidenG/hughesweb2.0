import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import { Box } from "@/components/Box";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

export const ResearchOverviewCard = ({ imageSrc, overlayText }) => (
  <Card isPressable isHoverable css={{ w: "100%", h: "400px", position: "relative" }}>
    <Card.Header isBlurred css={{ position: "absolute", zIndex: 1, bgBlur: "#f2f2f2", top: 0, width: '100%', marginBottom: "-1rem" }}>
      <Text h2
        css={{
          fontFamily: inter,
          fontSize: "1.3rem",
          color: "black",
          position: "relative",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        {overlayText}
      </Text>

    </Card.Header>

    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={imageSrc}
        objectFit="stretch"
        width="100%"
        height="100%"
        css={{
          borderRadius: "0rem",
          filter: "brightness(0.95)",
          filter: "blur(2px)",
        }}
      />

    </Card.Body>
  </Card>
);
