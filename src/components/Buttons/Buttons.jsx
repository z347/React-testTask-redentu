import React from 'react';
import { useSelector } from 'react-redux';
import './Buttons.css';

export default function Buttons() {
    const toolbarState = useSelector(state => state.toolbar);

    function toJSON() {
        const container = document.querySelector('#editor');
        const children = container.childNodes;
        const spans = document.querySelectorAll('span');

        let toJSON = [];
        let json = {};

        Array.from(children).map((element, index) => {
            if ([...spans].includes(element)) {
                return toJSON.push({
                    text: element.textContent,
                    style: {
                        fontSize: element.style.fontSize,
                        color: element.style.color,
                        backgroundColor: element.style.backgroundColor,
                    },
                });
            } else if (element.textContent !== '') {
                return toJSON.push({ text: element.textContent });
            } else {
                return true;
            }
        });

        Object.assign(json, toJSON);

        // console.log(toJSON);
        console.log(json);
    }

    function getState() {
        alert(
            `background-color: ${toolbarState.bgColor}\nfont-size: ${toolbarState.fontSize}\nfont-color: ${toolbarState.fontColor}`,
        );
    }

    return (
        <div>
            <button onClick={toJSON}>json</button>
            <button onClick={getState}>store</button>
        </div>
    );
}
