import { render } from "@testing-library/react";
import App from "../src/components/App";

describe('App Render',()=>{
    it('it should render',()=>{
        render(<App />)
    })
})