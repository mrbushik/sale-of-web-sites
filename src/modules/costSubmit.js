export const costSubmit = ({
    formName,
    input,
    inputRectangle,
    inputCoount,
}) => {
    const thanksMenu = document.querySelector('.thanks-window');
    const inputPhoneRectangle = document.querySelector(inputRectangle);
    const inputPhone = document.getElementById(input);
    const form = document.querySelector(formName);
    const okBtn = document.querySelector('.thanks-btn');
    const leadFormRectangle = document.querySelector('.lead_rectangle_name');
    const leadFormNumberInput = document.getElementById('lead-name_input');

    console.log(inputPhoneRectangle);
    okBtn.addEventListener('click', () => {
        thanksMenu.classList.add('d-none');

    });


    const closePopUpMenu = () => {
        thanksMenu.classList.remove('d-none');
    };

    if (inputCoount === 2) {
        leadFormNumberInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\а-я\А-Я]/, '');
            if (inputPhone.value.length > 4 && inputPhone.value.length < 16) {
                leadFormRectangle.style.border = "1px solid black";
            }

        });
    }
    inputPhone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d\+]/, '');
        if (inputPhone.value.length > 4 && inputPhone.value.length < 16) {
            inputPhoneRectangle.style.border = "none";
        }

    });


    const validate = (list) => {
        let success = true;
        list.forEach((input) => {
            if (input.value.length < 4 || input.value.length > 16) {
                success = false;


            }

        });
        return success;
    };


    const sendData = (data) => {
        return fetch(' https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    };


    const submitForm = () => {
        const formDate = new FormData(form);
        const formBody = {};

        const formElements = form.querySelectorAll('input');
        formDate.forEach((val, key) => {
            formBody[key] = val;
        });

        if (validate(formElements)) {
            closePopUpMenu();

            sendData(formBody)
                .then(data => {

                    formElements.forEach(input => {
                        input.value = '';
                    });
                })

                .catch(error => {
                    console.log('some err');
                });
        } else {
            inputPhoneRectangle.style.border = "1px solid red";
            if (inputCoount === 2) {
                leadFormRectangle.style.border = "1px solid red";
            }
        }


    };



    try {
        if (!form) {
            throw new Error('добавьте элемент');
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
};