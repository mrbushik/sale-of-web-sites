const popUp = () => {
    const leaveRequestBtn = document.querySelector('.create-rectangle_titile');
    const popUpMenu = document.querySelector('.pop-up_menu');
    const closePopUp = document.querySelector('.pop-up_closeBtn');
    const thanksMenu = document.querySelector('.thanks-window');
    const inputPhoneRectangle = document.querySelector('.pop-up_phone');
    const inputPhone = document.getElementById('ppop-up_phone-input');
    const form = document.querySelector('.mobile-phone_form');
    const okBtn = document.querySelector('.thanks-btn');


    leaveRequestBtn.addEventListener('click', () => {
        popUpMenu.classList.remove('d-none');
    });

    closePopUp.addEventListener('click', () => {
        popUpMenu.classList.add('d-none');
    });


    okBtn.addEventListener('click', () => {
        thanksMenu.classList.add('d-none');

    });


    const closePopUpMenu = () => {
        popUpMenu.classList.add('d-none');
        thanksMenu.classList.remove('d-none');
    };


    inputPhone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d\+]/, '');
        if (inputPhone.value.length > 4 || inputPhone.value.length < 16) {
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
export default popUp;