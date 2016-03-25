'use strict';

import React from 'react';
import { Link } from 'react-scroll';
import './menu.scss';

export default class extends React.Component {
    render() {
        const active = window.pageYOffset === 0 ? true : undefined;

        return (
            <div className="Menu">
                <nav>
                    <ul>
                        <li>
                            <Link activeClass="selected"
                                  active={active}
                                  to="landing"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="selected"
                                  to="gallery"
                                  spy={true}
                                  smooth={true}
                                  offset={-50}
                                  duration={500}>
                                <span>Gallery</span>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="selected"
                                  to="contact"
                                  spy={true}
                                  smooth={true}
                                  offset={-50}
                                  duration={500}>
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
