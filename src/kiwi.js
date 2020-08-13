import Heading from './components/Header/heading.js'
import KiwiImage from './components/kiwi-image/kiwi-image.js'; 
import _ from 'lodash';
import React from 'react';

 const heading = new Heading();
 heading.render(_.upperFirst('kiwi'));
 const kiwiImage = new KiwiImage();
 kiwiImage.render();
