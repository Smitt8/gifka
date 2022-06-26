export default class TabMenu {
  constructor(tabSelector, handleClick) {
    this._tabSelector = document.querySelector(tabSelector);
    this._handleClick = handleClick;
  }

  _handlerClick () {
    this._handleClick();
    this.select()
  }

  select() {
    this._tabSelector.classList.add('tab-item_selected');
  };

  drop() {
    this._tabSelector.classList.remove('tab-item_selected');
  }

  setEventsListeners() {
    this._tabSelector.addEventListener('click', () => {
      this._handlerClick();
    });
  }
}
