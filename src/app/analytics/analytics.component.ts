import { Component, OnInit } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent implements OnInit {
    constructor(private gtmService: GoogleTagManagerService) {}

    public ngOnInit(): void {
        this.gtmService.addGtmToDom();
    }
}
