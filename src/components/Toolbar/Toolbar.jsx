import React from 'react';
import { useDispatch } from 'react-redux';
import { onChangeBackgroundColor, onChangeFontColor, onChangeFontSize } from '../../store/actions/Toolbar.action';
import './Toolbar.css';

function Toolbar() {
    const dispatch = useDispatch();

    function handleChangeStyle(event) {
        const selected = window.getSelection && window.getSelection();

        if (selected && selected.rangeCount > 0) {
            // const parentElement = window.getSelection(0).focusNode.parentElement;
            // const div = document.querySelector('div#editor.editor-paper');
            // const span = document.querySelector('span');

            const range = window.getSelection().getRangeAt(0);
            const selectionContents = range.extractContents();
            const spanCreate = document.createElement('span');

            spanCreate.appendChild(selectionContents);

            if (
                event.target.value === '#000' ||
                event.target.value === '#d41225' ||
                event.target.value === '#e0387f' ||
                event.target.value === '#efe936'
            ) {
                spanCreate.style.color = event.target.value;
                dispatch(onChangeFontColor(event.target.value));
            } else if (
                event.target.value === '#ffffff' ||
                event.target.value === '#39a2f9' ||
                event.target.value === '#54ec22' ||
                event.target.value === '#c61ef1'
            ) {
                spanCreate.style.backgroundColor = event.target.value;
                dispatch(onChangeBackgroundColor(event.target.value));
            } else {
                spanCreate.style.fontSize = event.target.value;
                dispatch(onChangeFontSize(event.target.value));
            }

            range.insertNode(spanCreate);
        }
    }

    return (
        <form className="toolbar-content">
            <label>
                Font size:
                <select onChange={handleChangeStyle}>
                    <option value="10px">Small</option>
                    <option value="14px">Normal</option>
                    <option value="18px">Large</option>
                    <option value="22px">Extra</option>
                </select>
            </label>

            <label>
                Font color:
                <select onChange={handleChangeStyle}>
                    <option value="#000">Black</option>
                    <option value="#d41225">Red</option>
                    <option value="#e0387f">Pink</option>
                    <option value="#efe936">Yellow</option>
                </select>
            </label>

            <label>
                Background color:
                <select onChange={handleChangeStyle}>
                    <option value="#ffffff">White</option>
                    <option value="#39a2f9">Blue</option>
                    <option value="#54ec22">Green</option>
                    <option value="#c61ef1">Purple</option>
                </select>
            </label>
        </form>
    );
}

export default Toolbar;
