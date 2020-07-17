const checkWidth = (x, Sx, w) => {
    return checkMinWidth(checkMaxWidth(x, Sx, w))
}

const checkMinWidth = (x) => {
    return x<0?0:x
}

const checkMaxWidth = (x, Sx, w) => {
    return x+w>=Sx?Sx-w-1:x
}

const checkHeight = (y, Sy, h) => {
    return checkMinHeight(checkMaxHeight(y, Sy, h))
}

const checkMinHeight = (y) => {
    return y<0?0:y
}

const checkMaxHeight = (y, Sy, h) => {
    return y+h>=Sy?Sy-h:y
}