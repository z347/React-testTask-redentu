import React from 'react';
import './Toolbar.css';

import { connect, useSelector, useDispatch } from 'react-redux';
import { onChangeBackgroundColor } from '../../store/actions/Toolbar.action';

// const dispatch = useDispatch();

// TODO: need improve this component
// FIXME: IndexSizeError: Failed to execute 'getRangeAt' on 'Selection': 0 is not a valid index.
class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontSize: '',
            fontColor: '',
            backgroundColor: '',
        };

        this.handleChangeStyle = this.handleChangeStyle.bind(this);
    }

    handleChangeStyle(event) {
        this.setState({ value: event.target.value });

        if (window.getSelection() !== '') {
            const parentElement = window.getSelection(0).focusNode.parentElement;
            const div = document.querySelector('div#editor.editor-paper');
            const span = document.querySelector('span');
            const range = window.getSelection().getRangeAt(0);
            const selectionContents = range.extractContents();
            const spanCreate = document.createElement('span');
            const spanCreate2 = document.createElement('span');

            if (parentElement === div) {
                spanCreate.appendChild(selectionContents);
                spanCreate.style.fontSize = event.target.value;

                if (
                    event.target.value === '#000' ||
                    event.target.value === '#d41225' ||
                    event.target.value === '#e0387f' ||
                    event.target.value === '#efe936'
                ) {
                    spanCreate.style.color = event.target.value;
                }

                if (
                    event.target.value === '#ffffff' ||
                    event.target.value === '#39a2f9' ||
                    event.target.value === '#54ec22' ||
                    event.target.value === '#c61ef1'
                ) {
                    spanCreate.style.backgroundColor = event.target.value;
                }

                range.insertNode(spanCreate);
            }

            if (parentElement === span) {
                // console.log(parentElement.textContent); // виводить увесть текст "батька" => 

                // хуйння
                // const textBeforeSpan = parentElement.firstChild; // текст до внутреного <span> но ево нельзя считать или чтото сделать
                // console.log(textBeforeSpan);

                // ===================================================================================================

                // console.log(parentElement.firstChild.nodeValue);
                // console.log(parentElement.lastChild.nodeValue);
                console.log(parentElement);
                console.log(parentElement.childNodes[0].nodeValue);
                // console.log('childNodes length: ', parentElement.childNodes.length);
                // console.log(parentElement.childNodes[2]);




                // з цим можна щось придумати по ідеї
                // const allText = parentElement.textContent;  //  весь текст, без учёта внутреного <span>
                // const element = document.createElement('span');
                // element.innerHTML = allText;
                // div.appendChild(element);
                // console.log(allText);

                const fontSize = parentElement.style.fontSize;
                const color = parentElement.style.color;
                const backgroundColor = parentElement.style.backgroundColor;

                // if (fontSize) element.style.fontSize = fontSize;
                // if (color) element.style.color = color;
                // if (backgroundColor) element.style.backgroundColor = backgroundColor;

                // parentElement.remove()
                // ===================================================================================================

                spanCreate.appendChild(selectionContents);
                spanCreate.style.fontSize = event.target.value;
                if (
                    event.target.value === '#000' ||
                    event.target.value === '#d41225' ||
                    event.target.value === '#e0387f' ||
                    event.target.value === '#efe936'
                ) {
                    spanCreate.style.color = event.target.value;
                }

                if (
                    event.target.value === '#ffffff' ||
                    event.target.value === '#39a2f9' ||
                    event.target.value === '#54ec22' ||
                    event.target.value === '#c61ef1'
                ) {
                    spanCreate.style.backgroundColor = event.target.value;
                    // tets
                    onChangeBackgroundColor(event.target.value);
                }

                range.insertNode(spanCreate);
            }
        }
    }

    render() {
        return (
            <form className="toolbar-content">
                <label>
                    Font size:
                    <select value={this.state.value} onChange={this.handleChangeStyle}>
                        <option value="10px">Small</option>
                        <option value="14px">Normal</option>
                        <option value="18px">Large</option>
                        <option value="22px">Extra</option>
                    </select>
                </label>

                <label>
                    Font color:
                    <select value={this.state.value} onChange={this.handleChangeStyle}>
                        <option value="#000">Black</option>
                        <option value="#d41225">Red</option>
                        <option value="#e0387f">Pink</option>
                        <option value="#efe936">Yellow</option>
                    </select>
                </label>

                <label>
                    Background color:
                    <select value={this.state.value} onChange={this.handleChangeStyle}>
                        <option value="#ffffff">White</option>
                        <option value="#39a2f9">Blue</option>
                        <option value="#54ec22">Green</option>
                        <option value="#c61ef1">Purple</option>
                    </select>
                </label>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeBackgroundColor: bgColor => dispatch(onChangeBackgroundColor(bgColor)),
    };
}

export default connect(null, mapDispatchToProps)(Toolbar);
// export default Toolbar;
