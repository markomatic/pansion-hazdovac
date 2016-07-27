'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-scroll';
import ProgressiveImage from 'react-progressive-image';
import Page from './../page';
import ImageLoading from './../image-loading';
import preloadImages from './../../utils/preload-images.js';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        this.setState(this.getSize());
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize(e) {
        this.setState(this.getSize());
    }

    getSize() {
        const width = Math.floor(ReactDOM.findDOMNode(this).clientWidth);

        return {
            width,
            height: Math.floor(1071 * width / 1920)
        }
    }

    render() {
        const {
            width,
            height
        } = this.state;

        return (
            <Page  {...this.props} className={'LandingPage'}
                                   page={'landing'}>
                <ProgressiveImage lowUrl={'assets/landing-small.jpg'}
                                  highUrl={'assets/landing.jpg'}
                                  width={width}
                                  height={height}
                                  style={{ display: 'block', border: 0 }}
                                  renderOverlay={(width, height) => <ImageLoading width={width} height={height}/>}/>
                <p>Pansion Hazdovac is located in a small fishing village Kozarica. Pansion is situated near the sea, where there are two beaches. All rooms have their own bathrooms and balconies overlooking the sea and the peninsula of Pelješac. Pansion also includes a private parking, beach chairs, parasols, common TV room, Wi-Fi access and a large terrace where we serve breakfast and dinner of local dishes, especially fresh fish caught daily. Within the pansion there is also a family wine cellar and a café bar Kozarica. The closest shops are located in Babino Polje which is 15 kilometers away from Kozarica and the distance from Kozarica to National Park Mljet is only 10 kilometers. Now all you need to do is to go on the journey and come with us to feel the magic of the island of Mljet and Pansion Hazdovac that cannot be described in words.</p>
                <p>
                    Half board price is 40€ per person per day. For any further information please do not hesitate to
                    <Link to={'contact'} spy={true} smooth={true} offset={-50} duration={500} >
                        {' '}<a href={'javascript:void(0)'}>contact us</a>
                    </Link>.
                </p>
            </Page>
        );
    }
}

preloadImages(
    'assets/landing-small.jpg'
);
