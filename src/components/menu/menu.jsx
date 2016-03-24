'use strict';

import React from 'react';
import { Link } from 'react-scroll';
import './menu.scss';

export default class extends React.Component {
    render() {
        const linkOffset = this.props.linkOffset;
        const active = window.pageYOffset === 0 ? true : undefined;

        return (
            <div className="Menu">
                <nav>
                    <ul>
                        <li>
                            <Link activeClass="selected" active={active} to="landing" spy={true} smooth={true} offset={linkOffset} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="selected" to="gallery" spy={true} smooth={true} offset={linkOffset} duration={500}>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="selected" to="contact" spy={true} smooth={true} offset={linkOffset} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
