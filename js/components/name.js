const NAME = document.getElementById('name')
const NAME_ = {
    render:()=>{
        NAME_.setFontSize()
        NAME_.setLeft()
        NAME_.setTop()
    }
}
$('#submit').click(function () {
    $('#modal').modal('hide')
})
NAME_.setLeft = () => {
    const flex = WINDOW.flag?(19 / 48):(47/48)
    const left = Math.floor(checkWidth(flex * WINDOW.Sx - NAME_.width), WINDOW.Sx, NAME_.width)
    NAME.style.left = left + "px";
    NAME_.left = left
    NAME_.right = left + NAME_.width
}
NAME_.setTop = () => {
    const flex = WINDOW.flag?(8 / 24):(6/24)
    const top = Math.floor(checkHeight(flex * WINDOW.Sy - NAME_.height), WINDOW.Sy, NAME_.height)
    NAME.style.top = top + "px";
    NAME_.top = top
    NAME_.bottom = top + NAME_.height
}
NAME_.setFontSize = () => {
    const fontSize = WINDOW.flag?Math.floor(120 / 1440 * WINDOW.Sx):Math.floor(280 / 1440 * WINDOW.Sx)
    NAME.style.fontSize = fontSize + "px";
    NAME_.height = NAME.offsetHeight
    NAME_.width = NAME.offsetWidth
}