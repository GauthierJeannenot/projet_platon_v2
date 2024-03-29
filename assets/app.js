/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)

// import './styles/nav.css';
// import './styles/connexion.css';
// import './styles/inscription.css';
// import './styles/index.css';
// import './styles/base.css';
// import './styles/catalogue.css';



import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './component/App';



let reactRoot = document.getElementById('root')

if (reactRoot != undefined) {

    ReactDOM.render(<App />, reactRoot);
}

