import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    Component,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, combineLatest, map } from 'rxjs';
import { MaterialModule } from 'src/material/material.module';
import { Menu } from '../menu/models/menu';
import { MenuItem } from '../menu/models/menu-item';
import { CompressedMenuImagePipe } from '../menu/pipes/compressed-menu-image.pipe';
import { MenuProvider } from '../menu/services/menu-provider.service';
import { ResponsiveImageComponent } from '../responsive-image/responsive-image.component';

@Component({
    selector: 'app-preview',
    standalone: true,
    imports: [
        CommonModule,
        MaterialModule,
        ResponsiveImageComponent,
        CompressedMenuImagePipe,
    ],
    templateUrl: './preview.component.html',
    styleUrl: './preview.component.scss',
})
export class PreviewComponent implements AfterViewInit {
    protected item$: Observable<MenuItem | undefined> = combineLatest([
        this.route.paramMap.pipe(
            map((paramMap) => this.getRouteData(paramMap))
        ),
        this.menuProvider.menu$,
    ]).pipe(
        map(([routeData, menu]) =>
            this.getMenuItem(menu, routeData.sectionName, routeData.itemName)
        )
    );

    @ViewChild('imageDialog')
    protected imageDialog!: TemplateRef<HTMLElement>;

    public constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dialog: MatDialog,
        private menuProvider: MenuProvider
    ) {}

    public ngAfterViewInit(): void {
        this.item$.subscribe((item: MenuItem | undefined) => {
            if (!item) {
                this.navigateBack();
                return;
            }

            const dialogRef = this.dialog.open(this.imageDialog, {
                autoFocus: false,
                maxWidth: '100vw',
                maxHeight: '100vh',
                backdropClass: 'darker-backdrop',
            });

            dialogRef.afterClosed().subscribe(() => {
                this.navigateBack();
            });
        });
    }

    private navigateBack() {
        this.router.navigate(['', { outlets: { preview: null } }], {
            preserveFragment: true,
            replaceUrl: true,
        });
    }

    private getMenuItem(
        menu: Menu,
        sectionName: string | undefined,
        itemName: string | undefined
    ): MenuItem | undefined {
        const section = menu.sections.find((s) => s.caption === sectionName);
        const item = section?.items.find((i) => i.name === itemName);
        return item;
    }

    private getRouteData(paramMap: ParamMap) {
        return {
            itemName: paramMap.get('item') ?? undefined,
            sectionName: paramMap.get('section') ?? undefined,
        };
    }
}
