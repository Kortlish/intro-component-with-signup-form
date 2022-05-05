const cardInputs = document.querySelectorAll('.card__input');
const submitBtn = document.querySelector('#submit');

const firstnameError = document.querySelector('[data-firstname]');
const lastnameError = document.querySelector('[data-lastname]');
const emailError = document.querySelector('[data-email]');
const passwordError = document.querySelector('[data-password]');

let emailValidate =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const checkValidity = () => {
	cardInputs.forEach((input) => {
		if (input.value == '') {
            input.closest('.card__inputbox').classList.add('error')
			if (input.matches('#name'))
            {
                firstnameError.textContent = 'First Name cannot be empty';
            }
			else if (input.matches('#lastname'))
            {

                lastnameError.textContent = 'Last Name cannot be empty';
            }
			else if (input.matches('#email'))
            {
                
                emailError.textContent = 'Looks like this is not an email';
            }
			else if (input.matches('#password'))
            {

                passwordError.textContent = 'Password cannot be empty';
            }
		} else {
            if(!input.matches('#email')) input.closest('.card__inputbox').classList.remove('error')
			if (input.matches('#name')) firstnameError.textContent = '';
			else if (input.matches('#lastname')) lastnameError.textContent = '';
			else if (input.matches('#email')) {
				if (isEmailValid(input.value)) {
                    input.closest('.card__inputbox').classList.remove('error')
					emailError.textContent = '';
				} else {
                    input.closest('.card__inputbox').classList.add('error')
					emailError.textContent = 'Looks like this is not an email';
				}

				//
			} else if (input.matches('#password')) passwordError.textContent = '';
		}
	});
};

const isEmailValid = (email) => {
	return emailValidate.test(String(email).toLowerCase());
};

submitBtn.addEventListener('click', checkValidity);
