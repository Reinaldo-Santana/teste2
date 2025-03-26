// Adiciona a classe quando o usuário navega com o teclado
function handleKeydown(event) {
    if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    } else if (event.key === 'Enter') {
        simulateActiveState();
    }
}

// Remove a classe quando o usuário usa o mouse
function handleMouseDown() {
    document.body.classList.remove('keyboard-navigation');
}

// Simula o comportamento do :active
function simulateActiveState() {
    const activeElement = document.activeElement;

    if (activeElement) {
        activeElement.classList.add('active-state');

        setTimeout(() => {
            activeElement.classList.remove('active-state');
        }, 150);
    }
}

// Adiciona os event listeners
document.addEventListener('keydown', handleKeydown);
document.addEventListener('mousedown', handleMouseDown);




const handleScrollAndFocus = () => {
    // Realiza o scroll suave até o topo da página
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })

    // Aguarda o término do scroll para mover o foco
    setTimeout(() => {
        const headerElement = document.querySelector('.header');
        if (headerElement) {
            headerElement.focus(); // Move o foco para o header
        }
    }, 500); // Tempo estimado para o scroll terminar (ajuste conforme necessário)
}

const buttonElement = document.getElementById('button-top')
buttonElement.onclick = handleScrollAndFocus;




document.addEventListener('DOMContentLoaded', () => {
    const menuCheckbox = document.getElementById('menu-hamburguer');
    const menu = document.querySelector('.header nav ul');

    // Atualiza o atributo aria-expanded com base no estado do checkbox
    const updateAriaExpanded = () => {
        const isExpanded = menuCheckbox.checked;
        menuCheckbox.setAttribute('aria-expanded', isExpanded);
    };

    // Fecha o menu ao clicar fora dele
    const handleClickOutside = (event) => {
        if (!menu.contains(event.target) && event.target.id !== 'menu-hamburguer' && !event.target.closest('label')) {
            menuCheckbox.checked = false;
            updateAriaExpanded();
        }
    };

    // Atualiza o aria-expanded quando o estado do checkbox muda
    menuCheckbox.addEventListener('change', updateAriaExpanded);

    // Adiciona o evento de clique para fechar o menu ao clicar fora
    document.addEventListener('click', handleClickOutside);

    // Atualiza o atributo aria-expanded no carregamento da página
    updateAriaExpanded();
});




document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-inner");
    const projects = document.querySelectorAll(".project");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");

    let currentIndex = 0;

    // Função para atualizar o estado do botão "Anterior"
    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
    }

    // Função para navegar no carrossel
    function navigateCarousel(direction) {
        const projectWidth = projects[0].offsetWidth;

        if (direction === "next") {
            currentIndex = (currentIndex + 1) % projects.length; // Movimento contínuo
        } else if (direction === "prev" && currentIndex > 0) {
            currentIndex--;
        }

        // Atualiza a posição do carrossel
        carousel.style.transform = `translateX(-${currentIndex * projectWidth}px)`;

        // Atualiza o estado do botão "Anterior"
        updateButtons();
    }

    // Funções para lidar com os cliques
    function handleNext() {
        navigateCarousel("next");
    }

    function handlePrev() {
        navigateCarousel("prev");
    }

    // Adiciona eventos aos botões
    nextButton.addEventListener("click", handleNext);
    prevButton.addEventListener("click", handlePrev);

    // Recalcular posição ao redimensionar a janela (com debounce)
    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const projectWidth = projects[0].offsetWidth;
            carousel.style.transform = `translateX(-${currentIndex * projectWidth}px)`;
        }, 100);
    });

    // Inicializa os botões no estado correto
    updateButtons();
});




// Seleciona os elementos onde o botão direito será desabilitado
const elements = document.querySelectorAll('.no-right-click');

elements.forEach((element) => {
    element.addEventListener('contextmenu', (event) => {
        event.preventDefault(); // Impede o menu de contexto padrão
    });
});