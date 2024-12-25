import Product from "../../product";
export default class AwesomeProduct extends Product {
    onReady() {
         // fancyBox
         $('[data-fancybox="gallery"]').fancybox({
            buttons: ['slideShow', 'share', 'zoom', 'fullScreen', 'close'], // Customize as needed
            loop: true, // Enables looping through the images
        });
        // fancyBox end
    }
} 