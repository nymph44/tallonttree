import Sidebar from '../components/global/Sidebar'
import Topbar from '../components/global/Topbar'
import '../styles/globals.css'
function App({ Component, pageProps }) {
  return(
  <>
  <div className="flex">

    <Sidebar />
    <div className="p-4 w-full">
      <Topbar />
    <Component {...pageProps} />
    </div>
  </div>
  </>
  )
}

export default App
