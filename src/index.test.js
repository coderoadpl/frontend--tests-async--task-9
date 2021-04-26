import { createSquare, startFalling, moveDown } from './fallingSquare'

it('should move element down 10px', () => {
    const div = document.createElement('div')
    div.style.top = '10px'
    
    moveDown(div)
    
    expect(div.style.top).toBe('20px')
})

it('should move element down 100px', () => {
    const div = document.createElement('div')
    div.style.top = '10px'
    
    moveDown(div, 100)
    
    expect(div.style.top).toBe('110px')
})

it('should create fixed square', () => {
    const square = createSquare()
    
    expect(square.style.position).toBe('fixed')
    expect(square.style.top).toBe('0px')
    expect(square.style.left).toBe('0px')
})