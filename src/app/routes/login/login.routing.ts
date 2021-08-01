import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

export const routerModule: ModuleWithProviders = RouterModule.forChild(appRoutes);
