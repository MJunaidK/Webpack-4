import helloWorld from './components/hello-world-btn/hello-world-button.js';
import HelloWorldButton from './components/hello-world-btn/hello-world-button';
import addImage from './add-image';
import Heading from './components/Header/heading'

const heading = new Heading();
heading.render();
const helloWorldButton =  new HelloWorldButton();
helloWorldButton.render();
//addImage();

if(process.env.NODE_ENV === 'production'){
    console.log('Production Mode');
}else{
    console.log('Development Mode');
}

helloWorldButton.methodThatDoesNotExist();