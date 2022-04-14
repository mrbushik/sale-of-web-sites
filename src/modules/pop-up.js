const popUp = () => {
    const leaveRequestBtn = document.querySelector('.create-rectangle_titile');
    const popUpMenu = document.querySelector('.pop-up_menu');
    const closePopUp = document.querySelector('.pop-up_closeBtn');
    const thanksMenu = document.querySelector('.thanks-window');
    const inputPhone = document.querySelector('.ppop-up_phone-input');
    const form = document.querySelector('.mobile-phone_form');
    const submitBtn = document.querySelector('.pop-up_submit');
    console.log(leaveRequestBtn);

    console.log(submitBtn);
    leaveRequestBtn.addEventListener('click', () => {
        popUpMenu.classList.remove('d-none');
    });
    closePopUp.addEventListener('click', () => {
        popUpMenu.classList.add('d-none');
    });
    const validate = (list) => {
        let success = true;
        list.forEach((input) => {
            //   if (!input.classList.contains('success')) {
            if (input.value.trim() === '') {
                success = false;
                //проверка на буквы в имени
                //проверка на количество цифр в номере
            } else if (inputPhone.value.length < 4 || inputPhone.value.length > 16) {
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

        //  console.log(nameInput.value)
        const formDate = new FormData(form);
        const formBody = {};
        const formElements = form.querySelectorAll('input');

        formDate.forEach((val, key) => {
            formBody[key] = val;
        });


        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    console.log(data);
                    formElements.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {

                });
        } else {

            alert('заполните все формы');

        }
    };
    try {
        if (!form) {
            throw new Error('добавьте элемент');
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
            console.log('good');

        });
    } catch (error) {
        console.log(error.message);
    }
};
export default popUp;