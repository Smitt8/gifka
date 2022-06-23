export default class Gif {
  constructor(link, templateSelector) {
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector).content.querySelector('.animation-images__item').cloneNode(true);
  }

  generateItem() {
    this._element = this._getTemplate();
    this._itemImage = this._element.querySelector(".gif");
    this._itemImage.src = this._link;

    return this._element;
  }
}
