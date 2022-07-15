import Head from "next/head"
import Footer from "../footer/Footer"
import NavBarSearch from "../navbar/NavBarSearch"

const SearchLayout = ({children, title = 'google browswer clone', pageDescription = 'broswer, google, chrome, search', imageFullUrl }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={pageDescription} />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={pageDescription} />
        
        {Boolean(imageFullUrl) && 
          <meta name='og:image' content={imageFullUrl} />
        }
      </Head>
      
      <NavBarSearch />
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default SearchLayout