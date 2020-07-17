const CAKE = document.getElementById('cake')
const CAKE_ = {
    render:()=>{
        CAKE_.setSize()
        CAKE_.setLeft()
        CAKE_.setTop()
    }
}
CAKE_.setLeft = () => {
    const flex = WINDOW.flag?(15.3 / 24):(12.5/24)
    const left = Math.floor(checkWidth(flex * WINDOW.Sx - CAKE_.width), WINDOW.Sx, CAKE_.width)
    CAKE.style.left = left + "px";
    CAKE_.left = left
    CAKE_.right = (left + CAKE_.width)
}
CAKE_.setTop = () => {
    const offset = WINDOW.flag?0:80
    const top = Math.floor(checkHeight(SUI_.top + (offset / 1440 * WINDOW.Sx), WINDOW.Sy, CAKE_.height))
    CAKE.style.top = top + "px";
    CAKE_.top = top
    CAKE_.bottom = top + CAKE_.height
}
CAKE_.setSize = () => {
    const height = WINDOW.flag?Math.floor(450 / 1440 * WINDOW.Sx):Math.floor(700 / 1440 * WINDOW.Sx)
    const width = WINDOW.flag?Math.floor(450 / 1440 * WINDOW.Sx):Math.floor(700 / 1440 * WINDOW.Sx)
    CAKE.style.height = height + "px";
    CAKE.style.width = width + "px";
    CAKE_.height = CAKE.offsetHeight
    CAKE_.width = CAKE.offsetWidth
}