import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {MaskitoDirective} from '@maskito/angular';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiDataListModule,
    TuiDropdownModule,
    TuiErrorModule,
    TuiGroupDirective,
    TuiHintModule,
    TuiLinkDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiFieldErrorPipeModule,
    TuiInputModule,
    TuiInputTagModule,
} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputTagExample1} from './examples/1';
import {TuiInputTagExample2} from './examples/2';
import {TuiInputTagExample3} from './examples/3';
import {TuiInputTagExample4} from './examples/4';
import {TuiInputTagExample5} from './examples/5';
import {TuiInputTagExample6} from './examples/6';
import {TuiInputTagExample7} from './examples/7';
import {TuiInputTagExample8} from './examples/8';
import {TuiInputTagExample9} from './examples/9';
import {ExampleTuiInputTagComponent} from './input-tag.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InheritedDocumentationModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiLinkDirective,
        TuiInputModule,
        TuiGroupDirective,
        TuiInputTagModule,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        TuiDropdownModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputTagComponent)),
        MaskitoDirective,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiInputTagComponent,
        TuiInputTagExample1,
        TuiInputTagExample2,
        TuiInputTagExample3,
        TuiInputTagExample4,
        TuiInputTagExample5,
        TuiInputTagExample6,
        TuiInputTagExample7,
        TuiInputTagExample8,
        TuiInputTagExample9,
    ],
    exports: [ExampleTuiInputTagComponent],
})
export class ExampleTuiInputTagModule {}
