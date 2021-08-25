import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

    transform(image: string): string {

        if (!image) {
            return 'assets/imgs/general/noimage.jpg';
        }

        if (image.length > 0) {

            return image;

        }

        return 'assets/imgs/general/noimage.jpg';
    }

}
