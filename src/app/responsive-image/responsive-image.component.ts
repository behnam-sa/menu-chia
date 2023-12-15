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
    protected readonly mediaTypes = [
        { type: 'image/avif', extension: 'avif' },
        { type: 'image/webp', extension: 'webp' },
        { type: 'image/jpeg', extension: 'jpg' },
    ];

    @Input({ required: true })
    public path!: string;

    @Input()
    public alt?: string;
}
