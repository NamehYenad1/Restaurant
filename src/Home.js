function generateHome() {

    const panel = document.createElement('div');
    panel.setAttribute('id', 'panel');
    const panelContentWrapper = document.createElement('div');
    panelContentWrapper.setAttribute('id', 'panelContentWrapper');
    const name = document.createElement('h1');
    name.setAttribute('id', 'name');
    const nameSpan = document.createElement('span');
    nameSpan.innerText = 'Cookies Le petie';
    const location = document.createElement('h2');
    location.setAttribute('id', 'location');
    const locationSpan = document.createElement('span');
    locationSpan.innerText = 'Singapore';
    const button = document.createElement('div');
    button.setAttribute('id', 'button');
    const buttonInner = document.createElement('div');
    buttonInner.setAttribute('id', 'buttonContent');
    buttonInner.innerText = 'View Menu';




    panel.appendChild(panelContentWrapper);
    panelContentWrapper.appendChild(name);
    name.appendChild(nameSpan);
    panelContentWrapper.appendChild(location);
    location.appendChild(locationSpan);
    panelContentWrapper.appendChild(button);
    button.appendChild(buttonInner);
    content.appendChild(panel);


    return panel;


}

export { generateHome }