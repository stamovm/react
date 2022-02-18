import React from 'react'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { green, teal } from '@mui/material/colors'
import MyCard from './components/MyCard'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: green[500],
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box className="main-div">
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone. This is a photo album. The perpose of this
              sentence here, is to be an example of a long sentence.
            </Typography>
            <Box>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See the photos
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary actions
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        <Container className="card-grid" maxWidth="md">
          {cards.map((card) => (
            <MyCard card={card} />
          ))}
        </Container>
      </main>
    </ThemeProvider>
  )
}

export default App
