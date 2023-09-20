import './App.css';
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import PreNavbar from './components/PreNavbar';
import Slider from './components/Slider';
import StarProduct from './components/StarProduct';
import data from "./data/data.json"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSARIES" />
      <HotAccessoriesMenu />
{/* old syntax react-router-dom v5 : 
<Route exact path  = "/music">  <HotAccessories /> </Route> */}
      <Routes>
        <Route  path="/music" element={<HotAccessories  music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route  path="/smart-device" element={<HotAccessories  music={data.hotAccessories.smartDevice} musicCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route  path="/home" element={<HotAccessories  music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home} />} />
        <Route  path="/lifestyle" element={<HotAccessories  music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route  path="/mobile-accessories" element={<HotAccessories  music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories} />} />
{/* I've used music and musicCover generically to send all images and render respective accessary. */}
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} /> 
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner end={data.banner.end}/>
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
