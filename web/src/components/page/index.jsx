'use strict';

import React, { Component } from 'react';
import { Element } from 'react-scroll';
import NextPageLink from './../next-page-link';

export default class Page extends Component {
    render() {
        let className = 'Page';
        const props = this.props;
        const propClassName = props.className;

        if(propClassName) {
            className = `${className} ${propClassName}`;
        }

        return (
            <Element className={className}
                     name={props.page}
                     style={props.pageStyle || {}}>
                {props.children}
                <NextPageLink page={props.nextPage} />
            </Element>
        );
    }
}
