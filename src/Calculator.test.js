import { fireEvent, render, screen } from "@testing-library/react"
import Calculator from "./Calculator"

test('check if input box exists', () => {
    render(<Calculator />)
    let input = screen.getByTestId('calc-input')
    expect(input).toBeInTheDocument()
})

test('check if button exists', () => {
    render(<Calculator />)
    let button = screen.getByTestId('calc-button')
    expect(button).toBeInTheDocument()
})

test('check if output box exists', () => {
    render(<Calculator />)
    let output = screen.getByTestId('calc-output')
    expect(output).toBeInTheDocument()
})

test('square button works', () => {

    //render
    render(<Calculator />)

    //change input value
    let input = screen.getByTestId('calc-input')
    fireEvent.change(input, { target: { value: '5' } })

    //click square button
    let button = screen.getByTestId('calc-button')
    fireEvent.click(button)

    //check output value
    let output = screen.getByTestId('calc-output')

    expect(output.innerHTML).toBe('25')

})


test('square button works for input 20', () => {

    //render
    render(<Calculator />)

    //change input value
    let input = screen.getByTestId('calc-input')
    fireEvent.change(input, { target: { value: '20' } })

    //click square button
    let button = screen.getByTestId('calc-button')
    fireEvent.click(button)

    //check output value
    let output = screen.getByTestId('calc-output')

    expect(output.innerHTML).toBe('400')

})


test('square button works for input abc', () => {

    //render
    render(<Calculator />)

    //change input value
    let input = screen.getByTestId('calc-input')
    fireEvent.change(input, { target: { value: 'abc' } })

    //click square button
    let button = screen.getByTestId('calc-button')
    fireEvent.click(button)

    //check output value
    let output = screen.getByTestId('calc-output')

    expect(output.innerHTML).toBe('N/A')

})