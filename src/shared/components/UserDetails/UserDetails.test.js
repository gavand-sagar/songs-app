import { render, screen } from "@testing-library/react"
import UserDetails from "./UserDetails"

test('to check if userDetails has h1', () => {
    render(<UserDetails />)
    let h1 = screen.getByTestId('h101')
    expect(h1).toBeInTheDocument();
})


test('to check if userDetails h1 has "sagar" as content ', () => {
    render(<UserDetails name={'Sagar'}/>)
    let h1 = screen.getByTestId('h101')
    expect(h1.innerHTML).toBe('SAGAR')
})

test('to check if userDetails h1 has "sagar" as content ', () => {
    render(<UserDetails name={'Anton'}/>)
    let h1 = screen.getByTestId('h101')
    expect(h1.innerHTML).toBe('ANTON')
})

test('to check if userDetails h1 has "sagar" as content ', () => {
    render(<UserDetails name={'Rasul'}/>)
    let h1 = screen.getByTestId('h101')
    expect(h1.innerHTML).toBe('RASUL')
})