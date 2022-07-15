import { Box, Grid, Link } from "@mui/material";
import { useRouter } from "next/router";


const Pagination = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  return (
    <Grid container>
      {startIndex > 10 && (
        <Grid item xs={1}>
        <Link
          href={`/search?q=${router.query.q}&searchType=${
            router.query?.searchType || ''
          }&start=${startIndex - 10}`}
        >
          <p>Previous</p>
        </Link>
        </Grid>
      )}
      {startIndex < 90 && (
        <Grid item xs={1}>
        <Link
          href={`/search?q=${router.query.q}&searchType=${
            router.query?.searchType || ''
          }&start=${startIndex + 10}`}
        >
          <p>Next</p>
        </Link>
        </Grid>
      )}
    </Grid>
  );
}

export default Pagination