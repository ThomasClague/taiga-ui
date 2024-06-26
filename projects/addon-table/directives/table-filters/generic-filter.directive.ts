import {Directive, Input} from '@angular/core';
import {TUI_TRUE_HANDLER, tuiProvide} from '@taiga-ui/cdk';

import {AbstractTuiTableFilter} from './abstract-table-filter';

@Directive({
    selector: '[tuiGenericFilter]',
    providers: [tuiProvide(AbstractTuiTableFilter, TuiGenericFilterDirective)],
})
export class TuiGenericFilterDirective<T, G> extends AbstractTuiTableFilter<T, G> {
    @Input('tuiGenericFilter')
    public filter: (item: T, value: G) => boolean = TUI_TRUE_HANDLER;
}
