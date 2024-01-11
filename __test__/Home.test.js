import { render, cleanup, screen } from "@testing-library/react";
import Home from "../src/pages/Home";
import { BrowserRouter } from "react-router-dom";

describe('Home Page Hero Area tests',()=>{
    afterEach(cleanup)
    it('Home page should render',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)
    })

    it('It should render "Hello!, I’m Emiliano" text',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        const txt = screen.getByText('Hello!, I’m Emiliano')
    })

    it('It should render "Freelance Web Developer" text',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        const txtFWD = screen.getAllByText('Freelance Web Developer')
        expect(txtFWD[0].tagName).toBe('H1')
    })
    
    it('It should render "If you’re looking for a web developer how can help to develop or fix your web, you have found the right one!" text',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        screen.getByText('If you’re looking for a web developer how can help to develop or fix your web, you have found the right one!')
    })
    
})

describe('Home Page My Work section tests',()=>{
    afterEach(cleanup)

    it('It should render "My Work" text',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        screen.getByText('My Work')
    })

    it('It should render "My Work" text',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        screen.getByText('My Work')
    })

    it('It should render a Project Card',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        const projects = screen.getAllByRole('projectCard').length
        expect(projects).toBeGreaterThanOrEqual(1)
    })

    it('It should render an image',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        const imgs = screen.getAllByRole('projectImg')
        expect(imgs[0].tagName).toBe('IMG')
    })
    
    it('It should render "Gestión CAPS(Cetros de Atención Primaria de la Salud)"',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        screen.getByText('Gestión CAPS(Cetros de Atención Primaria de la Salud)')
    })

    it('It should render "Proyecto dedicado a la gestión de historias clínicas y estudios de laboratorio de los pacientes atendidos en CAPS(Cetros de Atención Primaria de la Salud). En base a estándares de la OMS(Organización Mundial de la Salud)"',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        screen.getByText('Proyecto dedicado a la gestión de historias clínicas y estudios de laboratorio de los pacientes atendidos en CAPS(Cetros de Atención Primaria de la Salud). En base a estándares de la OMS(Organización Mundial de la Salud)')
    })

    it('It should render "Learn more ..."',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        const learnMore = screen.getAllByText('Learn more ...').length
        expect(learnMore).toBeGreaterThanOrEqual(1)
    })

    it('It should render 3 Project Cards',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        const projects = screen.getAllByRole('projectCard').length
        expect(projects).toBe(3)
    })
})

describe('Home Page "Footer - Contact Me Redirection" section tests',()=>{
    afterEach(cleanup)

    it('It should render Footer',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        screen.getByRole('footer')
    })

    it('It should render H4 Tag: Freelance Web Developer',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        const txtFWD = screen.getAllByText('Freelance Web Developer')
        expect(txtFWD[1].tagName).toBe('H4')
    })

    it('It should render "If you are looking for a developer which can become your design to reality, or solve some functionality issue on an existing web. Contact me!"',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        screen.getByText('If you are looking for a developer which can become your design to reality, or solve some functionality issue on an existing web. Contact me!')
    })

    it('It should render Footer e-mail: "emi.martinez.se@gmail.com"',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        screen.getByText('emi.martinez.se@gmail.com')
    })

    it('It should render "Got a project in mind? Contact me!"',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        screen.getByText('Got a project in mind? Contact me!')
    })

    it('It should render "Got a project in mind? Contact me!"',()=>{
        render(<BrowserRouter><Home /></BrowserRouter>)

        screen.getByText('Got a project in mind? Contact me!')
    })
})