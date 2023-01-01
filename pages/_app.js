import Footer from '../components/global/Footer'
import Sidebar from '../components/global/Sidebar'
import Topbar from '../components/global/Topbar'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  const backgroundStyle = {
    backgroundImage: 'url(/assets/img/vector/VectorMask.png',
  }

  return (
    <>
      <div
        className="flex bg-base-100 bg-fixed bg-no-repeat	bg-origin-border bg-cover bg-center  "
        style={backgroundStyle}
      >
        <div className="h-screen sticky top-0">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="p-4 ml-8 pb-20">
            <Topbar />

            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
