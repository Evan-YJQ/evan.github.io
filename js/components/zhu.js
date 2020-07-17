const ZHU = document.getElementById('zhu')
const ZHU_ = {
    render:()=>{
        ZHU_.setFontSize()
        ZHU_.setLeft()
        ZHU_.setTop()
    }
}
ZHU_.setLeft = () => {
    let flex = WINDOW.flag ? (3 / 24) : (3 / 24)
    const left = Math.floor(checkWidth(flex * WINDOW.Sx - ZHU_.width), WINDOW.Sx, ZHU_.width)
    ZHU.style.left = left + "px";
    ZHU_.left = left
    ZHU_.right = left + ZHU_.width
}
ZHU_.setTop = () => {
    const flex = WINDOW.flag ? (8 / 24) : (6 / 24)
    const top = Math.floor(checkHeight(flex * WINDOW.Sy - ZHU_.height), WINDOW.Sy, ZHU_.height)
    ZHU.style.top = top + "px";
    ZHU_.top = top
    ZHU_.bottom = top + ZHU_.height
}
ZHU_.setFontSize = () => {
    let fontSize = WINDOW.flag ? Math.floor(180 / 1440 * WINDOW.Sx) : Math.floor(500 / 1440 * WINDOW.Sx)
    ZHU.style.fontSize = fontSize + "px";
    ZHU_.height = ZHU.offsetHeight
    ZHU_.width = ZHU.offsetWidth
}