import Banner from "./ui/Banner"
import Banner2 from "./ui/Banner2"
import ChoosePlan from "./ui/ChoosePlan"
import Footer from "./ui/Footer"
import GlobalNetwork from "./ui/GlobalNetwork"
import Interface from "./ui/Interface"
import Navbar from "./ui/Navbar"
import Review from "./ui/Review"
import Subscribe from "./ui/Subscribe"
 
function App() {
   return (
    <div className="">
      <div className="bg-white py-2 z-10 sticky top-0">
    <Navbar/>
    

      </div>
    <div className="max-w-6xl px-4 mx-auto">
      <Banner/>
      <Interface/>
      <Banner2/>
      <ChoosePlan/>
      <GlobalNetwork/>
      <Review/>
      <Subscribe/>
   </div>
      <div className="shadow-2xl py-12">
      <Footer/>
       </div>

    </div>
  )
}

export default App
