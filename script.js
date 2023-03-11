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
    /**
     * toggle这个方法的用法可以参考文档https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle，简单来说就是：
     * The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false.
     * If the token doesn't exist it's added and the function returns true.
     */
    document.body.classList.toggle('show-nav')
})



