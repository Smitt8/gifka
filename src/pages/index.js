// import "./index.css";


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

function handleRandomGif() {
  api.getRandom()
    .then( (data) => {
      listContainer.free();
      //console.log(data.id);
      // listContainer.addItem(addGif(`https://media1.giphy.com/media/${giphy.id}/giphy.gif`));
    })
    .catch(err => {
      console.log(err);
    })
}

searchForm.setEventsListeners();

//подумать!

const btnRandom = document.querySelector('.tab-item_random');
const btnTrend = document.querySelector('.tab-item-trend');
const btnNew = document.querySelector('.tab-item-new');
const btnSearch = document.querySelector('.tab-item-search');
const searchLink = document.querySelector('.search-link');


btnRandom.addEventListener('click', btnRandomClick);
btnTrend.addEventListener('click', btnTrendClick);
btnNew.addEventListener('click', btnNewClick);
btnSearch.addEventListener('click', btnSearchClick);


function btnRandomClick() {
  btnRandom.classList.add("tab-item_selected");

  btnNew.classList.remove("tab-item_selected");
  btnTrend.classList.remove("tab-item_selected");
  btnSearch.classList.remove("tab-item_selected");

  searchLink.classList.remove("search-link_opened");

  handleRandomGif();
}



function btnTrendClick() {
  btnTrend.classList.add("tab-item_selected");

  btnRandom.classList.remove("tab-item_selected");
  btnNew.classList.remove("tab-item_selected");
  btnSearch.classList.remove("tab-item_selected");

  searchLink.classList.remove("search-link_opened");

  handleTrendGif();
}



function btnNewClick() {
  btnNew.classList.add("tab-item_selected");

  btnRandom.classList.remove("tab-item_selected");
  btnTrend.classList.remove("tab-item_selected");
  btnSearch.classList.remove("tab-item_selected");

  searchLink.classList.remove("search-link_opened");
}



function btnSearchClick() {
  btnSearch.classList.add("tab-item_selected");

  btnRandom.classList.remove("tab-item_selected");
  btnTrend.classList.remove("tab-item_selected");
  btnNew.classList.remove("tab-item_selected");

  searchLink.classList.add("search-link_opened");
}

