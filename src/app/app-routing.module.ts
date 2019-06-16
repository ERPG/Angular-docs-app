import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesModule } from './features/features.module';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/features.module').then(m => m.FeaturesModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
