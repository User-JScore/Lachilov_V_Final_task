document.getElementById('BrandboxButton').addEventListener('click', () => {
        
    if (document.getElementById('BranboxList').style.height != 'auto') {

        document.getElementById('BranboxList').style.height = 'auto';
        document.getElementById('BrandboxArrow').style.transform = 'rotate(180deg)';
        document.getElementById('BrandboxText').textContent = 'Скрыть';
    } else {
        document.getElementById('BranboxList').style.height = '160px';
        document.getElementById('BrandboxArrow').style.transform = 'rotate(0deg)';
        document.getElementById('BrandboxText').textContent = 'Показать все';
    }
})

document.getElementById('ServiceboxButton').addEventListener('click', () => {
        
    if (document.getElementById('ServiceboxList').style.height != 'auto') {

        document.getElementById('ServiceboxList').style.height = 'auto';
        document.getElementById('ServiceboxArrow').style.transform = 'rotate(180deg)';
        document.getElementById('ServiceboxText').textContent = 'Скрыть';
    } else {
        document.getElementById('ServiceboxList').style.height = '180px';
        document.getElementById('ServiceboxArrow').style.transform = 'rotate(0deg)';
        document.getElementById('ServiceboxText').textContent = 'Показать все';
    }
})