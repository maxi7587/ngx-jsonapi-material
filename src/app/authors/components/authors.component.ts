import { Component } from '@angular/core';
import { DocumentCollection } from 'ngx-jsonapi';
import { AuthorsService, Author } from './../authors.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'demo-authors',
    templateUrl: './authors.component.html'
})
export class AuthorsComponent {
    public authors: DocumentCollection<Author>;

    public constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authorsService: AuthorsService
    ) {
        route.queryParams.subscribe(({ page }) => {
            authorsService
                .all({
                    // include: ['books', 'photos'],
                    sort: ['name'],
                    page: { number: page || 1 },
                    ttl: 3600
                })
                .subscribe(
                    authors => {
                        this.authors = authors;
                        console.info('success authors controller', authors, 'page', page || 1, authors.page.number);
                    },
                    error => console.error('Could not load authors :(', error)
                );
        });
    }

    public goTo(event): void {
        console.log('page?', event.pageIndex);
        this.router.navigate(['.'], { queryParams: { page: event.pageIndex }, relativeTo: this.route });
    }
}
