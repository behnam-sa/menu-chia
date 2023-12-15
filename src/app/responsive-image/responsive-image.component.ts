import { Component, Input } from '@angular/core';
import { CompressedMenuImagePipe } from '../menu/pipes/compressed-menu-image.pipe';

@Component({
    selector: 'app-responsive-image',
    standalone: true,
    imports: [CompressedMenuImagePipe],
    templateUrl: './responsive-image.component.html',
    styleUrls: ['./responsive-image.component.scss'],
})
export class ResponsiveImageComponent {
    @Input({ required: true })
    public path!: string;

    public getThumbnail(width: number, extension: string) {
        const url = `assets/menu/compressed/${this.path}-${width}.${extension}`;
        return encodeURI(url);
    }
}
