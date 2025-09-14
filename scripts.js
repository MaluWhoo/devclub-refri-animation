let list = document.querySelectorAll('.item') /* Aqui ele procura todos das classe .item e grava em uma variavel */
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let count = list.length // Ele vai retornar 3 (aqui ele ta contando quanto items tem aqui dentro)
let active = 0

// arrow fuction = uma função do tipo arrow
next.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')


    // SE o meu active for igual o contador (3), então ele vai ser 0, se não ele soma + 1
    active = active >=  count - 1 ? 0 : active + 1
    list[active].classList.add('active')
}   

prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active <= 0 ?  count - 1 : active - 1
    list[active].classList.add('active')
}