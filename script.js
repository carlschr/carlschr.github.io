window.addEventListener('scroll', () => {
    let mainDivs = Array.from(document.querySelector('main').children);

    let divHeights = [];
    mainDivs.forEach(div => {
        divHeights.push(div.clientHeight);
    });

    let header = document.querySelector('header');

    let y = window.pageYOffset;

    (y >= divHeights[0] + divHeights[1]) 
    ? header.style.background = 'white' 
    : (y >= divHeights[0]) 
    ? header.style.background = 'black' 
    : header.style.background = 'white';

    console.log(y, divHeights);
})

let icons = Array.from(document.querySelectorAll('.icons>*'));
icons.forEach(icon => {
    let iconText = icon.dataset.name;
    icon.addEventListener('mouseover', () => {
        document.querySelector('#tech').textContent = iconText;
    })
})