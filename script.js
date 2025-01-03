const handleScroll = () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}

const buttonElement = document.getElementById('button-top')
buttonElement.onclick = handleScroll;