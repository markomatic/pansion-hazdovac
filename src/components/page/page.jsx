'use strict';

import React from 'react';
import { Element } from 'react-scroll';
import './page.scss';

export default class Page extends React.Component {
    render() {
        let className = 'Page';
        let propClassName = this.props.className;
        let props = this.props;

        if(propClassName) {
            className = `${className} ${propClassName}`;
        }

        props = Object.assign({}, props, {
            className: className
        });

        return (
            <Element {...props}>
                {this.props.children}
            </Element>
        );
    }
}
