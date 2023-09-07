const photo1 = document.getElementById('photo1')
const photo2 = document.getElementById('photo2')
const photo3 = document.getElementById('photo3')
const photo4 = document.getElementById('photo4')
const photo5 = document.getElementById('photo5')
const photo6 = document.getElementById('photo6')
const photo7 = document.getElementById('photo7')
const photo8 = document.getElementById('photo8')
const photo9 = document.getElementById('photo9')
const photo10 = document.getElementById('photo10')
const photo11 = document.getElementById('photo11')
const photo12 = document.getElementById('photo12')


document.addEventListener('click', (e) => {
    const withinBoundaries1 = e.composedPath().includes(photo1);
    const withinBoundaries2 = e.composedPath().includes(photo2);
    const withinBoundaries3 = e.composedPath().includes(photo3);
    const withinBoundaries4 = e.composedPath().includes(photo4);
    const withinBoundaries5 = e.composedPath().includes(photo5);
    const withinBoundaries6 = e.composedPath().includes(photo6);
    const withinBoundaries7 = e.composedPath().includes(photo7);
    const withinBoundaries8 = e.composedPath().includes(photo8);
    const withinBoundaries9 = e.composedPath().includes(photo9);
    const withinBoundaries10 = e.composedPath().includes(photo10);
    const withinBoundaries11 = e.composedPath().includes(photo11);
    const withinBoundaries12 = e.composedPath().includes(photo12);

    if (!withinBoundaries1) {
        photo1.classList.remove('photo1')
    }
    if (!withinBoundaries2) {
        photo2.classList.remove('photo2')
    }
    if (!withinBoundaries3) {
        photo3.classList.remove('photo3')
    }
    if (!withinBoundaries4) {
        photo4.classList.remove('photo4')
    }
    if (!withinBoundaries5) {
        photo5.classList.remove('photo5')
    }
    if (!withinBoundaries6) {
        photo6.classList.remove('photo6')
    }
    if (!withinBoundaries7) {
        photo7.classList.remove('photo7')
    }
    if (!withinBoundaries8) {
        photo8.classList.remove('photo8')
    }
    if (!withinBoundaries9) {
        photo9.classList.remove('photo9')
    }
    if (!withinBoundaries10) {
        photo10.classList.remove('photo10')
    }
    if (!withinBoundaries11) {
        photo11.classList.remove('photo11')
    }
    if (!withinBoundaries12) {
        photo12.classList.remove('photo12')
    }
})

photo1.addEventListener('click', () => {
    photo1.classList.add('photo1')
})

photo2.addEventListener('click', () => {
    photo2.classList.add('photo2')
})
photo3.addEventListener('click', () => {
    photo3.classList.add('photo3')
})
photo4.addEventListener('click', () => {
    photo4.classList.add('photo4')
})

photo5.addEventListener('click', () => {
    photo5.classList.add('photo5')
})
photo6.addEventListener('click', () => {
    photo6.classList.add('photo6')
})
photo7.addEventListener('click', () => {
    photo7.classList.add('photo7')
})

photo8.addEventListener('click', () => {
    photo8.classList.add('photo8')
})
photo9.addEventListener('click', () => {
    photo9.classList.add('photo9')
})
photo10.addEventListener('click', () => {
    photo10.classList.add('photo10')
})
photo11.addEventListener('click', () => {
    photo11.classList.add('photo11')
})
photo12.addEventListener('click', () => {
    photo12.classList.add('photo12')
})