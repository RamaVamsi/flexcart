import { useEffect, useState } from "react";
import "../../src/App.css";
export default function Timer() {
  const [dateTimer, setDateTimer] = useState();
  useEffect(() => {
    DateFetch();
  }, []);

  const DateFetch = () => {
    clock();
    function clock() {
      var now = new Date();
      var TwentyFourHour = now.getHours();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var mid = "pm";
      if (min < 10) {
        min = "0" + min;
      }
      if (hour > 12) {
        hour = hour - 12;
      }
      if (hour == 0) {
        hour = 12;
      }
      if (TwentyFourHour < 12) {
        mid = "am";
      }
      setDateTimer(hour + ":" + min + ":" + sec + " " + mid);
      setTimeout(clock, 1000);
    }
  };
  return (
    <div className="ImageStyle">
      <div className="Container">
        <p>Deals of the Day</p>
        <img
          className="ImageStyle"
          src={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
          }
        />
        <p className="ImageStyle">{dateTimer}</p>
      </div>
    </div>
  );
}
