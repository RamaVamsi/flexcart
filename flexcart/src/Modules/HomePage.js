import "../App.css";

import HomePageCarousel from "../Screens/HomePageCarousel";
import Timer from "../Screens/Timer";

function HomePage() {
  return (
    <div className="App">
      <HomePageCarousel />
      <div className="App-header">
        <Timer />
      </div>
    </div>
  );
}

export default HomePage;
