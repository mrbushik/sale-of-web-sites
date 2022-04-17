const cost = () => {
    const btn = document.querySelectorAll('.next-btn');
    const targetItem = document.querySelectorAll('.form-target_item');
    const form = document.querySelectorAll('.form-question');
    const formWrapper = document.querySelector('.price-form');
    const devSection = document.querySelector('.developed');
    const priceSection = document.querySelector('.price-section');

    let count = 0;
    let nextForm = 1;
    targetItem.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            item.classList.toggle('item-active');
            targetItem[14].classList.remove('item-active');

        });
    });
    btn.forEach((item, index) => {
        item.addEventListener('click', (e) => {

            const checkItem = () => {
                let success = false;
                const itemActive = document.querySelectorAll('.item-active');
                itemActive.forEach((item, index) => {
                    if (count === 3) {
                        item.classList.remove('item-active');
                        formWrapper.classList.add('d-none');
                        success = true;
                        if (window.screen.width < 466) {
                            devSection.style.marginTop = '100px';
                            priceSection.style.marginBottom = '0px';
                        }
                    }
                    if (index >= 0) {
                        item.classList.remove('item-active');
                        success = true;
                    }


                });
                return success;

            };

            if (checkItem()) {
                form[count].classList.add('d-none');
                form[nextForm].classList.remove('d-none');

                count++;
                nextForm++;
            }
        });
    });
};
export default cost;