import React from 'react';
import {useSelector} from "react-redux";
import {IGlobalState} from "../store/reducers";

const ScoreCard = () => {
    const score = useSelector((state: IGlobalState) => state.score);
    return (
        <div>
            <h2>Current score: {score}</h2>
        </div>
    );
};

export default ScoreCard;