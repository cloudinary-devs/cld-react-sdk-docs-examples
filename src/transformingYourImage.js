import {Cloudinary} from "@cloudinary/url-gen";
// Import the scale mode from the resize action.
import {scale} from "@cloudinary/url-gen/actions/resize";

export function getTransformingYourImageImage() {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const myImage = cld.image('sample'); 

  // Scale the image to a width of 400 pixels.
  myImage.resize(scale().width(400));

  return myImage;
}
