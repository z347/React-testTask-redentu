import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Toolbar from './components/Toolbar/Toolbar';
import ToolbarTest from './components/Toolbar/Toolbar-test';
import TextArea from './components/TextArea/TextArea';
import Buttons from './components/Buttons/Buttons';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Fragment>
                <header>
                    <h1>&#9885; &#8195; simple text editor &#8195; &#9885;</h1>
                </header>

                <main>
                    {/* <Toolbar /> */}
                    <ToolbarTest />
                    <TextArea />
                </main>

                <Buttons />
            </Fragment>
        </Provider>
    );
}

export default App;
