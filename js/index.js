const IsPC = () => {
    let userAgentInfo = navigator.userAgent;
    let Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    WINDOW.PC = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            WINDOW.PC = false;
            break;
        }
    }
}


window.onload= () =>{
    TAGS_.get_tags()
    IsPC();
    document.addEventListener('click', function() {
        document.getElementById('audio').play()
    })
    document.addEventListener('touchstart', function () {
        document.getElementById('audio').play()
    })
    render();
};

window.onresize = () =>{
    render();
}

const WINDOW = {}

const render = () => {
    WINDOW.Sx=document.body.clientWidth;
    WINDOW.Sy=document.body.clientHeight;

    WINDOW.flag = ((WINDOW.Sx / WINDOW.Sy)>=(428/708));

    const components = [HAPPY_, ZHU_, SUI_, NAME_ , CAKE_, TAGS_]
    components.map(c=>c.render())
}

const isOverlapping = () => {

}