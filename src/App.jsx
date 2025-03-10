import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Main from "./components/Main"
import Loyha from "./components/Loyha"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <div className="mx-auto p-0 box-border max-w-[1440px]">
        <Navbar />
        <Header />
        <Main />
        <Loyha />
        <Footer />
      </div>
    </>
  )
}

export default App
