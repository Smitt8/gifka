import "./index.css";


import Api from "../components/api.js";
import Form from "../components/Form.js";

import Section from "../components/Section.js";
import Gif from "../components/Gif.js";

import {
  giphyConfig,
  formConfig
} from "../utils/consts.js"

const api = new Api(giphyConfig);

const searchForm = new Form(formConfig, handleSearchGif);

function addGif(link) {
  const giphy = new Gif(link, '#template-item');
  return giphy.generateItem();
}

/**
 *
 * @param {Event} event
 * @param {*} inputs
 */
const listContainer = new Section((giphy) => {
  listContainer.addItem(addGif(giphy.link));
}, ".animation-images__list");

function handleSearchGif(event, values) {
  event.preventDefault();
  api.searchGifs(values["search-query"])
  .then( data => {
    // console.log(data.id);
    listContainer.addItem(addGif(`https://media1.giphy.com/media/${data.id}/giphy.gif`))
  })
  .catch(err => {
    console.log(err);
  })
}

searchForm.setEventsListeners();
