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
    let res = ProxyState.weather
    if (res.showF) {
      document.getElementById("weatherArea").innerHTML = res.cTemplate
      res.showF = false
    }
    else{
      document.getElementById("weatherArea").innerHTML = res.fTemplate
      res.showF = true
    }
  }

}
