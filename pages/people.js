import React from 'react';
import { Text, Spacer, Grid, Container, Row, Col, Card, Navbar } from "@nextui-org/react";
import { Box } from "../components/Box.js";
import { PersonCard } from "../components/PersonCard.js"
import { Footer } from "../components/footer.js";
import { Image } from "@nextui-org/react";
import styles from '../styles/Home.module.css'

const People = () => (
    <div>
        <Navbar isCompact variant="sticky" height="90px" maxWidth={'fluid'}>
            <Navbar.Brand>
                <Text b color="inherit">
                    Hughes Lab
                </Text>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight hideIn='xs' variant="underline">
                <Grid.Container gap={2} justify="center">
                    <Grid>
                        <Navbar.Link href="/" css={{ color: "#e01f00" }}>Home</Navbar.Link>
                    </Grid>
                    <Grid>
                        <Navbar.Link href="/people" css={{ color: "#ffb700" }}>People</Navbar.Link>
                    </Grid>
                    <Grid>
                        <Navbar.Link href="https://pubmed.ncbi.nlm.nih.gov/?term=Hughes%2C+Timothy+R%5BAuthor%5D&sort=" css={{ color: "#00d800" }}>Projects</Navbar.Link>
                    </Grid>
                    <Grid>
                        <Navbar.Link href="/contact" css={{ color: "#0226cc" }}>Data</Navbar.Link>
                    </Grid>
                </Grid.Container>
            </Navbar.Content>
        </Navbar>
        <Spacer y={2} />
        <Container gap={2}>
            <Row gap={0}>
                <Col xs={12} sm={6} md={5}>
                    <Image src='../images/Tim.png'
                        objectFit='fill' />
                </Col>
                <Spacer x={1.5} />
                <Col xs={12} sm={6} md={7}>
                    <h1> Tim Hughes </h1>
                    <Text size={17.4} color="black" css={{ m: 0 }}>
                        {/* tim */}
                    </Text>
                    <Spacer y={1} />
                    <Text size={17.4} color="black" css={{ m: 0 }}>
                        How Do Cells See The Genome?
                        Interpretation of nucleic acid sequence is a fundamental problem in molecular biology.  It is now clear that only a small minority of most genomes is protein coding. In contrast, the number and variety of apparent regulatory sequences continues to grow - in human, eclipsing the number of protein coding genes by orders of magnitude. Decoding how regulatory sequences are recognized and interpreted by cells is fundamental to dissecting gene expression mechanisms, interpreting the significance of sequence variants, and understanding the function and evolution of genomes. Despite a wealth of sequencing and expression data, however, it remains surprisingly difficult to predict gene expression patterns on the basis of primary sequence, even in “simple” genomes such as that of yeast.  This shortcoming suggest that there are large gaps in available data, and/or that our conceptual models of how transcriptional and post-transcriptional regulation work are too simplistic.
                    </Text>
                </Col>
            </Row>
            <Spacer y={1} />
        </Container>
        <Container gap={2}>
            <Spacer y={2} />
            <Text h1 css={{left: '5%', position: 'absolute'}}>Lab Staff</Text>
            <Spacer y={3} />
            <Grid.Container gap={2} justify="center" Spacer>
                <Grid xs={6} sm={4}>
                    <PersonCard Name={'Debashish Ray'} Img={'../images/obama.jpg'} />
                </Grid>
                <Grid xs={6} sm={4}>
                    <PersonCard Name={'Ally Yang'} Img={'../images/Ally.jpg'} />
                </Grid>
                <Grid xs={6} sm={4}>
                    <PersonCard Name={'Rozy Razavi'} Img={'../images/Rozy.jpg'} />
                </Grid>
            </Grid.Container>
            <Spacer y={1} />
            <Grid.Container gap={2} justify="center">
                <Grid xs={6} sm={4}>
                    <PersonCard Name={'Mihai Albu'} Img={'../images/Mihai.png'} />
                </Grid>
                <Grid xs={6} sm={4}>
                    <PersonCard Name={'Hong Zheng'} Img={'../images/Hong_resize.jpg'} />
                </Grid>
            </Grid.Container>
            <Text h1 css={{ left: "5%", position: 'absolute' }}>Postdocs</Text>
            <Spacer y={3} />
            <Grid.Container gap={2} justify="center">
                <Grid xs={6} sm={4}>
                    <PersonCard Name={'Alex Brezhalov'} Img={'../images/Sasha.jpeg'} />
                </Grid>
                <Grid xs={6} sm={4}>
                    <PersonCard Name={'Arttu Jolma'} Img={'../images/Arttu.png'} />
                </Grid>
            </Grid.Container>
            <Spacer y={2} />
            <Text h1 css={{ left: "5%", position: 'absolute' }}>Graduate Students</Text>
            <Spacer y={3} />
            <Grid.Container gap={1} justify="center">
                <Grid xs={6} sm={4}>
                    <PersonCard Name={'Kaitlin Laverty'} Img={'../images/Kaitlin.png'} />
                </Grid>
                <Grid xs={6} sm={4}>
                    <PersonCard Name={'Isaac Yellan'} Img={'../images/Isaac.jpg'} />
                </Grid>
                <Grid xs={6} sm={4}>
                    <PersonCard Name={'Sara Pour'} Img={'../images/Sara.png'} />
                </Grid>
            </Grid.Container>
            <Spacer y={1} />
            <Grid.Container gap={2} justify="center">
                <Grid xs={6} sm={4}>
                    <PersonCard Name={'Shamira Tabrejee'} Img={'../images/Shamira.jpeg'} />
                </Grid>
                <Grid xs={6} sm={4}>
                    <PersonCard Name={'Ali Fathi'} Img={'../images/obama.jpg'} />
                </Grid>
            </Grid.Container>
            <Spacer y={2} />
            <Text h1 css={{ left: "5%", position: 'absolute' }}>Undergrads</Text>
            <Spacer y={3} />
            <Grid.Container gap={2} justify="center">

            </Grid.Container>
            <Spacer y={2} />
            <Text h1 css={{ left: "5%", position: 'absolute' }}>Past Members</Text>
            <Spacer y={3} />
            <Grid.Container gap={2} justify="center">

            </Grid.Container>
        </Container>
    </div>
);

export default People;

