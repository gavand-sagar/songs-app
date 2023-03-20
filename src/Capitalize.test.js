import { render, screen } from "@testing-library/react"
import Capitalize from "./Capitalize";


test('to check if Capitalize has span', () => {
    render(<Capitalize />)
    let span = screen.getByTestId('sp01')
    expect(span).toBeInTheDocument();
})



test('to check if sagar gives "Sagar"', () => {
    render(<Capitalize label={'sagar'}/>)
    let span = screen.getByTestId('sp01')
    expect(span.innerHTML).toBe('Sagar');
})


