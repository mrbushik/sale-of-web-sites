const menu = () => {
    const menuBtn = document.querySelector(".menu-block-btn");
    const dropMenu = document.querySelector(".drop-menu");
    const row = document.querySelectorAll(".header-row");
    const closeMenuBtn = document.querySelector(".menu-active_btn")

    let count = 0;
    console.log(menuBtn);
    console.log(dropMenu);
    console.log(row);
    menuBtn.addEventListener("click", () => {
        row.forEach((item) => {
            item.classList.toggle("d-none")
        })
        closeMenuBtn.classList.toggle("d-none");
        if (!closeMenuBtn.classList.contains("d-none")) {

            appearanceBtn();
            closeMenuBtn.style.opacity = 0;
        } else {

        }



    });

    const appearanceBtn = () => {

        const appearanceBtnTimer = setInterval(() => {
            count += 0.05;
            closeMenuBtn.style.opacity = count;
            if (count >= 1) {
                clearInterval(appearanceBtnTimer);
            }
        }, 10);

    };


};
export default menu;