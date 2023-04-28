import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useTheme } from '@nextui-org/react'
import { Box } from '@/components/Box'
import { Navbar, Grid, Spacer, Container, Image, Text } from '@nextui-org/react'
import { Footer } from '@/components/footer'
import { ResearchOverviewCard } from '@/components/ResearchCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
							<Navbar.Link href="/data" css={{ color: "#0226cc" }}>Data</Navbar.Link>
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
				<div className={styles.head}>

					<Text
						h1
						align="center"
						css={{
							position: 'relative',
							color: 'black',
							left: '50%',
							width: '100%',
							transform: 'translate(-50%, -50%)',
							textAlign: 'center',
							fontSize: '4rem',
							marginBottom: '-2rem',
							zIndex: 1,
							'@media screen and (max-width: 640px)': {
								fontSize: '3rem',
							},
						}}
					>
						Welcome to the Hughes Lab!
					</Text>

					<Text
						italic
						align="center"
						css={{
							position: 'relative',
							color: 'black',
							left: '50%',
							width: '100%',
							transform: 'translate(-50%, -50%)',
							textAlign: 'center',
							fontSize: '2rem',
							marginBottom: '-1rem',
							zIndex: 1,
							'@media screen and (max-width: 640px)': {
								fontSize: '1rem',
							},
						}}
					>
						where nucleotide meets protein
					</Text>
					<Image
						src="/images/summerphoto.jpg"
						width="100%"
						alt="Hughes Lab BBQ"
						height="auto"
						layout="responsive"
						loading="lazy"
						css={{
							position: 'relative',
							objectFit: 'cover',
							objectPosition: 'center',
							width: '100%',
							height: '100%',
							zIndex: 0,
							overflow: 'hidden',
							'@media screen and (max-width: 640px)': {
								height: '100%',
								width: '100%',
							},
						}}
					/>
				</div>
				<main className={styles.main}>
					<div className={styles.container}>
						<div className={styles.column}>
							<Text h2 css={{
								color: '#e01f00'
							}}>Our Lab</Text>
							<Text p css={{ color: 'black', marginBottom: '2rem' }}>The Hughes Lab is a research group at the University of Toronto, Donnelly Centre. Interpretation of nucleic acid sequence is a fundamental problem in molecular biology.  It is now clear that only a small minority of most genomes is protein coding. In contrast, the number and variety of apparent regulatory sequences continues to grow - in human, eclipsing the number of protein coding genes by orders of magnitude. Decoding how regulatory sequences are recognized and interpreted by cells is fundamental to dissecting gene expression mechanisms, interpreting the significance of sequence variants, and understanding the function and evolution of genomes. Despite a wealth of sequencing and expression data, however, it remains surprisingly difficult to predict gene expression patterns on the basis of primary sequence, even in “simple” genomes such as that of yeast.  This shortcoming suggest that there are large gaps in available data, and/or that our conceptual models of how transcriptional and post-transcriptional regulation work are too simplistic. </Text>
							<Text h2 css={{ color: '#ffb700' }}>Our Research</Text>
							<Text p css={{ color: 'black' }}>Projects central to the lab include the following:
								<Text style={{ fontWeight: 'bold' }}>1. Improving sequence-based models of gene regulation</Text>
								Basic questions in this arena encompass how regulatory sequences and even gene structures are defined, and how they are activated.  We recently described a computational model that inputs only the sequence preferences of DNA and RNA binding proteins, and accurately predicts known gene structures, as well as expression from randomly-generated sequences (de Boer et al., Genome Research 2014).  The model also predicts and explains the origins of non-genic transcripts, and indicates that definition of genomic elements is intimately tied to control of expression levels - a finding that is likely relevant in other genomes, e.g. human, in which the locations of regulatory elements and transcript isoforms often change between cell types.  Goals of ongoing efforts include predicting transcript levels, modelling post-transcriptional regulatory mechanisms, and extending these models in other organisms.
								<Spacer y={1} />
								<Text style={{ fontWeight: 'bold' }}>2. Comprehensive views of protein-DNA and protein-RNA recognition</Text>
								Eukaryotic genomes encode hundreds to thousands of proteins that contain sequence-specific DNA and RNA binding domains.  These are the basic building blocks of gene regulation programs, and their binding motifs are an essential ingredient in the gene regulation formula.  We are systematically decoding protein-DNA and proten-RNA sequence preferences across the eukaryotes (Weirauch, Yang et al., Cell 2014; Ray, Kazan, Cook, Weirauch, Najafabadi et al., Nature 2013) using a variety of approaches, including new experimental and computational techniques that we develop.
								<Spacer y={1} />
								<Text style={{ fontWeight: 'bold' }}>3. Dissecting the evolution of gene regulation mechanisms</Text>
								Many DNA and RNA binding proteins display deep evolutionary conservation, but most lineages also contain families in which divergence is common.  Striking cases include the ~700 human C2H2 zinc finger proteins, whose expansion appears to be driven by retroelements, which are highly enriched among genomic sequences bound in vivo (Najafabadi, Mnaimneh, Schmitges et al., Nature Biotechnology 2015).  In C. elegans, the nuclear hormone receptors have undergone a similar expansion and diversification in binding sites (Narasimhan, Lambert et al., eLife 2015).  We anticipate that global analysis of binding sites, sequence preferences, protein partners, and the impact of genetic perturbations on transcript levels will provide insight into the function and origin of newly-evolved proteins.</Text>
						</div>
						<div className={styles.column}>
							<div css={{ textAlign: 'left' }}>
								<Text h2 css={{ color: '#00d800' }} align='center'>Selected Projects</Text>
								<Container alignContent='right'>
									<Grid.Container gap={2} align='center' justify='center'>
										<Grid xs={12} sm={12} md={10} lg={10}>
											<ResearchOverviewCard imageSrc="../images/rbp.jpg" overlayText="Comprehensive views of protein-DNA and protein-RNA recognition" css={{
											}} title="Project 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Donec euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, eget aliquet nisl nisl eget nisl." />
										</Grid>
										<Grid xs={12} sm={12} md={10} lg={10}>
											<ResearchOverviewCard overlayText="Dissecting the evolution of gene regulation mechanisms" imageSrc="../images/zf.png" title="Project 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Donec euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, eget aliquet nisl nisl eget nisl." />
										</Grid>
										<Grid xs={12} sm={12} md={10} lg={10}>
											<ResearchOverviewCard imageSrc="../images/unifiedmodel.jpg" overlayText="Improving sequence-based models of gene regulation" title="Project 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Donec euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, eget aliquet nisl nisl eget nisl." />
										</Grid>
									</Grid.Container>
								</Container>
							</div>
						</div>
					</div>
				</main>
			</div>

			<Footer />


		</Box>
	)
}



