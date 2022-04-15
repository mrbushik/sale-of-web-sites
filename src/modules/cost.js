const cost = () => {
    const btn = document.querySelectorAll('.next-btn');
    const targetItem = document.querySelectorAll('.form-target_item');
    const form = document.querySelectorAll('.form-question')
    let count = 0;
    let nextForm = 1;
    console.log(form);
    targetItem.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            item.classList.toggle('item-active');
            console.log(nextForm + " это некст форм НОВАЯ");

        });
    });
    btn.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            console.log('btn click');

            const checkItem = () => {
                let success = false;
                const itemActive = document.querySelectorAll('.item-active');
                itemActive.forEach((item, index) => {
                    if (index >= 0) {
                        console.log(nextForm + " это некст форм");

                        item.classList.remove('item-active');
                        success = true;
                    }

                });
                return success;

            }

            if (checkItem()) {
                form[count].classList.add('d-none');
                form[nextForm].classList.remove('d-none');
                console.log('good');

                count++;
                nextForm++;
            }
        });
    });
};
export default cost;