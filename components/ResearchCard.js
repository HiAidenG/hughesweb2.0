import { Card, Col, Row, Button, Text, Link } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import { Box } from "@/components/Box";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

export const ResearchOverviewCard = ({ imageSrc, overlayText }) => (
  <Link href="/projects">
  <Card isPressable isHoverable css={{ w: "100%", h: "400px", position: "relative" }}>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={imageSrc}
        objectFit="stretch"
        width="100%"
        height="100%"
        css={{
          borderRadius: "0rem",
          filter: "brightness(0.95) contrast(0.95)",
        }}
      />

      <Card.Footer>
        <Row justify="center">
          <Col span={12}>
            <Text css={{textAlign: "center", fontSize: '1.3rem', fontWeight: 'bold'}}>
              {overlayText}
            </Text>
          </Col>
        </Row>


      </Card.Footer>

    </Card.Body>
  </Card>
  </Link>
);

