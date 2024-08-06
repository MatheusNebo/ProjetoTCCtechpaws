let menuOpen = false;

        function toggleMenu() {
            const menu = document.getElementById("menu");
            const openbtn = document.querySelector(".openbtn");

            if (menuOpen) {
                // Fechar o menu
                menu.style.width = "0";
                openbtn.classList.remove("open");
                openbtn.innerHTML = "&#9776;";
            } else {
                // Abrir o menu
                menu.style.width = "150px";
                openbtn.classList.add("open");
                openbtn.innerHTML = "&times;";
            }
            
            menuOpen = !menuOpen;
        }