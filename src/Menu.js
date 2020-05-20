function generateMenu() {
    const menuImage = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src', './images/cookiemenu.jpg');
    menuImage.appendChild(image);

    return menuImage
}

export { generateMenu }