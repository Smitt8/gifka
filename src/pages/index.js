import "./index.css";


import Api from "../components/api.js";
import SearchForm from "../components/SearchForm.js";

import Section from "../components/Section.js";
import Gif from "../components/Gif.js";
import TabMenu from "../components/TabMenu.js";

import {
  gifsConfig,
  giphyConfig,
  searchConfig
} from "../utils/consts.js"
import Tab from "../components/Tab.js";

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
      giphy.data.forEach(item => {
        listContainer.addItem(addGif(`https://media1.giphy.com/media/${item.id}/giphy.gif`));
      });
    })
    .catch(err => {
      console.log(err);
    })
}

function handleRandom() {
  api.getRandom()
    .then( objData => {
      listContainer.addItem(addGif(`https://media1.giphy.com/media/${objData.data.id}/giphy.gif`));
    })
    .catch(err => {
      console.log(err);
    })
}



searchForm.setEventsListeners();



const btnRandom = new TabMenu('.tab-item_random',  btnRandomClick);
const btnSearch = new TabMenu('.tab-item-search',  btnSearchClick);
const btnNew = new TabMenu('.tab-item-new',  btnSearchClick);
const btnTrends = new TabMenu('.tab-item-trend',  btnTrendsClick);

const tabSearch = new Tab(searchConfig);
const tabGifs = new Tab(gifsConfig);

function dropSelectedMenu() {
  document.querySelector('.tab-item_selected').classList.remove("tab-item_selected");
}

function btnRandomClick() {
  listContainer.free();

  for (let i = 0; i < 5; i++) {
    handleRandom();
  }

  dropSelectedMenu();
  tabSearch.close();
  tabGifs.open();
}

function btnSearchClick() {
  listContainer.free();
  dropSelectedMenu();
  tabSearch.open();
  tabGifs.open();
}
function btnTrendsClick() {
  listContainer.free();
  dropSelectedMenu();
  tabSearch.close();
  tabGifs.open();
  handleTrendGif();
}

tabSearch.open();
tabGifs.open();
btnSearch.select();

btnRandom.setEventsListeners();
btnSearch.setEventsListeners();
btnNew.setEventsListeners();
btnTrends.setEventsListeners();


// --- добавить в  класс FORM

const fieldConstant = document.getElementById("field-constant");
const  searchInput = document.querySelector('.search__input');

fieldConstant.onmouseover = fieldConstant.onmouseout = handler;

function handler(event) {
  if (event.type === 'mouseover') {
    searchInput.classList.add('search__input_hover');
    fieldConstant.classList.add('field-constant_hover');
  }
  if (event.type === 'mouseout') {
      searchForm._resetForm();
      searchInput.classList.remove('search__input_hover');
      fieldConstant.classList.remove('field-constant_hover');
  }
}


