import Head from 'next/head'
import { Image, Text } from "@nextui-org/react";
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import { useTheme } from '@nextui-org/react'
import { Box } from '@/components/Box'
import { Navbar, Grid, Spacer, Container } from '@nextui-org/react'
import { Footer } from '@/components/footer'
import { ResearchOverviewCard } from '@/components/ResearchCard'

const inter = Inter({ subsets: ['latin'] })

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
        </Box>
    )
}

export default Projects

