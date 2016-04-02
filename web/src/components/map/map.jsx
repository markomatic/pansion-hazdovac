'use strict';

import React, {Component} from 'react';
import {
    GoogleMapLoader,
    GoogleMap,
    Marker
} from "react-google-maps";
import './map.scss';

export default class extends Component {
    render() {
        return (
            <div className={'Map'}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46857.07690603743!2d17.42953617444801!3d42.776353615105364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQ2JzM0LjkiTiAxN8KwMjcnNTIuNCJF!5e1!3m2!1shr!2shr!4v1459605749966"
                        width="600"
                        height="450"
                        frameBorder="0"
                        allowFullScreen>
                </iframe>
            </div>
        )
    }
}
