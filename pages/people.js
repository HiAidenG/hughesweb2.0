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
                    <Col xs={12} sm={6} md={5} lg={4} xl={3}>
                        <Image src='../images/Tim.png' objectFit='fill' />
                    </Col>
                    <Spacer x={1.5} />
                    <Col xs={12} md={7}>
                        <h1> Tim Hughes </h1>
                        <Spacer y={1} />
                        <Text size={18} color="black" css={{ m: 0, textSize: '1.1rem' }} className='responsiveText.textResponsive'>
                            Timothy Hughes is a molecular geneticist studying how proteins recognize DNA sequences and work together to regulate genes, in humans and other organisms. <br /><br />
                            Often described as a “blueprint,” the genome is in fact a highly encoded instruction set – there is no simple mapping between the genome and the organism, and this shortcoming means that the function of the vast majority of the human genome is incomprehensible to us. As a first step, Hughes is decoding the sequences that are recognized by the thousands of proteins that bind DNA and RNA and regulate gene activity, and using these data to build computational models of global gene regulation. A long-term goal of his research is to enable meaningful interpretation of human sequence variation and mutations, and to enable targeted modulation of cellular processes that are altered in disease.
                        </Text><br />
                        <Text size={18} color="black" css={{ m: 0, textSize: '1.1rem', fontWeight: 'bold' }} className='responsiveText.textResponsive'>
                            Qualifications:</Text>
                        <Text size={18} color="black" css={{ m: 0, textSize: '1.1rem' }} className='responsiveText.textResponsive'> Baylor College of Medicine, Houston, TX, U.S., PhD in Cellular and Molecular Biology, 1998. <br />
                            University of Iowa, Iowa City, IA, U.S., BSc in Electrical Engineering, 1993.<br />
                            University of Iowa, Iowa City, IA, U.S., Bachelor of Music in String Bass Performance, 1991. <br />

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
                        <PersonCard Name={'Rozita Razavi'} Img={'../images/Rozy.jpg'} Role={"Lab Staff"} />
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Mihai Albu'} Img={'../images/Mihai.png'} Role={"Lab Staff"} />
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Hong Zheng'} Img={'../images/Hong_resize.jpg'} Role={"Lab Staff"} />
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Alex Brezhalov'} Img={'../images/Sasha.jpeg'} Role={"Postdoc"} />
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Arttu Jolma'} Img={'../images/Arttu.png'} Role={"Postdoc"} />
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Kaitlin Laverty'} Img={'../images/Kaitlin.png'} Role={"PhD Student"} />
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Isaac Yellan'} Img={'../images/Isaac.jpg'} Role={"PhD Student"} />
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Sara Pour'} Img={'../images/Sara.png'} Role={"PhD Student"} />
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Shamira Tabrejee'} Img={'../images/Shamira.jpeg'} Role={"PhD Student"} />
                    </Grid>
                    <Grid xs={12} sm={6} md={5} lg={4} xl={3}>
                        <PersonCard Name={'Ali Fathi'} Img={'../images/ali.jpg'} Role={"PhD Student"} />
                    </Grid>
                </Grid.Container>
            </Container>
        </div >
        <Footer />

    </Box >
);

export default People;

