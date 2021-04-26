import { createSquare, startFalling } from './fallingSquare'

const square = createSquare()

document.body.appendChild(square)

startFalling(square)