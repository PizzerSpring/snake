import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import CanvasBoard from "./components/CanvasBoard";

function App() {
    return (
        <Provider store={store}>
                <h2>SNAKE GAME</h2>
                <CanvasBoard height={600} width={1000}/>
        </Provider>
    );
}

export default App;
