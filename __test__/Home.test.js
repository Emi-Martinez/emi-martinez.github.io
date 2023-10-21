import { render, cleanup, screen } from "@testing-library/react";
import Home from "../src/pages/Home";

describe('Home Page Hero Area tests',()=>{
    afterEach(cleanup)
    it('Home page should render',()=>{
        render(<Home />)
    })

    it('It should render "Hello!, I’m Emiliano" text',()=>{
        render(<Home></Home>)

        const txt = screen.getByText('Hello!, I’m Emiliano')
        // console.log("TagName: "+txt.tagName)
    })

    it('It should render "Freelance Web Developer" text',()=>{
        render(<Home></Home>)

        const txtFWD = screen.getAllByText('Freelance Web Developer')
        expect(txtFWD[0].tagName).toBe('H1')
    })
    
    it('It should render "If you’re looking for a web developer how can help to develop or fix your web, you have found the right one!" text',()=>{
        render(<Home></Home>)

        screen.getByText('If you’re looking for a web developer how can help to develop or fix your web, you have found the right one!')
    })
    
})

describe('Home Page My Work section tests',()=>{
    afterEach(cleanup)

    it('It should render "My Work" text',()=>{
        render(<Home></Home>)

        screen.getByText('My Work')
    })

    it('It should render "My Work" text',()=>{
        render(<Home></Home>)

        screen.getByText('My Work')
    })

    it('It should render a Project Card',()=>{
        render(<Home></Home>)

        const projects = screen.getAllByRole('projectCard').length
        expect(projects).toBeGreaterThanOrEqual(1)
    })

    it('It should render an image',()=>{
        render(<Home></Home>)

        const imgs = screen.getAllByRole('projectImg')
        expect(imgs[0].tagName).toBe('IMG')
    })
    
    it('It should render "Gestión CAPS(Cetros de Atención Primaria de la Salud)"',()=>{
        render(<Home></Home>)

        screen.getByText('Gestión CAPS(Cetros de Atención Primaria de la Salud)')
    })

    it('It should render "Proyecto dedicado a la gestión de historias clínicas y estudios de laboratorio de los pacientes atendidos en CAPS(Cetros de Atención Primaria de la Salud). En base a estándares de la OMS(Organización Mundial de la Salud)"',()=>{
        render(<Home></Home>)

        screen.getByText('Proyecto dedicado a la gestión de historias clínicas y estudios de laboratorio de los pacientes atendidos en CAPS(Cetros de Atención Primaria de la Salud). En base a estándares de la OMS(Organización Mundial de la Salud)')
    })

    it('It should render "Learn more ..."',()=>{
        render(<Home></Home>)

        const learnMore = screen.getAllByText('Learn more ...').length
        expect(learnMore).toBeGreaterThanOrEqual(1)
    })

    it('It should render 3 Project Cards',()=>{
        render(<Home></Home>)

        const projects = screen.getAllByRole('projectCard').length
        expect(projects).toBe(3)
    })
})

describe('Home Page "Footer - Contact Me Redirection" section tests',()=>{
    afterEach(cleanup)

    it('It should render Footer',()=>{
        render(<Home></Home>)

        screen.getByRole('footer')
    })

    it('It should render H4 Tag: Freelance Web Developer',()=>{
        render(<Home></Home>)

        const txtFWD = screen.getAllByText('Freelance Web Developer')
        expect(txtFWD[1].tagName).toBe('H4')
    })

    it('It should render "If you are looking for a developer which can become your design to reality, or solve some functionality issue on an existing web. Contact me!"',()=>{
        render(<Home></Home>)

        screen.getByText('If you are looking for a developer which can become your design to reality, or solve some functionality issue on an existing web. Contact me!')
    })

    it('It should render Footer e-mail: "emi.martinez9696@gmail.com"',()=>{
        render(<Home></Home>)

        screen.getByText('emi.martinez9696@gmail.com')
    })

    it('It should render "Got a project in mind? Contact me!"',()=>{
        render(<Home></Home>)

        screen.getByText('Got a project in mind? Contact me!')
    })

    it('It should render "Got a project in mind? Contact me!"',()=>{
        render(<Home></Home>)

        screen.getByText('Got a project in mind? Contact me!')
    })
})