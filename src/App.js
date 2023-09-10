import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import PreNavbar from './components/PreNavbar';
import Slider from './components/Slider';
import data from "./data/data.json"

function App() {
  return (
    <div>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer= {data.offer} />
    </div>
  );
}

export default App;
