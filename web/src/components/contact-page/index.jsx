'use strict';

import React, { Component } from 'react';
import Page from './../page';
import Map from './../map';

export default class extends Component {
    render() {
        return (
            <Page {...this.props} className={'ContactPage'}
                                  page={'contact'}>
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
