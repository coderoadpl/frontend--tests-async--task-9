const createSquare = () => {
    const square = document.createElement('div')

    square.style.backgroundColor = 'red'
    square.style.width = '100px'
    square.style.height = '100px'
    square.style.position = 'fixed'
    square.style.top = '0px'
    square.style.left = '0px'

    return square
}

document.body.appendChild(createSquare())