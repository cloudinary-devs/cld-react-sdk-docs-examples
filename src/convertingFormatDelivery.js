import {Cloudinary} from "@cloudinary/url-gen";

export function getConvertingFormatDeliveryImage() {

   // Create and configure your Cloudinary instance.
   const cld = new Cloudinary({
     cloud: {
       cloudName: 'demo'
     }
   }); 

   // Use the image with public ID, 'sample'.
   const myImage = cld.image('sample');

   // Set the format to GIF.
   myImage.format('gif');

   return myImage;

}