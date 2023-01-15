
import React from 'react';

export interface IInstructionProps {
    resetBoard: () => void;
}
const Instructions = ({ resetBoard }: IInstructionProps) => (
    <div>
        <h3>
            How to Play
        </h3>
        <h3>
            NOTE: Start the game by pressing <b>d</b>
        </h3>
        <div>
            <div>
        <span>
          <b> w </b>- Move Up
        </span>
                <span>
          <b> a </b>- Move Left
        </span>
                <span>
          <b> s </b>- Move Down
        </span>
                <span>
          <b> d</b> - Move Right
        </span>
            </div>
            <div>
                <button onClick={() => resetBoard()}>Reset game</button>
            </div>
        </div>
    </div>
);

export default Instructions;