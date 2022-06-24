// import "./index.css";


import Api from "../components/api.js";
import Form from "../components/Form.js";
import SearchForm from "../components/SearchForm.js";

import Section from "../components/Section.js";
import Gif from "../components/Gif.js";
import Tab from "../components/Tab.js";

import {
  giphyConfig,
  searchConfig
} from "../utils/consts.js"

const api = new Api(giphyConfig);

const searchForm = new SearchForm(searchConfig, handleSearchGif);


function addGif(link) {
  const giphy = new Gif(link, '#template-item');
  return giphy.generateItem();
}

const listContainer = new Section((giphy) => {
  listContainer.addItem(addGif(giphy.link));
}, ".animation-images__list");

/**
 *
 * @param {Event} event
 * @param {*} inputs
 */

function handleSearchGif(event, values) {
  event.preventDefault();
  api.searchGifs(values["search-query"])
  .then( giphy => {
    listContainer.free();
    giphy.data.forEach(item => {
      listContainer.addItem(addGif(`https://media1.giphy.com/media/${item.id}/giphy.gif`));
    });
  })
  .catch(err => {
    console.log(err);
  })
}

function handleTrendGif() {
  api.loadTrending()
    .then( giphy => {
      listContainer.free();
      giphy.data.forEach(item => {
        listContainer.addItem(addGif(`https://media1.giphy.com/media/${item.id}/giphy.gif`));
      });
    })
    .catch(err => {
      console.log(err);
    })
}


searchForm.setEventsListeners();


//-------------------------///


const SearchString = document.querySelector('.search-link');

const btnRandom = new Tab('.tab-item_random',  btnRandomClick);
const btnSearch = new Tab('.tab-item-search',  btnSearchClick);
const btnNew = new Tab('.tab-item-new',  btnSearchClick);
const btnTrends = new Tab('.tab-item-trend',  btnSearchClick);


function btnRandomClick() {
  SearchString.classList.remove('search-link_opened');
}

function btnSearchClick() {
  SearchString.classList.add('search-link_opened');
}


btnRandom.setEventsListeners();
btnSearch.setEventsListeners();
btnNew.setEventsListeners();
btnTrends.setEventsListeners();


