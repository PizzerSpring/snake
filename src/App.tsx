import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import CanvasBoard from "./components/CanvasBoard";
import ScoreCard from "./components/ScoreCard";

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <h2>SNAKE GAME</h2>
                <ScoreCard/>
                <CanvasBoard height={400} width={800}/>
            </div>
        </Provider>
    );
}

export default App;
