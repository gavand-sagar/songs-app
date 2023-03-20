import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./Counter"

test('to check if counter has button',()=>{
    render(<Counter/>)
    //try get button from screen
    let button = screen.getByTestId('btn01')
    expect(button).toBeInTheDocument();
})


test('to check if span exists',()=>{
    render(<Counter/>)
    //try get span from screen
    let span = screen.getByTestId('spn01')
    expect(span).toBeInTheDocument();
})


test('to check if span has initial value as 0',()=>{
    render(<Counter/>)
    //try get span from screen
    let span = screen.getByTestId('spn01')
    expect(span.innerHTML).toBe('0');
})


test('to check it for first click',()=>{
    render(<Counter/>)
    //try get span from screen
    let span = screen.getByTestId('spn01')

    //see if value is 0
    expect(span.innerHTML).toBe('0');

    //click on button
    let button = screen.getByTestId('btn01')
    fireEvent.click(button)

    //check if span has '1'
    expect(span.innerHTML).toBe('1');
})



test('to check it for three clicks',()=>{
    render(<Counter/>)
    //try get span from screen
    let span = screen.getByTestId('spn01')

    //click on button
    let button = screen.getByTestId('btn01')
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)

    //check if span has '1'
    expect(span.innerHTML).toBe('3');
})




test('to check it for three clicks',()=>{
    render(<Counter/>)
    //try get span from screen
    let span = screen.getByTestId('spn01')

    //click on inc button three times
    let button = screen.getByTestId('btn01')
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)

    // click on decrement button
    let button2 = screen.getByTestId('btn02')
    fireEvent.click(button2)

    //check if span has '1'
    expect(span.innerHTML).toBe('2');
})

