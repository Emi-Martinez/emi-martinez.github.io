import { render, cleanup, screen } from "@testing-library/react";
import Contact from "../src/pages/Contact";
import { QAData } from "../public/QAData";

describe('Contact Page - Hero Area tests',()=>{
    afterEach(cleanup)

    it('It should render "I’m currently available for freelance work" text',()=>{
        render(<Contact />)

        screen.getByText('I’m currently available for freelance work')
    })

    it('It should render "If you’re looking for a developer how gets your project done, write me." text',()=>{
        render(<Contact />)

        screen.getByText('If you’re looking for a developer how gets your project done, write me.')
    })

    it('It should render "emi.martinez.se@gmail.com" text',()=>{
        render(<Contact />)

        const emails = screen.getAllByText('emi.martinez.se@gmail.com').length
        expect(emails).toBeGreaterThanOrEqual(1)
    })
})

describe('Contact Page - Questions and Answers Section test',()=>{
    afterEach(cleanup)

    it('It should render "Before you send me a message, it’s important that you know:" text',()=>{
        render(<Contact />)

        screen.getByText('Before you send me a message, it’s important that you know:')
    })

    it('It should render a "QAItem" component',()=>{
      render(<Contact />)

      const svg = screen.getByRole('main').getElementsByTagName('svg').length
      expect(svg).toBeGreaterThanOrEqual(1)
    })

    it('It should render "Are you working with teams?" text',()=>{
        render(<Contact />)

        screen.getByText('Are you working with teams?')
    })

    it('It should render "Yes, I’m open to work with teams. Explain to me your project and the role that you want me to play in it and I will answer as fast as possible." text',()=>{
        render(<Contact />)

        screen.getByText('Yes, I’m open to work with teams. Explain to me your project and the role that you want me to play in it and I will answer as fast as possible.')
    })

    it('It should render All the Questions and Answers text',()=>{
        render(<Contact />)
        
        QAData.forEach(QA => {
            screen.getByText(QA.question)
            screen.getByText(QA.answer)
        });
    })

    it('It should render "You need a developer?" text',()=>{
        render(<Contact />)

        screen.getByText('Yes, I’m open to work with teams. Explain to me your project and the role that you want me to play in it and I will answer as fast as possible.')
    })
})

describe('Contact Page - Contact Form Section tests',()=>{
    afterEach(cleanup)

    it('It should render "You need a developer?" text',()=>{
        render(<Contact />)

        screen.getByText('You need a developer?')
    })

    it('It should render "Use the contact form to give me as much detail as possible and i’ll answer you as soon as i can." text',()=>{
        render(<Contact />)

        screen.getByText('Use the contact form to give me as much detail as possible and i’ll answer you as soon as i can.')
    })
    
    it('It should render "Alternatively, get in touch with me using the information below." text',()=>{
        render(<Contact />)

        screen.getByText('Alternatively, get in touch with me using the information below.')
    })
        
    it('It should render a 2th "emi.martinez.se@gmail.com" text',()=>{
        render(<Contact />)

        const emails = screen.getAllByText('emi.martinez.se@gmail.com').length
        expect(emails).toBeGreaterThanOrEqual(2)
    })
})

describe('Contact Page - Form tests',()=>{
    it('It should render a Label and an Input place holder with "Your Name" text',()=>{
        render(<Contact />)

        screen.getByLabelText('Your Name')
        screen.getByPlaceholderText('Your Name')
    })

    it('It should render a Label and an Input place holder with "Your Email Address" text',()=>{
        render(<Contact />)

        screen.getByLabelText('Your Email Address')
        screen.getByPlaceholderText('Your Email Address')
    })

    it('It should render a Label and an Input place holder with "Project Details" text',()=>{
        render(<Contact />)

        screen.getByLabelText('Project Details')
        screen.getByPlaceholderText('Project Details')
    })

    it('It should render a Label with "Your Budget Range" text, and an Input place holder with "$" text',()=>{
        render(<Contact />)

        screen.getByLabelText('Your Budget Range')
        screen.getByPlaceholderText('$')
    })

    it('It should render a Label with "Your Timeline" text, and an Input place holder with "Ej:3-4 Meses" text',()=>{
        render(<Contact />)

        screen.getByLabelText('Your Timeline')
        screen.getByPlaceholderText('Ej:3-4 Meses')
    })

    it('It should render a Button with "Send message" text and a SVG file',()=>{
        render(<Contact />)

        const btnSend = screen.getByText('Send message')
        const svgSendArrow = btnSend.getElementsByTagName('svg').length
        expect(svgSendArrow).toBeGreaterThanOrEqual(1)

    })
})