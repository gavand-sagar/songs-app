import { fireEvent, render, screen } from "@testing-library/react"
import Accodion from "./Accodion"

test('check if heading exists', () => {
    render(<Accodion/>)
    let heading = screen.getByTestId('head01')
    expect(heading).toBeInTheDocument();
})


test('check if paragraph exists', () => {
    render(<Accodion/>)
    let para = screen.getByTestId('para01')
    expect(para).toBeInTheDocument();
})


test('check if paragraph hides on heading click', () => {
    render(<Accodion/>)

    let para = screen.getByTestId('para01')
    expect(para).toBeInTheDocument();

    //click the heading
    let heading = screen.getByTestId('head01')
    fireEvent.click(heading)
    
    //check if para is not present
    expect(para).not.toBeInTheDocument();
})




test('check if paragraph hides on heading click', () => {
    render(<Accodion/>)

    let para = screen.getByTestId('para01')
    expect(para).toBeInTheDocument();

    //click the heading
    let heading = screen.getByTestId('head01')
    fireEvent.click(heading)
    
    //check if para is not present
    expect(para).not.toBeInTheDocument();


    fireEvent.click(heading)

    para = screen.getByTestId('para01')
    expect(para).toBeInTheDocument();
})