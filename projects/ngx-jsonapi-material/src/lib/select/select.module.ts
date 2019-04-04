/**
 * @license
 * Copyright Reyesoft All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatFormFieldModule, MatIconModule, MatDividerModule } from '@angular/material';
import { SelectComponent } from './select.component';
import { FilterPipe } from '../search-input/search-text.pipe';
import { JamSearchInputModule } from '../search-input/search-input.module';
import { JamOptionFooterComponent } from './option-footer.component';

@NgModule({
    imports: [
        JamSearchInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatDividerModule,
        MatFormFieldModule,
        MatSelectModule,
        CommonModule
    ],
    providers: [FilterPipe],
    declarations: [SelectComponent, JamOptionFooterComponent],
    exports: [ SelectComponent, JamOptionFooterComponent]
})
export class JamSelectModule {}
