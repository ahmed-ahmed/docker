import template from './images.html';

class ImageController{
    constructor(imagesService){
        console.log('images controller');
        this.service = imagesService;
        imagesService.getImages().then((res)=>{
            this.images = res;
        })
    }
}

let component = {
    bindings: {
        // userName: '@',
        // enableNavigationBar: '<'
    },
    template,
    controller: ImageController
};

export default component;
