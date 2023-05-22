import inputmask from 'inputmask'
const $phoneMask = document.querySelector('.phone-mask--js')
const $phoneMask1 = document.querySelector('.phone-mask1--js')
const $phoneMask2 = document.querySelector('.phone-mask2--js')

if ($phoneMask) {
	inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false
	}).mask($phoneMask)
}
if ($phoneMask1) {
	inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false
	}).mask($phoneMask1)
}
if ($phoneMask2) {
	inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false
	}).mask($phoneMask2)
}

class FormValidator {
    constructor(settings, form) {
        this._settings = settings;
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
        this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
    }

    enableValidation() {
        this._disableSubmitButton();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListener(this._form);
    }

    _setEventListener() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
        this._form.addEventListener("reset", () => {
            this._inputList.forEach((inputElement) => {
                this._hideInputError(inputElement);
            });
        this._disableSubmitButton();
        });
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClass);
		inputElement.closest('.form__placeholder-container--js').classList.add('form__placeholder-container_active');
    }

    _hideInputError(inputElement) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.classList.remove(this._settings.errorClass);
        errorElement.textContent = "";
		inputElement.closest('.form__placeholder-container--js').classList.remove('form__placeholder-container_active');
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState() {
        this._disableSubmitButton();

        if (this._hasInvalidInput(this._inputList)) {
            this._disableSubmitButton();
        } else {
            this._buttonElement.removeAttribute("disabled");
            this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
        }
    }

    _disableSubmitButton() {
        this._buttonElement.setAttribute("disabled", true);
        this._buttonElement.classList.add(this._settings.inactiveButtonClass);
    }
}

const modalForm = document.querySelector(".modal__form--js");
const connectionForm = document.querySelector('.connection__form--js');
const supportForm = document.querySelector('.support__form--js');

const modalFormValidationSetting = {
    formSelector: ".modal__form--js",
    inputSelector: ".form__input--js",
    submitButtonSelector: ".form__btn--js",
    inactiveButtonClass: "form__btn_inactive",
    inputErrorClass: "input__error_type_error",
    errorClass: "input__error_active",
};

const connectionFormValidationSetting = {
    formSelector: ".connection__form--js",
    inputSelector: ".form__input--js",
    submitButtonSelector: ".form__btn--js",
    inactiveButtonClass: "form__btn_inactive",
    inputErrorClass: "input__error_type_error",
    errorClass: "input__error_active",
};

const supportFormValidationSetting = {
    formSelector: ".support__form--js",
    inputSelector: ".form__input--js",
    submitButtonSelector: ".form__btn--js",
    inactiveButtonClass: "form__btn_inactive",
    inputErrorClass: "input__error_type_error",
    errorClass: "input__error_active",
};

if(supportForm) {
	const supportFormFormValidation = new FormValidator(supportFormValidationSetting, supportForm);
	supportFormFormValidation.enableValidation();
}


if(connectionForm) {
	const connectionFormValidation = new FormValidator(connectionFormValidationSetting, connectionForm);
	connectionFormValidation.enableValidation();
}

if(modalForm) {
	const modalFormValidation = new FormValidator(modalFormValidationSetting, modalForm);
	modalFormValidation.enableValidation();
}