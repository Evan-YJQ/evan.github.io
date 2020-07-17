const SUI = document.getElementById('sui')
const SUI_ = {
    render:()=>{
        SUI_.setFontSize()
        SUI_.setLeft()
        SUI_.setTop()
    }
}
SUI_.setLeft = () => {
    const flex = WINDOW.flag ? (15 / 24) : (13.5 / 24)
    const left = Math.floor(checkWidth(flex * WINDOW.Sx - SUI_.width), WINDOW.Sx, SUI_.width)
    SUI.style.left = left + "px";
    SUI_.left = left
    SUI_.right = left + SUI_.width
}
SUI_.setTop = () => {
    const flex = WINDOW.flag ? (8 / 24) : (9 / 24)
    const top = Math.floor(checkHeight(flex * WINDOW.Sy - SUI_.height), WINDOW.Sy, SUI_.height)
    SUI.style.top = top + "px";
    SUI_.top = top
    SUI_.bottom = top + SUI_.height
}
SUI_.setFontSize = () => {
    const fontSize = WINDOW.flag ? Math.floor(120 / 1440 * WINDOW.Sx) : Math.floor(280 / 1440 * WINDOW.Sx)
    SUI.style.fontSize = fontSize + "px";
    SUI_.height = SUI.offsetHeight
    SUI_.width = SUI.offsetWidth
}
