import React, {Component} from 'react';
import {Route, Routes} from "react-router";
import {routes} from "./utils/routes";

class App extends Component<any, any> {

    render() {
        return (
            <Routes>
                {routes.map(({path, element}) => (
                    <Route key={path} path={path} element={element}/>
                ))}
            </Routes>
        )
    }
}

export default App;
