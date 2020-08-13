import helloWorld from './components/hello-world-btn/hello-world-button.js';
import HelloWorldButton from './components/hello-world-btn/hello-world-button';
import addImage from './add-image';
import Heading from './components/Header/heading'
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('hello world'));
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

helloWorldButton.methodThatDoesNotExist();