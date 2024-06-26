import {inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, WINDOW} from '@ng-web-apis/common';
import {BehaviorSubject} from 'rxjs';

import {TUI_DARK_THEME, TUI_DARK_THEME_KEY} from './theme-dark.options';

@Injectable({
    providedIn: 'root',
})
export class TuiThemeDarkService extends BehaviorSubject<boolean> {
    private readonly storage = inject(LOCAL_STORAGE);
    private readonly key = inject(TUI_DARK_THEME_KEY);

    constructor() {
        super(isDark(inject(LOCAL_STORAGE), inject(TUI_DARK_THEME_KEY), inject(WINDOW)));
    }

    public override next(dark: boolean): void {
        this.storage.setItem(this.key, String(dark));
        super.next(dark);
    }

    public toggle(): void {
        this.next(!this.value);
    }
}

function isDark(storage: Storage, key: string, window: Window): boolean {
    const fallback =
        window.matchMedia('(prefers-color-scheme: dark)').matches ||
        inject(TUI_DARK_THEME);

    return storage.getItem(key) === 'true' || (storage.getItem(key) === null && fallback);
}
