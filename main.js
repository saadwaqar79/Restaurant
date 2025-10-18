let likeButtons = document.querySelectorAll("button.like-button");
        let smallerScreens = window.matchMedia("(max-width: 900px)");

        for (let i = 0; i < likeButtons.length; i++) {
            likeButtons[i].addEventListener("click", () => {
                likeButtons[i].classList.toggle("favourite");
                if (smallerScreens.matches) {
                    likeButtons[i].classList.remove("like-button-hover");
                }
            })
        }