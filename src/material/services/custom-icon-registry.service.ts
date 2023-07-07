import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})
export class CustomIconRegistry {
    private readonly supportedNamespaces = ['category', 'social'];

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) {}

    public addResolver() {
        this.matIconRegistry.addSvgIconResolver((name, namespace) => {
            return this.resolve(namespace, name);
        });

        this.matIconRegistry.addSvgIconResolver(console.log as any);
    }

    private resolve(namespace: string, name: string): SafeResourceUrl | null {
        if (!this.supportedNamespaces.includes(namespace)) return null;

        return this.domSanitizer.bypassSecurityTrustResourceUrl(
            `assets/${namespace}/${name}.svg`
        );
    }
}
