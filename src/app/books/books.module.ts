import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book.component';
import { BooksComponent } from './components/books.component';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../../../projects/ngx-jsonapi-material/src/lib/material.module';
import { BookEditComponent } from './components/book-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JamSelectModule, JamSubmitModule, JamSearchInputModule, JamFloatingFiltersModule, JamTopWarningModule, JamDeleteConfirmationModule } from 'ngx-jsonapi-material';
import { JamFloatingButtonModule } from 'projects/ngx-jsonapi-material/src/public_api';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        BooksRoutingModule,
        JamSelectModule,
        JamFloatingButtonModule,
        JamFloatingFiltersModule,
        JamSearchInputModule,
        JamDeleteConfirmationModule,
        JamTopWarningModule,
        JamSubmitModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
    ],
    entryComponents: [BookEditComponent],
    declarations: [BookComponent, BookEditComponent, BooksComponent]
})
export class BooksModule {}
