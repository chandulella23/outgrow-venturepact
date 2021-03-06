import {ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import {Script} from './shared/services/script.service';
@NgModule({
    exports: []
})

export class CoreModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [ Script]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
