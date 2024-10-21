document.getElementById('IdReadMore').addEventListener('click', () => {
        
    if (document.getElementById('IdReadMoreTextbox').style.height != 'auto') {

        document.getElementById('IdReadMoreTextbox').style.height = 'auto';
        document.getElementById('IdReadMoreArrow').style.transform = 'rotate(180deg)';
        document.getElementById('IdReadMoreText').textContent = 'Скрыть';
    } else {
        document.getElementById('IdReadMoreTextbox').style.height = '6rem';
        document.getElementById('IdReadMoreArrow').style.transform = 'rotate(0deg)';
        document.getElementById('IdReadMoreText').textContent = 'Читаль далее';
    }
})