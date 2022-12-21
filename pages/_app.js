import Sidebar from '../components/global/Sidebar'
import Topbar from '../components/global/Topbar'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      <div className="flex" data-theme="halloween">
        <Sidebar />
        <div className="p-4 ml-8 w-4/5 bg-base-100 ">
          <Topbar />

          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default App
