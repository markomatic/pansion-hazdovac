'use strict';

import React from 'react';
import Page from './../page/page.jsx';
import Map from './../map/map.jsx';
import './contact-page.scss';

export default class extends React.Component {
    render() {
        return (
            <Page className={'ContactPage'}
                  page="contact" {...this.props}>
                <div className={'contactInfo'}>
                    <div className={'info'}>
                        <div className={'box'}>
                            <h2>Contact us</h2>
                            <p>
                                Phone: +385 98 991 2093 <br />
                                Email: info@pansion-hazdovac-mljet.com
                            </p>
                        </div>
                        <div className={'box'}>
                            <h2>Visit us</h2>
                            <p>
                                Kozarica 4 <br />
                                20225 Babino Polje <br />
                                Mljet, Croatia <br />
                            </p>
                        </div>
                    </div>
                </div>
                <Map />
            </Page>
        );
    }
}
