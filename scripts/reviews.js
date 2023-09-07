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


document.addEventListener('click', (e) => {
    const withinBoundaries1 = e.composedPath().includes(photo1);
    const withinBoundaries2 = e.composedPath().includes(photo2);
    const withinBoundaries3 = e.composedPath().includes(photo3);
    if (!withinBoundaries1) {
        photo1.classList.remove('photo1')
    }
    if (!withinBoundaries2) {
        photo2.classList.remove('photo2')
    }
    if (!withinBoundaries3) {
        photo3.classList.remove('photo3')
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