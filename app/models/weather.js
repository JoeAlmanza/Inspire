export default class Weather {
  constructor(data) {

    this.city = data.name
    this.kelvin = data.main.temp
    this.celcius = Math.floor(this.kelvin - 273.15) + "&deg; C"
    this.fahrenheit = Math.floor(this.kelvin * (9/5) - 459.67) + "&deg; F"
    this.showF = true
    console.log('[RAW WEATHER API DATA]', data);
    //XX NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

  }

  get fTemplate() {
    return `
      <div class="row">
        <div class="card col-12 bg-tp text-light text-center">
          <div class="card-body p-0">
            <h4>${this.city}</h4>
            <h5>${this.fahrenheit}</h5>
          </div>
        </div>
      </div>
    `
  }

  get cTemplate() {
    return `
      <div class="row">
        <div class="card col-12 bg-tp text-light text-center">
          <div class="card-body p-0">
            <h4>${this.city}</h4>
            <h5>${this.celcius}</h5>
          </div>
        </div>
      </div>
    `
  }
}