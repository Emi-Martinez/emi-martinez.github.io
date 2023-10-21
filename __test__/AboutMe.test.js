import { render, cleanup, screen } from "@testing-library/react";
import AboutMe from "../src/pages/AboutMe";

describe('About Me Page - Hero Area tests',()=>{
    afterEach(cleanup)
    it('It should render an image',()=>{
      render(<AboutMe />)

      const imgs = screen.getAllByRole('myImg')
      expect(imgs[0].tagName).toBe('IMG')
    })

    it('It should render "I’m Emiliano Martinez" text',()=>{
        render(<AboutMe />)

        screen.getByText('I’m Emiliano Martinez')
    })

    it('It should render "A freelancer web developer, passionate about computing and i’m into it since the high school." text',()=>{
        render(<AboutMe />)

        screen.getByText('A freelancer web developer, passionate about computing and i’m into it since the high school.')
    })

    it('It should render "I help people to build and fix their web sites in the shortest time posible with the best quality." text',()=>{
        render(<AboutMe />)

        screen.getByText('I help people to build and fix their web sites in the shortest time posible with the best quality.')
    })

    it('It should render "If you decide to require my services i will make your needs my priorities." text',()=>{
        render(<AboutMe />)

        screen.getByText('If you decide to require my services i will make your needs my priorities.')
    })
})

describe('About Me Page - Benefits Section tests',()=>{
    afterEach(cleanup)
    it('It should render "No matter the size of your project, you will always get:" text',()=>{
        render(<AboutMe />)

        screen.getByText('No matter the size of your project, you will always get:')
    })

    it('It should render 3 SVGs tags',()=>{
        render(<AboutMe />)

        const svgs = screen.getByRole('main').getElementsByTagName('svg').length
        console.log(svgs[0])
        expect(svgs).toBe(3)
    })

    it('It should render "Professionalism" text',()=>{
        render(<AboutMe />)

        screen.getByText('Professionalism')
    })

    it('It should render "On-time delivery" text',()=>{
        render(<AboutMe />)

        screen.getByText('On-time delivery')
    })

    it('It should render "Quality" text',()=>{
        render(<AboutMe />)

        screen.getByText('Quality')
    })

    it('It should render "I will never false promises you something that i can’t do or build" text',()=>{
        render(<AboutMe />)

        screen.getByText('I will never false promises you something that i can’t do or build')
    })

    it('It should render "I know time is money and i don’t pretend to waste yours or mine" text',()=>{
        render(<AboutMe />)

        screen.getByText('I know time is money and i don’t pretend to waste yours or mine')
    })

    it('It should render "The performance and clarity of my code is foundational to my work" text',()=>{
        render(<AboutMe />)

        screen.getByText('The performance and clarity of my code is foundational to my work')
    })

})

describe('About Me Page - Technologies used to Work Section tests',()=>{
    afterEach(cleanup)
    it('It should render "Technologies i use to work" text',()=>{
        render(<AboutMe />)

        screen.getByText('Technologies i use to work')
    })

    it('It should render Technologies imgs',()=>{
        render(<AboutMe />)

        const imgs = screen.getByTestId('technologies').getElementsByTagName('img').length
        expect(imgs).toBe(9)
    })

    it('It should render "HTML" text',()=>{
        render(<AboutMe />)

        screen.getByText('HTML')
    })

    it('It should render The Footer text',()=>{
        render(<AboutMe />)

        screen.getByRole('footer')
    })
})