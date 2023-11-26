import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-responsive-image',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './responsive-image.component.html',
    styleUrls: ['./responsive-image.component.scss'],
})
export class ResponsiveImageComponent {
    @Input({ required: true })
    path!: string;

    public getThumbnail(width: number, extension: string) {
        const url = `assets/menu/compressed/${this.path}-${width}.${extension}`;
        return encodeURI(url);
    }
}
