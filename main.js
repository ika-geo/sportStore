
// fixed menu


let $headerTop = document.querySelector(".header__top")

window.addEventListener("scroll", function (){
    if (window.scrollY>50&&window.innerWidth>768){
        $headerTop.classList.add("fixed")
    }
    else {
        $headerTop.classList.remove("fixed")
    }
})

window.addEventListener("resize", function (){
    if (window.innerWidth<=768){
        $headerTop.classList.remove("fixed")
    }

    else {
        $headerTop.classList.add("fixed")
    }
})







// burgerMenu

let $BurgerMenuBTN=document.querySelector(".BurgerMenuBTN")
let $header__BurgerMenu = document.querySelector(".header__BurgerMenu")


$BurgerMenuBTN.addEventListener("click", function (){
    console.log(45)
    $BurgerMenuBTN.classList.toggle("active")
    $header__BurgerMenu.classList.toggle("active")

})



// timer

let h = document.querySelector(".hour")
let hour = parseFloat(h.innerHTML)

let m = document.querySelector(".minute")
let minute = parseFloat(m.innerHTML)

let s = document.querySelector(".second")
let second = parseFloat(s.innerHTML)


setInterval(function (){

    if (second>0){
        second--;
        s.innerHTML=second;
    }

    else if (second===0&&minute>0){
        second=59;
        s.innerHTML=second;
        minute--;
        m.innerHTML=minute;
    }

    else if (second===0&&minute===0&&hour>0){
        second=59;
        s.innerHTML=second;
        minute=59;
        m.innerHTML=minute;
        hour--;
        h.innerHTML=hour;
    }

    else if(second===0&&minute===0&&hour===0){
        return
    }
}, 1000)



// footer menu open/close

let $footerTitle = document.querySelectorAll(".footer__topTitle")

$footerTitle.forEach(a=>{
    a.addEventListener("click", function (){
        a.parentElement.classList.toggle("active")
    })
})