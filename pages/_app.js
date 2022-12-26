import Sidebar from '../components/global/Sidebar'
import Topbar from '../components/global/Topbar'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      <div className="flex bg-base-200" data-theme="dracula">
        <div class="h-screen sticky top-0">
          <Sidebar />
        </div>
        <div className="p-4 ml-8 w-4/5 ">
          <Topbar />

          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default App
