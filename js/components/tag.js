const TAGS = {}
// 仅有位置信息
let TAG_LIST = []
// 仅含有数据信息
// 数据类型{id: number, value: string, num: number}
let TAGS_DATA=[]
const TAGS_ = {
    render:()=>{
        $('#tags').empty()
        TAGS.top = (CAKE_.bottom > HAPPY_.bottom ? CAKE_.bottom : HAPPY_.bottom) + 12
        TAGS.bottom = WINDOW.Sy
        TAGS.left = 0
        TAGS.right = WINDOW.Sx
        TAG_LIST = []
        for (let i = 0; i < TAGS_DATA.length; i++) {
            TAGS_.setTag("TAG_"+TAGS_DATA[i].id, TAGS_DATA[i].num, TAGS_DATA[i].value)
        }
    }
}

TAGS_.get_tags = () => {
    // todo get tags
    TAGS_DATA = [
        {id: 1, num: 3, value: '酷毙了'},
        {id: 2, num: 7, value: '帅'},
        {id: 3, num: 10, value: '酷'},
        {id: 4, num: 4, value: '帅呆了'},
    ]
}

const check = (tag) => {
    for (let i = 0; i < TAG_LIST.length; i++) {
        const t = TAG_LIST[i]
        if ((t.bottom <= tag.bottom && t.bottom >= tag.top && ((t.left <= tag.left && t.right >= tag.right) || (t.left >= tag.left && t.left <= tag.right) || (t.right >= tag.left && t.right <= tag.right))) ||
            (tag.bottom <= t.bottom && tag.bottom >= t.top && ((tag.left <= t.left && tag.right >= t.right) || (tag.left >= t.left && tag.left <= t.right) || (tag.right >= t.left && tag.right <= t.right))) ||
            (t.top <= tag.bottom && t.top >= tag.top && ((t.left <= tag.left && t.right >= tag.right) || (t.left >= tag.left && t.left <= tag.right) || (t.right >= tag.left && t.right <= tag.right))) ||
            (tag.top <= t.bottom && tag.top >= t.top && ((tag.left <= t.left && tag.right >= t.right) || (tag.left >= t.left && tag.left <= t.right) || (tag.right >= t.left && tag.right <= t.right))) ||
            (t.top <= tag.top && t.bottom >= tag.bottom && ((t.left <= tag.left && t.right >= tag.right) || (t.left >= tag.left && t.left <= tag.right) || (t.right >= tag.left && t.right <= tag.right))) ||
            (tag.top <= t.top && tag.bottom >= t.bottom && ((tag.left <= t.left && tag.right >= t.right) || (tag.left >= t.left && tag.left <= t.right) || (tag.right >= t.left && tag.right <= t.right)))
        )
            return false
    }
    return true
}

TAGS_.setTag = (id, num, val) => {
    const tag = document.createElement('p')
    tag.setAttribute('class', 'tag')
    tag.setAttribute('id', id)
    const min = 30 / 1440 * WINDOW.Sx
    const max = 90 / 1440 * WINDOW.Sx
    const fontSize = num * 4 < min ? min : num * 4 > max ? max : num * 4
    tag.style.fontSize = fontSize + 'px'
    tag.style.padding = '0 ' + fontSize/8 + 'px'
    tag.innerHTML = '#' + val
    document.getElementById('tags').append(tag)
    const tag_ = document.getElementById(id)
    let first = true
    let t, top, left, i = 0
    while (first || !check(t) && i < 10) {
        top = checkHeight(Math.random() * ((TAGS.bottom - TAGS.top > 0) ? TAGS.bottom - TAGS.top : 0) + TAGS.top, WINDOW.Sy, Math.ceil(tag_.offsetHeight))
        left = checkWidth(Math.random() * ((TAGS.right - TAGS.left > 0) ? TAGS.right - TAGS.left : 0) + TAGS.left, WINDOW.Sx, Math.ceil(tag_.offsetWidth))
        t = {top: top-24, bottom: top + 24 + tag_.offsetHeight, left: left - 24, right: left + 24 + tag_.offsetWidth}
        first = false
        i++
    }
    if (i >= 10) {
        console.log('有点挤或运气太差')
        document.getElementById('tags').removeChild(tag)
    } else {
        tag_.style.top = top + 'px'
        tag_.style.left = left + 'px'
        TAG_LIST.push(t)
    }
}
