import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useTheme } from '@nextui-org/react'
import { Box } from '@/components/Box'
import { Navbar, Grid, Spacer, Container, Image, Text } from '@nextui-org/react'
import { Footer } from '@/components/footer'
import { ResearchOverviewCard } from '@/components/ResearchCard'

const Home = () => {
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
							<div css={{ textAlign: 'left' }}>
								<Text h2 css={{ color: '#e01f00' }} align='left'>About Us</Text>
								<Text h4> We are a research group located at the Donnelly Centre, University of Toronto. Our primary focus is to understand how cells recognize and act upon DNA and RNA sequence. Major projects in the lab typically involve both wet and dry lab aspects, and many are collaborative, because it often becomes essential to engage experts in diverse and unexpected fields. <br /></Text>
							</div>
							<Spacer y={1} />
							<div css={{ textAlign: 'left' }}>
								<Text h2 css={{ color: '#ffb700' }} align='left'>Our Research</Text>
								<Text css={{ fontSize: '1.1rem' }}>Interpretation of nucleic acid sequence is a fundamental problem in molecular biology.
									It is now clear that only a small minority of most genomes is protein coding.
									In contrast, the number and variety of apparent regulatory sequences continues to grow - in human, eclipsing the number of protein coding genes by orders of magnitude.
									Decoding how regulatory sequences are recognized and interpreted by cells is fundamental to dissecting gene expression mechanisms,
									interpreting the significance of sequence variants, and understanding the function and evolution of genomes. Despite a wealth of sequencing and expression data, however,
									it remains surprisingly difficult to predict gene expression patterns on the basis of primary sequence, even in “simple” genomes such as that of yeast.
									This shortcoming suggest that there are large gaps in available data, and/or that our conceptual models of how transcriptional and post-transcriptional regulation work are
									too simplistic. <br /><br />

									This vexing problem - how do cells recognize DNA and RNA sequence, and act upon it - represents one of the grand challenges of our era, and our goal is to solve it in the general case. <br /><br />

									We know that the problem can be solved, because cellular biochemical mechanisms can easily solve it:
									foreign DNA introduced into cells is typically regulated in the same way as equivalent native DNA.
									In living cells, many regulatory factors and processes act in concert, and we therefore believe that a complete index of protein-DNA and protein-RNA sequence motifs
									will likely be necessary for this task.  In addition, many biological complexities will need to be incorporated into computational analyses.
									For example, DNA and RNA binding proteins interact with one another, and also provide an interface that selectively recruits other enzymes and structural components,
									thus determining the “epigenetic landscape”.  Uncovering the linkages between these layers of regulation is critical to a mechanistic understanding of the functions of
									individual components as well as the entire system.
								</Text>

							</div>
						</div>
						<div className={styles.column}>
							<div css={{ textAlign: 'left' }}>
								<Text h2 css={{ color: '#00d800' }} align='center'>Selected Projects</Text>
								<Container alignContent='right'>
									<Grid.Container gap={2} align='center' justify='center'>
										<Grid xs={12} sm={12} md={10} lg={10}>
											<ResearchOverviewCard
												imageSrc="../images/rbp.jpg"
												overlayText="Comprehensive views of protein-DNA and protein-RNA recognition" />
										</Grid>
										<Grid xs={12} sm={12} md={10} lg={10}>
											<ResearchOverviewCard
												overlayText="Dissecting the evolution of gene regulation mechanisms"
												imageSrc="../images/zf.png"
											/>
										</Grid>
										<Grid xs={12} sm={12} md={10} lg={10}>
											<ResearchOverviewCard imageSrc="../images/unifiedmodel.jpg"
												overlayText="Improving sequence-based models of gene regulation"
												href="/projects"
											/>
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

export default Home



