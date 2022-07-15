import { Box, Link, Typography } from "@mui/material"

const ListResults = ({ items = [] }) => {
  return (
    <>
      {items.map(({ chacheId, link, formattedUrl, title, htmlSnippet }) => {
        return (
          <Box key={chacheId} sx={{marginY: 4, maxWidth: '650px'}}>
            <Link href={link} underline="none" color="inherit">{formattedUrl}</Link>
            <Link href={link} underline="none">
              <Typography variant="h6">{title}</Typography>  
            </Link>            
            <Typography variant="body1" component='div' dangerouslySetInnerHTML={{ __html: htmlSnippet }}></Typography>
          </Box>
        )
      })}
    </>
  )
}

export default ListResults