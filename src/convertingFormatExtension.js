import {Cloudinary} from "@cloudinary/url-gen"

export function getConvertingFormatExtensionImage() {
 // Create and configure your Cloudinary instance.
 const cld = new Cloudinary({
   cloud: {
     cloudName: 'demo'
   }
 }); 

 // Use the image with public ID, 'sample', specifying the 'gif' extension.
 const myImage = cld.image('sample.gif');

 return myImage;
}