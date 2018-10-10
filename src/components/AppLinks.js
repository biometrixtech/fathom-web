// import React specific components
import React, { Component } from 'react';

// import third-party libraries
import { BrowserView, isAndroid, isIOS, MobileView, } from "react-device-detect";

// import utils
import { AppUtils, } from '../global/utils';
import AppleStoreLogo from '../assets/apple_store_badge.svg';
import GoogleStoreLogo from '../assets/google_play_badge.png';

class AppLinks extends Component {

    _imageClicked = (platform) => {
        let clickedAt = +new Date();
        setTimeout(() => {
            if(+new Date() - clickedAt < 2000) {
                window.open(
                    platform === 'google' ? AppUtils.androidStoreUrl() : AppUtils.iosStoreUrl(),
                    '_blank'
                );
            }
        }, 500);
    }

    render = () => {
        return (
            <div>
                <BrowserView>
                    <img
                        alt={'google_play_badge'}
                        className={'store-logo'}
                        onClick={() => this._imageClicked('google')}
                        src={GoogleStoreLogo}
                    />
                    <img
                        alt={'apple_store_badge'}
                        className={'store-logo'}
                        onClick={() => this._imageClicked('apple')}
                        src={AppleStoreLogo}
                    />
                </BrowserView>
                <MobileView>
                    { isAndroid ?
                        <img
                            alt={'google_play_badge'}
                            className={'store-logo'}
                            onClick={() => this._imageClicked('google')}
                            src={GoogleStoreLogo}
                        />
                        : isIOS ?
                            <img
                                alt={'apple_store_badge'}
                                className={'store-logo'}
                                onClick={() => this._imageClicked('apple')}
                                src={AppleStoreLogo}
                            />
                            :
                            null
                    }
                </MobileView>
            </div>
        );
    }
}

export default AppLinks;
