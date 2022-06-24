import Form from "./Form.js";

export default class SearchForm extends Form {
  constructor({ formSelector, inputSelector, resetSelector, activeResetClass }, handleSubmit) {
    super({ formSelector, inputSelector, resetSelector }, handleSubmit);
    this._activeResetClass = activeResetClass;
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

  setEventsListeners() {
    super.setEventsListeners();
    this._form.addEventListener("input", () => {
      this._toggleReset();
    })
  }
}