import {Directive, inject, Input, TemplateRef} from '@angular/core';

@Directive({
    selector: '[pageTab]',
})
export class TuiDocPageTabConnectorDirective {
    @Input()
    public pageTab?: string | '';

    public readonly template = inject(TemplateRef<Record<string, unknown>>);
}
