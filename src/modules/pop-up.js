const popUp = () => {
    const leaveRequestBtn = document.querySelector('.create-rectangle_titile');
    const popUpMenu = document.querySelector('.pop-up_menu');
    const closePopUp = document.querySelector('.pop-up_closeBtn');
    const thanksMenu = document.querySelector('.thanks-window');
    const inputPhone = document.querySelector('.pop-up_phone');
    const form = document.querySelector('.mobile-phone_form');
    const submitBtn = document.querySelector('.pop-up_submit');






    leaveRequestBtn.addEventListener('click', () => {
        popUpMenu.classList.remove('d-none');
    });


    closePopUp.addEventListener('click', () => {
        popUpMenu.classList.add('d-none');
    });
    console.log(inputPhone);
    inputPhone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d\+]/, '');

    });

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
        console.log(formElements);
        formDate.forEach((val, key) => {
            formBody[key] = val;
        });
        sendData(formBody)
            .then(data => {

                formElements.forEach(input => {
                    input.value = '';
                });
            })

            .catch(error => {
                console.log('some err');
            });

    };
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitForm();
        console.log('submit');
    })
    // const validate = (list) => {
    //     let success = true;
    //     list.forEach((input) => {
    //         //   if (!input.classList.contains('success')) {
    //         if (inputPhone.value.length < 4 || inputPhone.value.length > 16) {
    //             success = false;
    //         }
    //     });

    //     return success;
    // };
    // const sendData = (data) => {
    //     return fetch(' https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => res.json());
    // };


    // const submitForm = () => {

    //     //  console.log(nameInput.value)
    //     const formDate = new FormData(form);
    //     const formBody = {};
    //     const formElements = form.querySelectorAll('input');
    //     console.log(formElements);
    //     formDate.forEach((val, key) => {
    //         formBody[key] = val;
    //     });


    //     if (validate(formElements)) {
    //         sendData(formBody)
    //             .then(data => {
    //                 console.log(data);
    //                 formElements.forEach(input => {
    //                     input.value = '';
    //                 });
    //             })
    //             .catch(error => {
    //                 console.log('error');
    //             });
    //     } else {

    //         alert('заполните все формы');

    //     }
    // };
    // try {
    //     if (!form) {
    //         throw new Error('добавьте элемент');
    //     }
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         submitForm();
    //         console.log('good');

    //     });
    // } catch (error) {
    //     console.log(error.message);
    // }
};
export default popUp;