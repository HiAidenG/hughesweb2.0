import React from 'react';
import { Text, Spacer, Grid, Container, Row, Col, Card, Navbar } from "@nextui-org/react";
import { Box } from "../components/Box.js";
import { PersonCard } from "../components/PersonCard.js"
import { Footer } from "../components/footer.js";
import { Image } from "@nextui-org/react";
import styles from '../styles/Home.module.css'
import responsiveText from '../styles/responsiveText.module.css';

const People = () => (
    <Box css={{ maxWidth: '100%', overflow: 'hidden' }}>
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
                        <Navbar.Link href="/projects" css={{ color: "#00d800" }}>Projects</Navbar.Link>
                    </Grid>
                    <Grid>
                        <Navbar.Link href="/contact" css={{ color: "#0226cc" }}>Data</Navbar.Link>
                    </Grid>
                </Grid.Container>
            </Navbar.Content>
        </Navbar>
        <div className={styles.main}>
            <Container>
                <Spacer y={1} />
                <Row gap={0}>
                    <Col xs={12} md={5}>
                        <Image src='../images/Tim.png' objectFit='fill' />
                    </Col>
                    <Spacer x={1.5} />
                    <Col xs={12} md={7}>
                        <h1> Tim Hughes </h1>
                        <Text size={17.4} color="black" css={{ m: 0 }}>
                        </Text>
                        <Spacer y={1} />
                        <Text size={17.4} color="black" css={{ m: 0 }} className='responsiveText.textResponsive'>
                            How Do Cells See The Genome?
                            Interpretation of nucleic acid sequence is a fundamental problem in molecular biology.  It is now clear that only a small minority of most genomes is protein coding. In contrast, the number and variety of apparent regulatory sequences continues to grow - in human, eclipsing the number of protein coding genes by orders of magnitude. Decoding how regulatory sequences are recognized and interpreted by cells is fundamental to dissecting gene expression mechanisms, interpreting the significance of sequence variants, and understanding the function and evolution of genomes. Despite a wealth of sequencing and expression data, however, it remains surprisingly difficult to predict gene expression patterns on the basis of primary sequence, even in “simple” genomes such as that of yeast.  This shortcoming suggest that there are large gaps in available data, and/or that our conceptual models of how transcriptional and post-transcriptional regulation work are too simplistic.
                        </Text>
                    </Col>
                </Row>
                <Spacer y={1} />
            </Container>
            <Container>
                <Text h1 css={{ left: '5%' }}>Lab Members</Text>
                <Grid.Container gap={2} justify="center">
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Deb Ray'} Img={'../images/Deb.png'} Role={"Lab Staff"} />
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Ally Yang'} Img={'../images/Ally.jpg'} Role={"Lab Staff"} />
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Rozita Razavi'} Img={'../images/Rozy.jpg'} Role={"Lab Staff"}/>
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Mihai Albu'} Img={'../images/Mihai.png'} Role={"Lab Staff"}/>
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Hong Zheng'} Img={'../images/Hong_resize.jpg'} Role={"Lab Staff"}/>
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Alex Brezhalov'} Img={'../images/Sasha.jpeg'} Role={"Postdoc"}/>
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Arttu Jolma'} Img={'../images/Arttu.png'} Role={"Postdoc"}/>
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Kaitlin Laverty'} Img={'../images/Kaitlin.png'} Role={"PhD Student"}/>
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Isaac Yellan'} Img={'../images/Isaac.jpg'} Role={"PhD Student"} />
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Sara Pour'} Img={'../images/Sara.png'} Role={"PhD Student"}/>
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Shamira Tabrejee'} Img={'../images/Shamira.jpeg'} Role={"PhD Student"}/>
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Ali Fathi'} Img={'../images/ali.jpg'} Role={"PhD Student"}/>
                    </Grid>
                </Grid.Container>
            </Container>
        </div >
        <Footer />

    </Box>
);

export default People;

