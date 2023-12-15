import { NgModule } from '@angular/core';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { environment } from 'src/environments/environment';
import { AnalyticsComponent } from './analytics.component';

@NgModule({
    declarations: [AnalyticsComponent],
    imports: [
        GoogleTagManagerModule.forRoot({
            id: environment.gtmId,
        }),
    ],
    exports: [AnalyticsComponent],
})
export class AnalyticsModule {}
