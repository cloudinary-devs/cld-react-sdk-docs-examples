import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";

export function getResizingAndCroppingImage() {

    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    }
    });

    // Use the image with public ID, 'family_bench'.
    const myImage = cld.image('family_bench');

    // Apply the transformation.
    myImage.resize(fill().width(250).height(250).gravity('faces'));

    return myImage;
}