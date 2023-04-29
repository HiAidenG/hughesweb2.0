    import Head from 'next/head'
    import { Image, Text } from "@nextui-org/react";
    import { Inter } from 'next/font/google'
    import styles from '../styles/Home.module.css'
    import { useTheme } from '@nextui-org/react'
    import { Box } from '@/components/Box'
    import { Navbar, Grid, Spacer, Container, Link } from '@nextui-org/react'
    import { Footer } from '@/components/footer'
    import { ResearchOverviewCard } from '@/components/ResearchCard'

const Projects = () => {
    const theme = useTheme()
    return (
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
                            <Navbar.Link href="/Data" css={{ color: "#0226cc" }}>Data</Navbar.Link>
                        </Grid>
                    </Grid.Container>
                </Navbar.Content>
            </Navbar>
            <div>
                <Head>
                    <title>Hughes Lab</title>
                    <meta name="description" content="Hughes Lab Home" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.main}>
                    <Grid.Container gap={0}>
                    <Grid xs={24} sm={24} md={12}>
                            <div className={styles.container}>
                                <div className={styles.column}>
                            <div css={{ textAlign: 'center' }}>
                                    <Text h3 css={{ color: 'black' }} align='center'>Comprehensive views of protein-DNA and protein-RNA recognition:</Text>
                                    <Text css={{ fontSize: '1.1rem' }}> Eukaryotic genomes encode hundreds to thousands of proteins that contain sequence-specific DNA and RNA binding domains.  These are the basic building blocks of gene regulation programs, and their binding motifs are an essential ingredient in the gene regulation formula.  We are systematically decoding protein-DNA and proten-RNA sequence preferences across the eukaryotes (Weirauch, Yang et al., Cell 2014; Ray, Kazan, Cook, Weirauch, Najafabadi et al., Nature 2013) using a variety of approaches, including new experimental and computational techniques that we develop. <br /></Text>
                                </div>
                                </div>
                                <div className={styles.column}>
                           
                                <div css={{ textAlign: 'center' }}>
                                    <Text h3 css={{ color: 'black' }} align='center'>Dissecting the evolution of gene regulation mechanisms:</Text>
                                    <Text css={{ fontSize: '1.1rem' }}>
                                        Many DNA and RNA binding proteins display deep evolutionary conservation, but most lineages also contain families in which divergence is common.  Striking cases include the ~700 human C2H2 zinc finger proteins, whose expansion appears to be driven by retroelements, which are highly enriched among genomic sequences bound in vivo (Najafabadi, Mnaimneh, Schmitges et al., Nature Biotechnology 2015).  In C. elegans, the nuclear hormone receptors have undergone a similar expansion and diversification in binding sites (Narasimhan, Lambert et al., eLife 2015).  We anticipate that global analysis of binding sites, sequence preferences, protein partners, and the impact of genetic perturbations on transcript levels will provide insight into the function and origin of newly-evolved proteins.
                                    </Text>
                                </div>
                                </div>
                                <div className={styles.column}>
                               
                                <div css={{ textAlign: 'center' }}>
                                    <Text h3 css={{ color: 'black' }} align='center'>Improving sequence-based models of gene regulation:</Text>
                                    <Text css={{ fontSize: '1.1rem' }}>
                                        Basic questions in this arena encompass how regulatory sequences and even gene structures are defined, and how they are activated.  We recently described a computational model that inputs only the sequence preferences of DNA and RNA binding proteins, and accurately predicts known gene structures, as well as expression from randomly-generated sequences (de Boer et al., Genome Research 2014).  The model also predicts and explains the origins of non-genic transcripts, and indicates that definition of genomic elements is intimately tied to control of expression levels - a finding that is likely relevant in other genomes, e.g. human, in which the locations of regulatory elements and transcript isoforms often change between cell types.  Goals of ongoing efforts include predicting transcript levels, modelling post-transcriptional regulatory mechanisms, and extending these models in other organisms.
                                    </Text>
                                </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={24} sm={24} md={12}>
                            
                            <div className={styles.container}>
                                {/* Publications */}
                                <div css={{ textAlign: 'center' }}>
                                    <Spacer y={1.0}/>
                                    < hr/>
                                    <Spacer y={1.0}/>
                                    <Text h3 css={{ color: 'black' }} align='center'>Publications</Text>
                                    <div css={{ textAlign: 'center' }}>
                                        <Text css={{fontWeight: 'bold', fontSize: '1.1rem'}}>2023</Text>
                                        <ul>
                                        <li>Ray D, Laverty KU, Jolma A, Nie K, Samson R, Pour SE, Tam CL, von Krosigk N, Nabeel-Shah S, Albu M, Zheng H, Perron G, Lee H, Najafabadi H, Blencowe B, Greenblatt J, Morris Q, Hughes TR. (2023). RNA-binding proteins that lack canonical RNA-binding domains are rarely sequence-specific. Sci Rep. 2023 Mar 31;13(1):5238</li>
                                        <li>Shkurin A, Pour SE, Hughes TR. (2023). Known sequence features explain half of all human gene ends. NAR Genom Bioinform. 2023 Apr 5;5(2)</li>
                                        <li>Ichikawa DM, Abdin O, Alerasool N, Kogenaru M, Mueller AL, Wen H, Giganti DO, Goldberg GW, Adams S, Spencer JM, Razavi R, Nim S, Zheng H, Gionco C, Clark FT, Strokach A, Hughes TR, Lionnet T, Taipale M, Kim PM, Noyes MB. (2023). A universal deep-learning model for zinc finger design enables transcription factor reprogramming. Nat Biotechnol. 2023 Jan 26. doi: 10.1038/s41587-022-01624-4.</li>
                                        </ul>
                                        <Text css={{fontWeight: 'bold', fontSize: '1.1rem'}}>2022</Text>
                                        <ul>
                                        <li>Zheng, L., Liu J., Niu, L., Kamran, M., Yang, A.W.H., Jolma, A., Dai, Q., Hughes, T.R., Patel, D.J., Zhang, L., Prasanth, S.G., Yu, Y., Ren, A., Lai, E.C. (2022). Distinct structural bases for sequence-specific DNA binding by mammalian BEN domain proteins Genes Dev 36(3-4):225-240.</li>
                                        <li>Laverty KU, Jolma A, Pour SE, Zheng H, Ray D, Morris Q, Hughes TR. (2022). PRIESSTESS: interpretable, high-performing models of the sequence and structure preferences of RNA-binding proteins. Nucleic Acids Res. 2022 Oct 28;50(19).</li>
                                        </ul>
                                        <Text css={{fontWeight: 'bold', fontSize: '1.1rem'}}>2021</Text>
                                        <ul>
                                        <li>Patel, Z.M. and Hughes, T.R. (2021) Global properties of regulatory sequences are predicted by transcription factor recognition mechanisms. Genome Biol. 7;22(1):285. </li>
                                        <li>Yellan, I., Yang, A.W.H., and Hughes, T.R. (2021) Diverse Eukaryotic CGG-Binding Proteins Produced by Independent Domestications of hAT Transposons. Mol Biol Evol. 38(5):2070-2075. </li>
                                        <li>Zhang, M., Lei, M., Qin, S., Dong, A., Yang, A., Li, Y., Loppnau, P., Hughes, T.R., Min, J., Liu, Y. (2021) Crystal structure of the BRPF2 PWWP domain in complex with DNA reveals a different binding mode than the HDGF family of PWWP domains. Biochim Biophys Acta Gene Regul Mech. 1864(3):194688. </li>
                                        </ul>
                                    <Link href='https://pubmed.ncbi.nlm.nih.gov/?term=Hughes%20TR%20%5BAuthor%5D'>More on Pubmed</Link>
                                    <Spacer y={2} />
                                </div>
                                </div>

                                <Spacer y={3} />

                            </div>

                        </Grid>

                    </Grid.Container>
                </div>
            </div>

            <Footer />
        </Box>
    )
}
        

export default Projects

