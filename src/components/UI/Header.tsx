import React, { FunctionComponent } from 'react';
import { Image, Transformation } from 'cloudinary-react';

const Header: FunctionComponent = () => {
    return (
        <div>
            <Image
                cloudName="wilmacflooring"
                publicId="cropped-StairsTop_rrbedj"
                secure={true}
                crop="scale"
                fetchFormat="auto"
                alt="Beautiful tile work done by Wilmac Flooring."
            >
                <Transformation crop="scale" />
            </Image>
        </div>
    );
};

export default Header;
