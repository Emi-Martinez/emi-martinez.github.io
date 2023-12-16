import ReactDom from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./src/store";
import GlobalStyle from "./src/style/GobalStyle";
import { ThemeProvider } from "styled-components";
import baseTheme from "./src/style/Theme";

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={baseTheme}>
            <App />
        </ThemeProvider>
    </Provider>
)