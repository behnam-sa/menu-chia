import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFa from '@angular/common/locales/fa';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactLinkComponent } from './contact-link/contact-link.component';

registerLocaleData(localeFa);

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        ContactLinkComponent,
        AnalyticsModule,
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'fa-IR',
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
