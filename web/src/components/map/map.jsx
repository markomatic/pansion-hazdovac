'use strict';

import React, {Component} from 'react';
import './map.scss';

export default class extends Component {
    render() {
        return (
            <div className={'Map'}>
                <iframe src="http://maps.google.com/maps?q=42.776359,17.464667&z=12&output=embed"
                        width="600"
                        height="450"
                        frameBorder="0"
                        allowFullScreen>
                </iframe>
            </div>
        )
    }
}
