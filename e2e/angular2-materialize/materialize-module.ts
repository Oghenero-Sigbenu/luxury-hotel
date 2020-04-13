import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeDirective } from './materialize-directive';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        MaterializeDirective
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        MaterializeDirective
    ]
})
export class MaterializeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MaterializeModule
        };
    }
}
