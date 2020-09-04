import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

// XX TODO Complete rendering data to the screen
function _drawWeather() {
  let weather = ProxyState.weather
  console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
  document.getElementById("weatherArea").innerHTML = weather.fTemplate
}
export default class WeatherController {
  constructor() {
    this.getWeather()
    ProxyState.on("weather", _drawWeather);
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }

  toggleDeg() {
    debugger
    let res = ProxyState.weather
    if (document.getElementById("weatherArea").innerHTML = res.fTemplate) {
      document.getElementById("weatherArea").innerHTML = res.cTemplate
    }
    else if(document.getElementById("weatherArea").innerHTML = res.cTemplate){
      document.getElementById("weatherArea").innerHTML = res.fTemplate
    }
  }

}
