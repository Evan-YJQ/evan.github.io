const HAPPY = document.getElementById('happy')
const HAPPY_ = {
    render:()=>{
        HAPPY_.setFontSize()
        HAPPY_.setLeft()
        HAPPY_.setTop()
    }
}
HAPPY_.setLeft = () => {
    const flex = WINDOW.flag?(47 / 48):(47/48)
    const left = Math.floor(checkWidth(flex * WINDOW.Sx - HAPPY_.width, WINDOW.Sx, HAPPY_.width))
    HAPPY.style.left = left + "px";
    HAPPY_.left = left
    HAPPY_.right = left + HAPPY_.width
}
HAPPY_.setTop = () => {
    const flex = WINDOW.flag?(8 / 24):(11/24)
    const top = checkHeight(flex * WINDOW.Sy - HAPPY_.height, WINDOW.Sy, HAPPY_.height)
    HAPPY.style.top = top + "px";
    HAPPY_.top = top
    HAPPY_.bottom = top + HAPPY_.height
}
HAPPY_.setFontSize = () => {
    const fontSize = WINDOW.flag?Math.floor(120 / 1440 * WINDOW.Sx):Math.floor(190 / 1440 * WINDOW.Sx)
    HAPPY.style.fontSize = fontSize + "px";
    HAPPY_.height = Math.ceil(HAPPY.offsetHeight)
    HAPPY_.width = Math.ceil(HAPPY.offsetWidth)
}