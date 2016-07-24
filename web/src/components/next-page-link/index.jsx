'use strict';

import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class extends Component {
    render() {
        const page = this.props.page;

        if(!page) {
            return (
                <div style={{display: 'none'}}></div>
            )
        }

        return (
            <div className={'NextPageLink'}>
                <Link to={page}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}>
                    <div className={'arrow-box'}>
                        <div className={'line-arrow bottom'}></div>
                    </div>
                </Link>
            </div>
        );
    }
}
