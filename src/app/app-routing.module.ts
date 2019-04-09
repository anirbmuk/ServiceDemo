import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './pages/one/one.component';
import { TwoComponent } from './pages/two/two.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/one', pathMatch: 'full' },
    { path: 'one', component: OneComponent },
    { path: 'two', component: TwoComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
