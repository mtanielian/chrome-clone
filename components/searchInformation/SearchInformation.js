import { Typography } from "@mui/material"

const SearchInformation = ({ searchTime, totalResults }) => {
  return (
    <Typography variant="subtitle2" color='gray'>
      About {totalResults} results ({searchTime} seconds)
    </Typography>
  )
}

export default SearchInformation