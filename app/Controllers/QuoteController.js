import {ProxyState} from "../AppState.js"
//TODO Create methods for constructor, and rendering the quote to the page
import quoteService from "../Services/QuoteService.js";

function _drawQuote() {
  let quote = ProxyState.quote
  console.log(quote)
  // @ts-ignore
  document.getElementById("quoteArea").innerHTML = `<h5 class="tooltip">${quote.body} <span class="tooltiptext text-primary">Author: ${quote.author}</span></h5>`
}

export default class QuoteController {
  constructor() {
  console.log("quote controller is connected");
  ProxyState.on("quote", _drawQuote)
  this.getQuote()
  }

  getQuote() {
    try {
      quoteService.getQuote()
    } catch (error) {
      console.error(error);
    }
  }

  getAuthor()
{
  try {
    quoteService.getAuthor()
  } catch (error) {
    console.error(error);
  }
} }