let btn_open = document.querySelector('#open')
let modal = document.querySelector('.modal-container')
let close_btn = document.querySelector('#close')
let submit_btn = document.querySelector('.submit-btn')
let bar_btn=document.querySelector('#toggle')

btn_open.addEventListener('click', function () { 
    modal.style.display = 'block'
})
close_btn.addEventListener('click', function () { 
    modal.style.display = 'none'
})
submit_btn.addEventListener('click', function () { 
    modal.style.display = 'none'
})
bar_btn.addEventListener('click', function () { 
    document.body.classList.toggle('show-nav')
})



