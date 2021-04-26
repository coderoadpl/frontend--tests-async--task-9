export const createSquare = () => {
    const square = document.createElement('div')

    square.style.backgroundColor = 'red'
    square.style.width = '100px'
    square.style.height = '100px'
    square.style.position = 'fixed'
    square.style.top = '0px'
    square.style.left = '0px'

    return square
}

export const moveDown = (element, step = 10) => {
    const currentTop = Number(element.style.top.replace('px', ''))
    const newTop = currentTop + step
    element.style.top = newTop + 'px'
    return element
}

export const startFalling = (element) => {
    setInterval(
        () => moveDown(element),
        1 * 1000
    )
}
