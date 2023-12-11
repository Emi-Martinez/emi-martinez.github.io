import { render, cleanup, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import { BrowserRouter } from "react-router-dom";

describe('App Render',()=>{
    afterEach(cleanup)

    it('it should render "Home" link',()=>{
        render(<BrowserRouter><Header /></BrowserRouter>)

        const link = screen.getByText('Home')
        expect(link.tagName).toBe('A')
    })

    it('it should render "About" link',()=>{
        render(<BrowserRouter><Header /></BrowserRouter>)

        const link = screen.getByText('About')
        expect(link.tagName).toBe('A')
    })

    it('it should render "Contact" link',()=>{
        render(<BrowserRouter><Header /></BrowserRouter>)

        const link = screen.getByText('Contact')
        expect(link.tagName).toBe('A')
    })

    it('it should render "emi.martinez9696@gmail.com" text',()=>{
        render(<BrowserRouter><Header /></BrowserRouter>)

        screen.getByText('emi.martinez9696@gmail.com')
    })
})