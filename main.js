















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