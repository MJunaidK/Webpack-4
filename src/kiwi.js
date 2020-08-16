import Heading from './components/Header/heading.js'
import KiwiImage from './components/kiwi-image/kiwi-image.js'; 
import _ from 'lodash';
import React from 'react';

 const heading = new Heading();

 import(/* webpackChunkName: "lodash" */  'lodash').then(({ default: _ }) => {
    heading.render(('kiwi'));
}).catch(error => 'An error occurred while loading the component');


 const kiwiImage = new KiwiImage();
 kiwiImage.render();
