'use strict';

import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Page from './../page';
import preloadImages from './../../utils/preload-images.js';

export default class extends Component {
    componentWillMount() {
        preloadImages(
            'assets/gallery/1.jpg',
            'assets/gallery/2.jpg',
            'assets/gallery/3.jpg',
            'assets/gallery/4.jpg',
            'assets/gallery/5.jpg',
            'assets/gallery/6.jpg',
            'assets/gallery/7.jpg',
            'assets/gallery/8.jpg',
            'assets/gallery/9.jpg',
            'assets/gallery/10.jpg',
            'assets/gallery/11.jpg',
            'assets/gallery/12.jpg',
            'assets/gallery/13.jpg',
            'assets/gallery/14.jpg',
            'assets/gallery/15.jpg',
            'assets/gallery/16.jpg',
            'assets/gallery/17.jpg',
            'assets/gallery/18.jpg',
            'assets/gallery/19.jpg',
            'assets/gallery/20.jpg',
            'assets/gallery/21.jpg',
            'assets/gallery/22.jpg',
            'assets/gallery/23.jpg',
            'assets/gallery/24.jpg',
            'assets/gallery/25.jpg',
            'assets/gallery/26.jpg',
            'assets/gallery/27.jpg',
            'assets/gallery/28.jpg',
            'assets/gallery/29.jpg',
            'assets/gallery/30.jpg',
            'assets/gallery/31.jpg',
            'assets/gallery/32.jpg',
            'assets/gallery/33.jpg',
            'assets/gallery/34.jpg'
        );
    }

    render() {
        return (
            <Page {...this.props} className={'GalleryPage'}
                                  page={'gallery'}>
                <Gallery photos={galleryImages} /><br />
                <div style={{clear: 'both'}}></div>
            </Page>
        );
    }
}

const galleryImages = [
    {
        src: 'assets/gallery/1.jpg',
        width: 2592,
        height: 1718,
        aspectRatio: 2592/1718,
        lightboxImage:{
            src: 'assets/gallery/1.jpg'
        }
    },
    {
        src: 'assets/gallery/2.jpg',
        width: 2816,
        height: 2112,
        aspectRatio: 2816/2112,
        lightboxImage:{
            src: 'assets/gallery/2.jpg'
        }
    },
    {
        src: 'assets/gallery/3.jpg',
        width: 1959,
        height: 1717,
        aspectRatio: 1959/1717,
        lightboxImage:{
            src: 'assets/gallery/3.jpg'
        }
    },
    {
        src: 'assets/gallery/4.jpg',
        width: 2204,
        height: 3305,
        aspectRatio: 2204/3305,
        lightboxImage:{
            src: 'assets/gallery/4.jpg'
        }
    },
    {
        src: 'assets/gallery/5.jpg',
        width: 2592,
        height: 1718,
        aspectRatio: 2592/1718,
        lightboxImage:{
            src: 'assets/gallery/5.jpg'
        }
    },
    {
        src: 'assets/gallery/6.jpg',
        width: 2816,
        height: 2112,
        aspectRatio: 2816/2112,
        lightboxImage:{
            src: 'assets/gallery/6.jpg'
        }
    },
    {
        src: 'assets/gallery/7.jpg',
        width: 2592,
        height: 1377,
        aspectRatio: 2592/1377,
        lightboxImage:{
            src: 'assets/gallery/7.jpg'
        }
    },
    {
        src: 'assets/gallery/8.jpg',
        width: 2816,
        height: 1754,
        aspectRatio: 2816/1754,
        lightboxImage:{
            src: 'assets/gallery/8.jpg'
        }
    },
    {
        src: 'assets/gallery/9.jpg',
        width: 2816,
        height: 2112,
        aspectRatio: 2816/2112,
        lightboxImage:{
            src: 'assets/gallery/9.jpg'
        }
    },
    {
        src: 'assets/gallery/10.jpg',
        width: 1972,
        height: 2112,
        aspectRatio: 1972/2112,
        lightboxImage:{
            src: 'assets/gallery/10.jpg'
        }
    },
    {
        src: 'assets/gallery/11.jpg',
        width: 2641,
        height: 1579,
        aspectRatio: 2641/1579,
        lightboxImage:{
            src: 'assets/gallery/11.jpg'
        }
    },
    {
        src: 'assets/gallery/12.jpg',
        width: 2816,
        height: 2009,
        aspectRatio: 2816/2009,
        lightboxImage:{
            src: 'assets/gallery/12.jpg'
        }
    },
    {
        src: 'assets/gallery/13.jpg',
        width: 3920,
        height: 2204,
        aspectRatio: 3920/2204,
        lightboxImage:{
            src: 'assets/gallery/13.jpg'
        }
    },
    {
        src: 'assets/gallery/14.jpg',
        width: 2816,
        height: 2112,
        aspectRatio: 2816/2112,
        lightboxImage:{
            src: 'assets/gallery/14.jpg'
        }
    },
    {
        src: 'assets/gallery/15.jpg',
        width: 2112,
        height: 2816,
        aspectRatio: 2112/2816,
        lightboxImage:{
            src: 'assets/gallery/15.jpg'
        }
    },
    {
        src: 'assets/gallery/16.jpg',
        width: 2816,
        height: 2112,
        aspectRatio: 2816/2112,
        lightboxImage:{
            src: 'assets/gallery/16.jpg'
        }
    },
    {
        src: 'assets/gallery/17.jpg',
        width: 2112,
        height: 2816,
        aspectRatio: 2112/2816,
        lightboxImage:{
            src: 'assets/gallery/17.jpg'
        }
    },
    {
        src: 'assets/gallery/18.jpg',
        width: 2816,
        height: 2112,
        aspectRatio: 2816/2112,
        lightboxImage:{
            src: 'assets/gallery/18.jpg'
        }
    },
    {
        src: 'assets/gallery/19.jpg',
        width: 2816,
        height: 1777,
        aspectRatio: 2816/1777,
        lightboxImage:{
            src: 'assets/gallery/19.jpg'
        }
    },
    {
        src: 'assets/gallery/20.jpg',
        width: 2816,
        height: 2112,
        aspectRatio: 2816/2112,
        lightboxImage:{
            src: 'assets/gallery/20.jpg'
        }
    },
    {
        src: 'assets/gallery/21.jpg',
        width: 2593,
        height: 1421,
        aspectRatio: 2593/1421,
        lightboxImage:{
            src: 'assets/gallery/21.jpg'
        }
    },
    {
        src: 'assets/gallery/22.jpg',
        width: 2705,
        height: 2029,
        aspectRatio: 2705/2029,
        lightboxImage:{
            src: 'assets/gallery/22.jpg'
        }
    },
    {
        src: 'assets/gallery/23.jpg',
        width: 2112,
        height: 2816,
        aspectRatio: 2112/2816,
        lightboxImage:{
            src: 'assets/gallery/23.jpg'
        }
    },
    {
        src: 'assets/gallery/24.jpg',
        width: 2816,
        height: 2112,
        aspectRatio: 2816/2112,
        lightboxImage:{
            src: 'assets/gallery/24.jpg'
        }
    },
    {
        src: 'assets/gallery/25.jpg',
        width: 2468,
        height: 2112,
        aspectRatio: 2468/2112,
        lightboxImage:{
            src: 'assets/gallery/25.jpg'
        }
    },
    {
        src: 'assets/gallery/26.jpg',
        width: 2816,
        height: 2112,
        aspectRatio: 2816/2112,
        lightboxImage:{
            src: 'assets/gallery/26.jpg'
        }
    },
    {
        src: 'assets/gallery/27.jpg',
        width: 3215,
        height: 2204,
        aspectRatio: 3215/2204,
        lightboxImage:{
            src: 'assets/gallery/27.jpg'
        }
    },
    {
        src: 'assets/gallery/28.jpg',
        width: 3920,
        height: 2204,
        aspectRatio: 3920/2204,
        lightboxImage:{
            src: 'assets/gallery/28.jpg'
        }
    },
    {
        src: 'assets/gallery/29.jpg',
        width: 2119,
        height: 2245,
        aspectRatio: 2119/2245,
        lightboxImage:{
            src: 'assets/gallery/29.jpg'
        }
    },
    {
        src: 'assets/gallery/30.jpg',
        width: 3145,
        height: 1769,
        aspectRatio: 3145/1769,
        lightboxImage:{
            src: 'assets/gallery/30.jpg'
        }
    },
    {
        src: 'assets/gallery/31.jpg',
        width: 3920,
        height: 2204,
        aspectRatio: 3920/2204,
        lightboxImage:{
            src: 'assets/gallery/31.jpg'
        }
    },
    {
        src: 'assets/gallery/32.jpg',
        width: 2204,
        height: 3920,
        aspectRatio: 2204/3920,
        lightboxImage:{
            src: 'assets/gallery/32.jpg'
        }
    },
    {
        src: 'assets/gallery/33.jpg',
        width: 3920,
        height: 2204,
        aspectRatio: 3920/2204,
        lightboxImage:{
            src: 'assets/gallery/33.jpg'
        }
    },
    {
        src: 'assets/gallery/34.jpg',
        width: 2592,
        height: 1317,
        aspectRatio: 2592/1317,
        lightboxImage:{
            src: 'assets/gallery/34.jpg'
        }
    }
];
