import "./index.css";
import Api from "../components/api.js";
import Form from "../components/Form.js";
import {
  giphyConfig,
  formConfig
} from "../utils/consts.js"

const api = new Api(giphyConfig);

const searchForm = new Form(formConfig, handleSearchGif);

/**
 * 
 * @param {Event} event 
 * @param {*} inputs 
 */

function handleSearchGif(event, values) {
  event.preventDefault();

  api.searchGifs(values["search-query"])
  .then(gifs => {
    console.log(gifs);
  })
  .catch(err => {
    console.log(err);
  })
}

searchForm.setEventsListeners();
