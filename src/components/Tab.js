export default class Tab {
  constructor({ tabSelector, tabEnableClass}) {
    this._tab  = document.querySelector(tabSelector);
    this._tabEnableClass = tabEnableClass;

  }

  open() {
    this._tab.classList.add(this._tabEnableClass);
  }

  close() {
    this._tab.classList.remove(this._tabEnableClass);
  }
  
}