export default class Form {
  constructor({ formSelector, inputSelector, resetSelector }, handleSubmit) {
    this._form = document.querySelector(formSelector);

    this._reset = this._form.querySelector(resetSelector);
    this._inputs = Array.from(this._form.querySelectorAll(inputSelector));

    this._handleSubmit = handleSubmit;
  }

  _getInputsValues() {
    this._values = {}

    this._inputs.forEach(input => {
      this._values[input.name] = input.value;
    })

    return this._values
  }

  setEventsListeners() {
    this._form.addEventListener('submit', event => {
      this._handleSubmit(event, this._getInputsValues());
    })
    this._reset.addEventListener('click', () => {
      this._form.reset();
    })
  }
}