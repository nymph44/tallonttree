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
        className="flex bg-base-200 bg-fixed bg-no-repeat	bg-origin-border bg-cover bg-center  "
        style={backgroundStyle}
      >
        <div className="h-screen sticky top-0">
          <Sidebar />
        </div>
        <div className="p-4 ml-8 w-full ">
          <Topbar />

          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default App
