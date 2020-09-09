import React from 'react';
import './TextArea.css';

// document.execCommand('defaultParagraphSeparator', false, 'p');

export default function Toolbar() {
    // function handleNewLine(event) {
    //     if (event.keyCode === 13) {
    //         document.execCommand('insertHTML', false, '<br />');
    //         return false;
    //     }
    // }

    return (
        <div
            id="editor" className="editor-paper" contentEditable="true" suppressContentEditableWarning="true" spellCheck="true"
            // onKeyDown={handleNewLine}
        >
            Hi My lovely little Ponny
        </div>
    );
}
