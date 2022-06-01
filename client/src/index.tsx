import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import store from "./store";
import App from './App';
import {GlobalStyle} from "./GlobalStyle";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
})

root.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App/>
                <GlobalStyle/>
            </BrowserRouter>
        </ApolloProvider>
    </Provider>
);

