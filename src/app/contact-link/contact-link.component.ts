import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from 'src/material/material.module';
import { SocialPlatform } from './models/social-platform';

@Component({
    selector: 'app-contact-link',
    templateUrl: './contact-link.component.html',
    styleUrls: ['./contact-link.component.scss'],
    imports: [CommonModule, MaterialModule],
    standalone: true,
})
export class ContactLinkComponent {
    @Input({ required: true })
    handle!: string;

    @Input({ required: true })
    platform!: SocialPlatform;

    constructor() {}

    public get link(): string {
        switch (this.platform) {
            case 'instagram':
                return `https://www.instagram.com/${this.handle}/`;
        }
    }

    public get platformName(): string {
        switch (this.platform) {
            case 'instagram':
                return 'Instagram';
        }
    }
}
