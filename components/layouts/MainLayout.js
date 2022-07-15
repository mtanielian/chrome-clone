import Head from "next/head"
import Footer from "../footer/Footer"
import NavBar from "../navbar/NavBar"

const MainLayout = ({children, title = 'google browswer clone', pageDescription = 'broswer, google, chrome, search', imageFullUrl }) => {
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
      
      <NavBar />
      <main style={{
        margin: '80px auto',
        maxWidth: '1440px',
        padding: '0px 30px'
      }}>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default MainLayout