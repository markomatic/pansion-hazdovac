'use strict';

import React from 'react';
import { Element } from 'react-scroll';
import NextPageLink from './../next-page-link/next-page-link.jsx';
import './page.scss';

export default class Page extends React.Component {
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
