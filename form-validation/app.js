const App = (() => {
  UISelectors = {
    email: '#email',
    state: '#state',
    zipCode: '#zip-code',
    password: '#password',
    submit: '#submit',
    messageBox: '#message-box',
  };

  // For brevity
  const $ = (element) => {
    return document.querySelector(element);
  };

  const loadEventListeners = () => {
    $(UISelectors.submit).addEventListener('click', submitEntry);
  };

  // Prints success or fails depending on validation
  const submitEntry = (e) => {
    if (allValidInputs()) {
      printSuccessMsg();
      clearFields();
    } else {
      printErrorMsg();
    }
    e.preventDefault();
  };

  const allValidInputs = () => {
    if (
      isValidEmail() &&
      isValidState() &&
      isValidZipCode() &&
      isValidPassword()
    ) {
      return true;
    }
    return false;
  };

  const isValidEmail = () => {
    const email = $(UISelectors.email).value;
    if (email.indexOf('@') > 0) {
      return true;
    }
    return false;
  };

  const isValidState = () => {
    const state = $(UISelectors.state).value;
    return state.value !== 'unselected' ? true : false;
  };

  const isValidZipCode = () => {
    const zipCode = parseInt($(UISelectors.zipCode).value);
    const regex = /^(\d{5})?$/;
    return regex.test(zipCode);
  };

  // Minimum 8 characters, one letter, one special character, and one number
  const isValidPassword = () => {
    const password = $(UISelectors.password).value;
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
  };

  // Messages
  const printSuccessMsg = () => {
    $(UISelectors.messageBox).className = '';
    let message = 'Success! Form Submitted.';
    $(UISelectors.messageBox).textContent = message;
    $(UISelectors.messageBox).classList.add('success');
  };

  const printErrorMsg = () => {
    $(UISelectors.messageBox).className = '';
    let message = 'One or more input is not valid.';
    $(UISelectors.messageBox).textContent = message;
    $(UISelectors.messageBox).classList.add('fail');
  };

  // Clear fields
  const clearFields = () => {
    $(UISelectors.email).value = '';
    $(UISelectors.state).value = 'unselected';
    $(UISelectors.zipCode).value = '';
    $(UISelectors.password).value = '';
  };

  return {
    init: () => {
      clearFields();
      loadEventListeners();
    },
  };
})();

App.init();
