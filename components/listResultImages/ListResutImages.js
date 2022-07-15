import { CardMedia, Grid, Link, Typography } from "@mui/material"

const ListResutImages = ({ items = [] }) => {
  return (
    <Grid container spacing={2}>
      {items.map(({ image, link, title, displayLink }) => (
        <Grid key={link} item xs={6} md={3} sm={12}>
          <Link href={link} underline='none'>
            <CardMedia
              src={link}
              alt={title}
              width='100%'
              height={200}
              component='img'
            />
          </Link>
          <Link href={image.contextLink} color='inherit' underline="hover">
            <Typography variant="subtitle1">{title}</Typography>
          </Link>
          <Link href={image.contextLink} color='inherit' underline="hover">
            <Typography variant="subtitle2">{displayLink}</Typography>
          </Link>
        </Grid>

      ))}
    </Grid>
  )
}

export default ListResutImages