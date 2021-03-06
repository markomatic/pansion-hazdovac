'use strict';

import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Page from './../page';
import ImageLoading from './../image-loading';
import preloadImages from './../../utils/preload-images.js';

export default props => (
    <Page {...props} className={'GalleryPage'}
                     page={'gallery'}>
        <Gallery photos={galleryImages} /><br />
        <div style={{clear: 'both'}}></div>
    </Page>
);

const galleryImages = [
    {
        src: 'assets/gallery/large/1.jpg',
        placeholder: {
            src: 'assets/gallery/small/1.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1273,
        aspectRatio: 1920/1273,
        lightboxImage:{
            src: 'assets/gallery/large/1.jpg'
        }
    },
    {
        src: 'assets/gallery/large/2.jpg',
        placeholder: {
            src: 'assets/gallery/small/2.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/large/2.jpg'
        }
    },
    {
        src: 'assets/gallery/large/3.jpg',
        placeholder: {
            src: 'assets/gallery/small/3.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1683,
        aspectRatio: 1920/1683,
        lightboxImage:{
            src: 'assets/gallery/large/3.jpg'
        }
    },
    {
        src: 'assets/gallery/large/4.jpg',
        placeholder: {
            src: 'assets/gallery/small/4.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1280,
        height: 1920,
        aspectRatio: 1280/1920,
        lightboxImage:{
            src: 'assets/gallery/large/4.jpg'
        }
    },
    {
        src: 'assets/gallery/large/5.jpg',
        placeholder: {
            src: 'assets/gallery/small/5.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1273,
        aspectRatio: 1920/1273,
        lightboxImage:{
            src: 'assets/gallery/large/5.jpg'
        }
    },
    {
        src: 'assets/gallery/large/6.jpg',
        placeholder: {
            src: 'assets/gallery/small/6.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/large/6.jpg'
        }
    },
    {
        src: 'assets/gallery/large/7.jpg',
        placeholder: {
            src: 'assets/gallery/small/7.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1020,
        aspectRatio: 1920/1020,
        lightboxImage:{
            src: 'assets/gallery/large/7.jpg'
        }
    },
    {
        src: 'assets/gallery/large/8.jpg',
        placeholder: {
            src: 'assets/gallery/small/8.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1196,
        aspectRatio: 1920/1196,
        lightboxImage:{
            src: 'assets/gallery/large/8.jpg'
        }
    },
    {
        src: 'assets/gallery/large/9.jpg',
        placeholder: {
            src: 'assets/gallery/small/9.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/large/9.jpg'
        }
    },
    {
        src: 'assets/gallery/large/10.jpg',
        placeholder: {
            src: 'assets/gallery/small/10.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1792,
        height: 1920,
        aspectRatio: 1792/1920,
        lightboxImage:{
            src: 'assets/gallery/large/10.jpg'
        }
    },
    {
        src: 'assets/gallery/large/11.jpg',
        placeholder: {
            src: 'assets/gallery/small/11.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1148,
        aspectRatio: 1920/1148,
        lightboxImage:{
            src: 'assets/gallery/large/11.jpg'
        }
    },
    {
        src: 'assets/gallery/large/12.jpg',
        placeholder: {
            src: 'assets/gallery/small/12.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1370,
        aspectRatio: 1920/1370,
        lightboxImage:{
            src: 'assets/gallery/large/12.jpg'
        }
    },
    {
        src: 'assets/gallery/large/13.jpg',
        placeholder: {
            src: 'assets/gallery/small/13.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1079,
        aspectRatio: 1920/1079,
        lightboxImage:{
            src: 'assets/gallery/large/13.jpg'
        }
    },
    {
        src: 'assets/gallery/large/14.jpg',
        placeholder: {
            src: 'assets/gallery/small/14.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/large/14.jpg'
        }
    },
    {
        src: 'assets/gallery/large/15.jpg',
        placeholder: {
            src: 'assets/gallery/small/15.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1440,
        height: 1920,
        aspectRatio: 1440/1920,
        lightboxImage:{
            src: 'assets/gallery/large/15.jpg'
        }
    },
    {
        src: 'assets/gallery/large/16.jpg',
        placeholder: {
            src: 'assets/gallery/small/16.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/large/16.jpg'
        }
    },
    {
        src: 'assets/gallery/large/17.jpg',
        placeholder: {
            src: 'assets/gallery/small/17.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1440,
        height: 1920,
        aspectRatio: 1440/1920,
        lightboxImage:{
            src: 'assets/gallery/large/17.jpg'
        }
    },
    {
        src: 'assets/gallery/large/18.jpg',
        placeholder: {
            src: 'assets/gallery/small/18.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/large/18.jpg'
        }
    },
    {
        src: 'assets/gallery/large/19.jpg',
        placeholder: {
            src: 'assets/gallery/small/19.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1211,
        aspectRatio: 1920/1211,
        lightboxImage:{
            src: 'assets/gallery/large/19.jpg'
        }
    },
    {
        src: 'assets/gallery/large/20.jpg',
        placeholder: {
            src: 'assets/gallery/small/20.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/large/20.jpg'
        }
    },
    {
        src: 'assets/gallery/large/21.jpg',
        placeholder: {
            src: 'assets/gallery/small/21.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1052,
        aspectRatio: 1920/1052,
        lightboxImage:{
            src: 'assets/gallery/large/21.jpg'
        }
    },
    {
        src: 'assets/gallery/large/22.jpg',
        placeholder: {
            src: 'assets/gallery/small/22.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/large/22.jpg'
        }
    },
    {
        src: 'assets/gallery/large/23.jpg',
        placeholder: {
            src: 'assets/gallery/small/23.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1440,
        height: 1920,
        aspectRatio: 1440/1920,
        lightboxImage:{
            src: 'assets/gallery/large/23.jpg'
        }
    },
    {
        src: 'assets/gallery/large/24.jpg',
        placeholder: {
            src: 'assets/gallery/small/24.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/large/24.jpg'
        }
    },
    {
        src: 'assets/gallery/large/25.jpg',
        placeholder: {
            src: 'assets/gallery/small/25.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1643,
        aspectRatio: 1920/1643,
        lightboxImage:{
            src: 'assets/gallery/large/25.jpg'
        }
    },
    {
        src: 'assets/gallery/large/26.jpg',
        placeholder: {
            src: 'assets/gallery/small/26.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1440,
        aspectRatio: 1920/1440,
        lightboxImage:{
            src: 'assets/gallery/large/26.jpg'
        }
    },
    {
        src: 'assets/gallery/large/27.jpg',
        placeholder: {
            src: 'assets/gallery/small/27.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1316,
        aspectRatio: 1920/1316,
        lightboxImage:{
            src: 'assets/gallery/large/27.jpg'
        }
    },
    {
        src: 'assets/gallery/large/28.jpg',
        placeholder: {
            src: 'assets/gallery/small/28.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1079,
        aspectRatio: 1920/1079,
        lightboxImage:{
            src: 'assets/gallery/large/28.jpg'
        }
    },
    {
        src: 'assets/gallery/large/29.jpg',
        placeholder: {
            src: 'assets/gallery/small/29.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1812,
        height: 1920,
        aspectRatio: 1812/1920,
        lightboxImage:{
            src: 'assets/gallery/large/29.jpg'
        }
    },
    {
        src: 'assets/gallery/large/30.jpg',
        placeholder: {
            src: 'assets/gallery/small/30.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1080,
        aspectRatio: 1920/1080,
        lightboxImage:{
            src: 'assets/gallery/large/30.jpg'
        }
    },
    {
        src: 'assets/gallery/large/31.jpg',
        placeholder: {
            src: 'assets/gallery/small/31.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1079,
        aspectRatio: 1920/1079,
        lightboxImage:{
            src: 'assets/gallery/large/31.jpg'
        }
    },
    {
        src: 'assets/gallery/large/32.jpg',
        placeholder: {
            src: 'assets/gallery/small/32.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1079,
        height: 1920,
        aspectRatio: 1079/1920,
        lightboxImage:{
            src: 'assets/gallery/large/32.jpg'
        }
    },
    {
        src: 'assets/gallery/large/33.jpg',
        placeholder: {
            src: 'assets/gallery/small/33.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 1079,
        aspectRatio: 1920/1079,
        lightboxImage:{
            src: 'assets/gallery/large/33.jpg'
        }
    },
    {
        src: 'assets/gallery/large/34.jpg',
        placeholder: {
            src: 'assets/gallery/small/34.jpg',
            renderOverlay: (width, height) => <ImageLoading width={width} height={height}/>
        },
        width: 1920,
        height: 975,
        aspectRatio: 1920/975,
        lightboxImage:{
            src: 'assets/gallery/large/34.jpg'
        }
    }
];

preloadImages(
    'assets/gallery/small/1.jpg',
    'assets/gallery/small/2.jpg',
    'assets/gallery/small/3.jpg',
    'assets/gallery/small/4.jpg',
    'assets/gallery/small/5.jpg',
    'assets/gallery/small/6.jpg',
    'assets/gallery/small/7.jpg',
    'assets/gallery/small/8.jpg',
    'assets/gallery/small/9.jpg',
    'assets/gallery/small/10.jpg',
    'assets/gallery/small/11.jpg',
    'assets/gallery/small/12.jpg',
    'assets/gallery/small/13.jpg',
    'assets/gallery/small/14.jpg',
    'assets/gallery/small/15.jpg',
    'assets/gallery/small/16.jpg',
    'assets/gallery/small/17.jpg',
    'assets/gallery/small/18.jpg',
    'assets/gallery/small/19.jpg',
    'assets/gallery/small/20.jpg',
    'assets/gallery/small/21.jpg',
    'assets/gallery/small/22.jpg',
    'assets/gallery/small/23.jpg',
    'assets/gallery/small/24.jpg',
    'assets/gallery/small/25.jpg',
    'assets/gallery/small/26.jpg',
    'assets/gallery/small/27.jpg',
    'assets/gallery/small/28.jpg',
    'assets/gallery/small/29.jpg',
    'assets/gallery/small/30.jpg',
    'assets/gallery/small/31.jpg',
    'assets/gallery/small/32.jpg',
    'assets/gallery/small/33.jpg',
    'assets/gallery/small/34.jpg'
);
