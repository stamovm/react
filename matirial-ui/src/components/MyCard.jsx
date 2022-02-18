import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const MyCard = ({ card }) => {
  return (
    <Grid item key={card}>
      <Card className="card">
        <CardMedia
          component="img"
          height="300"
          image="https://source.unsplash.com/random"
          title="Image Title"
          alt="Random Image"
        />
        <CardContent>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Card Heading
          </Typography>
          <Typography>This is a media card.</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default MyCard
