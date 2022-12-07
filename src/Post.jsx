import React from 'react'
import {
    Button,
    Card,
    CardActionArea,
    Typography,
    CardActions,
    CardContent,
    CardMedia,
  } from "@mui/material";
const Post = () => {
  return (
    <Card sx={{marginTop:"15px"}}>
        <CardActionArea>
          <CardMedia
            sx={{ height: 300 }}
            component="img"
            height="140"
            image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fca29907-a82d-40fb-8990-883e439370bf/d9672zs-cb318115-efdc-4fe5-b4e4-de09ebc800cd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjYTI5OTA3LWE4MmQtNDBmYi04OTkwLTg4M2U0MzkzNzBiZlwvZDk2NzJ6cy1jYjMxODExNS1lZmRjLTRmZTUtYjRlNC1kZTA5ZWJjODAwY2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zJJYg1Ef6bKCYHDkaUg74WxjdieA_i2VTP_6mKCG4FE"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              7,000 species,[1] ranging across all continents except Antarctica,
              as well as most oceanic island chains. The group is paraphyletic
              since it excludes the snakes and Amphisbaenia although some
              lizards are more closely related to these two excluded groups than
              they are to other lizards.
              dragon.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button>Share</Button>
            <Button>Learn More</Button>
          </CardActions>
      </Card>
  )
}

export default Post
