import imageService from "../Services/ImageService.js"
import {ProxyState} from "../AppState.js"
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)

function _drawImage() {
  let image = ProxyState.image
  console.log(image);
  document.getElementById("bg-img").style.backgroundImage = `url(${image})`
}

export default class ImageController { 
  constructor(){
    debugger
    this.getImage()
    ProxyState.on("image", _drawImage)
 }

  getImage() {
    try {
      imageService.getImage()
    }  catch (error) {
      console.error(error);
    }
  }
 }