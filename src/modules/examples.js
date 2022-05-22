const siteExamples = () => {
    const examplesBtn = document.querySelectorAll('.project-btn');
    const onleneShopItems = document.querySelectorAll('.online-shop_item');
    const multiPageItems = document.querySelectorAll('.multi-page_item');
    const lendingItems = document.querySelectorAll('.lending_item ');

    examplesBtn.forEach((item, index) => {

        item.addEventListener('click', (e) => {
            examplesBtn[0].classList.remove('btn-active');
            examplesBtn[1].classList.remove('btn-active');
            examplesBtn[2].classList.remove('btn-active');

            if (index === 0) {
                item.classList.toggle('btn-active');
                onleneShopItems.forEach((item) => {
                    item.classList.add('d-none');
                });
                lendingItems.forEach((item) => {
                    item.classList.remove('d-none');
                });
                multiPageItems.forEach((item) => {
                    item.classList.add('d-none');
                });
            } else if (index === 1) {
                item.classList.toggle('btn-active');

                multiPageItems.forEach((item) => {
                    item.classList.remove('d-none');
                });
                lendingItems.forEach((item) => {
                    item.classList.add('d-none');
                });
                onleneShopItems.forEach((item) => {
                    item.classList.add('d-none');
                });
            } else if (index === 2) {
                item.classList.toggle('btn-active');

                multiPageItems.forEach((item) => {
                    item.classList.add('d-none');
                });
                onleneShopItems.forEach((item) => {
                    item.classList.remove('d-none');
                });
                lendingItems.forEach((item) => {
                    item.classList.add('d-none');
                });
            }
        });
    });
};
export default siteExamples;