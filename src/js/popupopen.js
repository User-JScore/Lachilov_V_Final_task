let closeCallback = document.getElementsByClassName('CloseCallback');

for (let i = 0; i < closeCallback.length; i++) {

    closeCallback[i].addEventListener('click', () => {
        document.getElementById('PopupCallback').style.display = 'none';
    })
}

let openCallback = document.getElementsByClassName('PopupCallbackOpen');

for (let i = 0; i < openCallback.length; i++){

    openCallback[i].addEventListener('click', () => {
        document.getElementById('PopupCallback').style.display = 'flex';
    })
}

let closeCallorder = document.getElementsByClassName('CloseCallorder');

for (let i = 0; i < closeCallorder.length; i++) {

    closeCallorder[i].addEventListener('click', () => {
        document.getElementById('PopupCallorder').style.display = 'none';
    })
}

let openCallorder = document.getElementsByClassName('PopupCallorderOpen');

for (let i = 0; i < openCallorder.length; i++){

    openCallorder[i].addEventListener('click', () => {
        document.getElementById('PopupCallorder').style.display = 'flex';
    })
}