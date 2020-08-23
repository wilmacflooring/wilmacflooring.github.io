import React, { FunctionComponent } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import './Header.css';

const Header: FunctionComponent = () => {
    return (
        <div className="Header">
            <Image
                cloudName="wilmacflooring"
                publicId="cropped-StairsTop_ywk1mh"
                secure={true}
                crop="scale"
                quality="auto"
                fetchFormat="auto"
                alt="Beautiful tile work done by Wilmac Flooring."
            >
                <Transformation crop="scale" />
            </Image>
        </div>
    );
};

export default Header;
