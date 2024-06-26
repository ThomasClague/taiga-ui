import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiSvgComponent} from '@taiga-ui/core';

import {TuiTabBarComponent} from './tab-bar.component';
import {TuiTabBarItemComponent} from './tab-bar-item.component';
import {TuiTabBarItemDirective} from './tab-bar-item.directive';

@NgModule({
    imports: [CommonModule, TuiSvgComponent, TuiRepeatTimesModule],
    declarations: [TuiTabBarComponent, TuiTabBarItemComponent, TuiTabBarItemDirective],
    exports: [TuiTabBarComponent, TuiTabBarItemComponent, TuiTabBarItemDirective],
})
export class TuiTabBarModule {}
