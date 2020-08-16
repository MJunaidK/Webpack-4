import helloWorld from './components/hello-world-btn/hello-world-button.js';
import HelloWorldButton from './components/hello-world-btn/hello-world-button';
import addImage from './add-image';
import Heading from './components/Header/heading'
import React from 'react';
import './index.scss';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const heading = new Heading();

import(/* webpackChunkName: "lodash" */  'lodash').then(({ default: _ }) => {
    heading.render(_.upperFirst('hello world'));    
}).catch(error => 'An error occurred while loading the component');

//const heading2 = new Heading();
//heading2.render();

const helloWorldButton =  new HelloWorldButton();
helloWorldButton.render();
//addImage();

if(process.env.NODE_ENV === 'production'){
    console.log('Production Mode');
}else{
    console.log('Development Mode');
}

//helloWorldButton.methodThatDoesNotExist();