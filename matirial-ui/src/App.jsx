import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import AppBar from '@mui/material/AppBar'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    color: (props) => props.color,
  },
})

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className="main-div">
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
            <div>
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
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}

export default App
