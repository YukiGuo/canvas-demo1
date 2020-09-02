//  JS 操作Dom 划线 性能太差
// canvas.onmousemove = function (e) {
//     console.log(e)
//     let div = document.createElement(div);
//     div.style.position = 'absolute'
//     div.style.left = e.clientX + 'px';
//     div.style.top = e.clientY + 'px';
//     div.style.width = '4px';
//     div.style.height = '4px';
//     div.style.backgroundColor = 'black'
//     div.style.borderRadius = '50%'
//     canvas.append(div);
// }
let brush = {
    size: "4",
    color: 'blue'
};

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight


let painting = false
ctx.lineCap = 'round'
ctx.lineJoin = 'round'
let last
let now


//划线
canvas.onmousedown = function (e) {
    painting = true
    last = [e.clientX, e.clientY]
}
canvas.onmousemove = function (e) {
    if (painting) {
        now = [e.clientX, e.clientY]
        drawLine(last[0], last[1], now[0], now[1])
        last = now
    }
}
canvas.onmouseup = function () {
    painting = false
}

function drawLine(x1, y1, x2, y2) {
    ctx.lineWidth = brush.size;
    ctx.strokeStyle = brush.color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}


//手机适配
let isTouchDevice = "ontouchstart" in document.documentElement
if (isTouchDevice) {
    canvas.ontouchstart = function (e) {
        last = [e.touches[0].clientX, e.touches[0].clientY]
    }
    canvas.ontouchmove = function (e) {
        console.log(e)
        now = [e.touches[0].clientX, e.touches[0].clientY]
        drawLine(last[0], last[1], now[0], now[1])
        last = now
    }
}

//改变颜色
let colors = document.querySelector(".colors")
colors.onclick = (event) => {
    let el =event.target
    if (el.tagName === "LI") {
        brush.color = event.target.className
        selectedToggle(el,"colors")
    }

}
//改变笔刷大小
let size = document.querySelector(".brush>input")
size.onclick = (event) => {
    brush.size = event.target.value
}

//
let buttons = document.querySelector(".tools")
let icon = document.querySelector(".icon>use")


buttons.addEventListener("click", e => {
    let el = e.target
    while (!el.matches("li")) {
        if (buttons === el) {
            el = null
            break
        }
        el = el.parentNode
    }
    if (el) {
        selectedToggle(el,"tools")
    }

})


let selectedToggle=(el,parentClassName)=>{
    let name = el.classList.value.split(" ")[0]
    let others = document.querySelectorAll(`.${parentClassName}>li:not(.${name})`)
    if (el.classList.value.indexOf('selected') >= 0) {
        el.classList.remove("selected")
    } else {
        el.classList.add("selected")
        others.forEach((item) => {
            item.classList.remove("selected")
        })
    }

}


//画点
/*
canvas.onmousedown = function () {
        painting = true
    }
    canvas.onmousemove = function (e) {
        if (painting == true) {
            ctx.beginPath();
            ctx.arc(e.clientX, e.clientY, 4, 0, 2 * Math.PI);
            ctx.fill()
        }
        else { }
    }
    canvas.onmouseup = function () {

        painting = false;
    }
*/