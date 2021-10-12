// Import the configuration classes.
import URLConfig from "@cloudinary/url-gen/config/URLConfig";
import CloudConfig from "@cloudinary/url-gen/config/CloudConfig";
import {CloudinaryImage} from '@cloudinary/url-gen';

export function getAssetInstanceImage() {

    // Set the Cloud configuration and URL configuration
    const cloudConfig = new CloudConfig({cloudName: 'demo'});
    const urlConfig = new URLConfig({secure: true});

    // Instantiate a new image passing the Cloud and URL configurations
    const myImage = new CloudinaryImage('sample', cloudConfig, urlConfig);

    return myImage;
}
