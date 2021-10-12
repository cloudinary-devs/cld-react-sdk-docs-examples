import {Cloudinary} from "@cloudinary/url-gen";

export function getAutoFormatImage() {

    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    }
    }); 

    // Use the image with public ID, 'sample'.
    const myImage = cld.image('sample');

    // Request automatic format.
    myImage.format('auto');

    return myImage;
}