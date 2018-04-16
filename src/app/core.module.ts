import {ScriptService} from './shared/services/script.service';
import {ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
    
})

export class CoreModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [ ScriptService]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
