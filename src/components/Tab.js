export default class Tab {
  constructor(tabSelector, handleClick) {
    this._tabSelector = document.querySelector(tabSelector);
    this._handleClick = handleClick;
  }

  _selectClick = function(e) {
    function switchTab() {
      const arrTab = Array.from(document.querySelectorAll('.tab-item'));

      arrTab.forEach( (item)=> {
        item.classList.remove('tab-item_selected');
      })
    }

    switchTab();
    e.currentTarget.classList.add('tab-item_selected');
    this._handleClick();
    // const self = this;
    // self._handleClick;
  };

  setEventsListeners() {
    this._tabSelector.addEventListener('click', this._selectClick);
  }
}
