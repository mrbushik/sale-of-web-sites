const menu = () => {
    const menuBtn = document.querySelector(".menu-block-btn");
    const dropMenu = document.querySelector(".drop-menu");
    const row = document.querySelectorAll(".header-row");
    const closeMenuBtn = document.querySelector(".menu-active_btn");
    const header = document.querySelector(".header");


    let count = 0;

    console.log(header);

    menuBtn.addEventListener("click", () => {

        row.forEach((item) => {
            item.classList.toggle("d-none");
        });

        header.classList.toggle("active-menu");
        dropMenu.classList.toggle("d-none");
        closeMenuBtn.classList.toggle("d-none");

        if (!closeMenuBtn.classList.contains("d-none")) {

            appearanceBtn(closeMenuBtn);

        } else {
            closeMenuBtn.style.opacity = 0;
        }



    });

    const appearanceBtn = (elem) => {

        const appearanceBtnTimer = setInterval(() => {
            count += 0.05;
            elem.style.opacity = count;
            if (count >= 1) {
                clearInterval(appearanceBtnTimer);
                count = 0;
            }
        }, 10);

    };


};
export default menu;