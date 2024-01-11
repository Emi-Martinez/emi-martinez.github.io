import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import Project from "../src/pages/Project";

describe('Project Page - Hero Area tests',()=>{
    afterEach(cleanup)

    it('It should render an image',()=>{
        render(<Project />)
  
        screen.getByRole('main').getElementsByTagName('img')
    })

    it('It should render a "Previus button" whit a svg image',()=>{
        render(<Project />)
  
        const btn = screen.getByTitle('Previous Image')
        const svg = btn.getElementsByTagName('svg').length
        expect(svg).toBe(1)
    })

    it('It should render a "Next button" whit a svg image',()=>{
        render(<Project />)
  
        const btn = screen.getByTitle('Next Image')
        const svg = btn.getElementsByTagName('svg').length
        expect(svg).toBe(1)
    })

    
    it('It should change the project image if "Prev Button" is preced',()=>{
        render(<Project />)

        const btn = screen.getByTitle('Previous Image')
        fireEvent.click(btn)

        const imgSrc = screen.getByRole('main').getElementsByTagName('img')[0].src
        expect(imgSrc).toBe('http://localhost/imgs/traveljournal/TravelJournal-Home.png')
    })

    it('It should change the project image if "Next Button" is preced',()=>{
        render(<Project />)

        const btn = screen.getByTitle('Next Image')
        fireEvent.click(btn)

        const imgSrc = screen.getByRole('main').getElementsByTagName('img')[0].src
        expect(imgSrc).toBe('http://localhost/imgs/traveljournal/TravelJournal-Edit-Location.png')
    })
    
    it('It should render "Gestión CAPS(Cetros de Atención Primaria de la Salud)" text',()=>{
        render(<Project />)

        screen.getByText('Gestión CAPS(Cetros de Atención Primaria de la Salud)')
    })

    it('It should render "Proyecto dedicado a la gestión de historias clínicas y estudios de laboratorio de los pacientes atendidos en CAPS(Cetros de Atención Primaria de la Salud). En base a estándares de la OMS(Organización Mundial de la Salud)" text',()=>{
        render(<Project />)

        screen.getByText('Proyecto dedicado a la gestión de historias clínicas y estudios de laboratorio de los pacientes atendidos en CAPS(Cetros de Atención Primaria de la Salud). En base a estándares de la OMS(Organización Mundial de la Salud)')
    })
})

describe('Project Page - My Role Section tests',()=>{
    afterEach(cleanup)

    it('It should render "My role in this project" text',()=>{
        render(<Project />)

        screen.getByText('My role in this project')
    })

    it('It should render "Database designer and developer" text and a svg "Bullet Point"',()=>{
        render(<Project />)

        screen.getByText('Database designer and developer')
        const listLength = screen.getByRole('list').getElementsByTagName('svg').length
        expect(listLength).toBeGreaterThanOrEqual(1)
        
    })

    it('It should render "Back-end Developer" text and a svg "Bullet Point"',()=>{
        render(<Project />)

        screen.getByText('Back-end Developer')
        const listLength = screen.getByRole('list').getElementsByTagName('svg').length
        expect(listLength).toBeGreaterThanOrEqual(2)
        
    })

    it('It should render "Front-end development and adding functionality with JavaScript and AJAX" text and a svg "Bullet Point"',()=>{
        render(<Project />)

        screen.getByText('Front-end development and adding functionality with JavaScript and AJAX')
        const listLength = screen.getByRole('list').getElementsByTagName('svg').length
        expect(listLength).toBeGreaterThanOrEqual(3)
        
    })
})

describe('Project Page - Tech used in this Project Section tests',()=>{
    afterEach(cleanup)

    it('It should render "Technologies used in this project" text',()=>{
        render(<Project />)

        screen.getByText('Technologies used in this project')
    })

    it('It should render a "HTML" Technologie Card',()=>{
        render(<Project />)

        const imgs = screen.getByTestId('technologies').getElementsByTagName('img').length
        expect(imgs).toBeGreaterThanOrEqual(1)

        screen.getByText('HTML')
    })

    it('It should render a "CSS" Technologie Card',()=>{
        render(<Project />)

        const imgs = screen.getByTestId('technologies').getElementsByTagName('img').length
        expect(imgs).toBeGreaterThanOrEqual(2)

        screen.getByText('CSS')
    })
    
    it('It should render a "JavaScript" Technologie Card',()=>{
        render(<Project />)

        const imgs = screen.getByTestId('technologies').getElementsByTagName('img').length
        expect(imgs).toBeGreaterThanOrEqual(3)

        screen.getByText('JavaScript')
    })

    it('It should render a "PHP" Technologie Card',()=>{
        render(<Project />)

        const imgs = screen.getByTestId('technologies').getElementsByTagName('img').length
        expect(imgs).toBeGreaterThanOrEqual(4)

        screen.getByText('PHP')
    })
    
    it('It should render a "MySQL" Technologie Card',()=>{
        render(<Project />)

        const imgs = screen.getByTestId('technologies').getElementsByTagName('img').length
        expect(imgs).toBeGreaterThanOrEqual(5)

        screen.getByText('MySQL')
    })
})

describe('Project Page "Footer - Contact Me Redirection" section tests',()=>{
    afterEach(cleanup)

    it('It should render Footer',()=>{
        render(<Project />)

        screen.getByRole('footer')
    })

    it('It should render H4 Tag: Freelance Web Developer',()=>{
        render(<Project />)

        const txtFWD = screen.getAllByText('Freelance Web Developer')
        expect(txtFWD[0].tagName).toBe('H4')
    })

    it('It should render "If you are looking for a developer which can become your design to reality, or solve some functionality issue on an existing web. Contact me!"',()=>{
        render(<Project />)

        screen.getByText('If you are looking for a developer which can become your design to reality, or solve some functionality issue on an existing web. Contact me!')
    })

    it('It should render Footer e-mail: "emi.martinez.se@gmail.com"',()=>{
        render(<Project />)

        screen.getByText('emi.martinez.se@gmail.com')
    })

    it('It should render "Got a project in mind? Contact me!"',()=>{
        render(<Project />)

        screen.getByText('Got a project in mind? Contact me!')
    })

    it('It should render "Got a project in mind? Contact me!"',()=>{
        render(<Project />)

        screen.getByText('Got a project in mind? Contact me!')
    })
})