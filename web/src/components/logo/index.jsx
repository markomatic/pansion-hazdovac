'use strict';

import React, { Component } from 'react';
import preloadImages from './../../utils/preload-images.js';

export default class extends Component {
    render() {
        return (
            <div className={'Logo'}></div>
        );
    }
}

preloadImages(
    'assets/logo.png'
);
