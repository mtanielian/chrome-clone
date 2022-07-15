export const getResults = async ({ q = '', start = 1, searchType = '' }) => {
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.API_CX}&q=${q}&start=${start}&${searchType !== '' && `searchType=${searchType}`}`)
  const data = await res.json()
  return data
}

