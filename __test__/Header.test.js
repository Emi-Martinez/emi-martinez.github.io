import { render, cleanup, screen } from "@testing-library/react";
import Header from "../src/components/Header";

describe('App Render',()=>{
    afterEach(cleanup)

    it('it should render "Home" link',()=>{
        render(<Header />)

        const link = screen.getByText('Home')
        expect(link.tagName).toBe('A')
    })

    it('it should render "About" link',()=>{
        render(<Header />)

        const link = screen.getByText('About')
        expect(link.tagName).toBe('A')
    })

    it('it should render "Contact" link',()=>{
        render(<Header />)

        const link = screen.getByText('Contact')
        expect(link.tagName).toBe('A')
    })

    it('it should render "emi.martinez9696@gmail.com" text',()=>{
        render(<Header />)

        screen.getByText('emi.martinez9696@gmail.com')
    })
})