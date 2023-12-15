import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'compressedMenuImage',
    standalone: true,
})
export class CompressedMenuImagePipe implements PipeTransform {
    public transform(
        imagePath: unknown,
        width: number = 1024,
        extension: string = 'avif'
    ): string {
        const url = `assets/menu/compressed/${imagePath}-${width}.${extension}`;
        return encodeURI(url);
    }
}
