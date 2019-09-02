import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap';
require('./index.scss');
import Root from './components/Root.js';
 
if(document.getElementById('root')){
    ReactDOM.render(
        <BrowserRouter>
            <Root/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

@import '~bootstrap/dist/css/bootstrap.css';
@import '~video.js/dist/video-js.css';
 
@import url('https://fonts.googleapis.com/css?family=Dosis');
 
html,body{
  font-family: 'Dosis', sans-serif;
}
