import Form from "./Form.js";

export default class SearchForm extends Form {
  constructor({ formSelector, inputSelector, resetSelector, activeResetClass, submitButtonSelector, inactiveButtonClass}, handleSubmit) {
    super({ formSelector, inputSelector, resetSelector }, handleSubmit);
    this._activeResetClass = activeResetClass;

    this._submitButtonSelector = submitButtonSelector;
    this._button = this._form.querySelector(this._submitButtonSelector);
  }

  _toggleReset() {
    this._reset.classList.toggle(
      this._activeResetClass,
      this._form.checkValidity()
    );
  }

  _resetForm() {
    super._resetForm();
    this._toggleReset();
  }

  buttonSubmitState = () => {
    this._button.disabled = !this._form.checkValidity();

  };


  setEventsListeners() {
    super.setEventsListeners();
    this._form.addEventListener("input", () => {
      this._toggleReset();
    })
  }
}
