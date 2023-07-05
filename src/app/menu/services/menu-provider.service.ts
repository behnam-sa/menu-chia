import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, defer, map, shareReplay } from 'rxjs';
import { parse } from 'yaml';
import { Menu } from '../models/menu';

@Injectable({
    providedIn: 'root',
})
export class MenuProvider {
    public menu$ = defer(() => this.getMenu()).pipe(shareReplay(1));

    constructor(private http: HttpClient) {}

    private getMenu(): Observable<Menu> {
        return this.http
            .get('assets/menu.yaml', { responseType: 'text' })
            .pipe(map((text) => parse(text)));
    }
}
