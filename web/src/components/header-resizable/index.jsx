'use strict';

import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            style: this.getStyle()
        };

        this.handlePageScroll = e => {
            this.setState({
                style: this.getStyle()
            });
        };
    }

    getStyle() {
        const maxHeight = this.props.maxHeight;
        const minHeight = this.props.minHeight;
        const height = maxHeight - this.pageOffsetTop();
        const top = maxHeight - height;
        return {
            height: height > minHeight && height || minHeight,
            top: top < (maxHeight - minHeight) && top || 0
        };
    }

    pageOffsetTop() {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ?
            document.documentElement.scrollTop : document.body.scrollTop;
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handlePageScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handlePageScroll);
    }

    render() {
        let className = 'HeaderResizable';
        const props = this.props;
        if (props.className) {
            className = `${className} ${props.className}`
        }

        return (
            <div className={className}
                 style={this.state.style}>
                {this.props.children}
            </div>
        );
    }
}
