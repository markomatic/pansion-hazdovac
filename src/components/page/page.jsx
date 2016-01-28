'use strict';

import React from 'react';
import { Element } from 'react-scroll';
import NextPageLink from './../next-page-link/next-page-link.jsx';
import './page.scss';

export default class Page extends React.Component {
    render() {
        let className = 'Page';
        const propClassName = this.props.className;

        if(propClassName) {
            className = `${className} ${propClassName}`;
        }

        return (
            <Element className={className} name={this.props.page}>
                {this.props.children}
                <NextPageLink page={this.props.nextPage} />
            </Element>
        );
    }
}
