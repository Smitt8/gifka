export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(arrayItems) {
    arrayItems.forEach(item => {
      this._renderer(item);
    });
  }

  free() {
    while (this._container.firstChild) {
      this._container.removeChild(this._container.firstChild);
    }
  }
  
}