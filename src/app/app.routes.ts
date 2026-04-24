import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Resetpassword } from './features/auth/resetpassword/resetpassword';
import { Forgotpassword } from './features/auth/forgotpassword/forgotpassword';
import { UserType } from './features/auth/register/user-type/user-type';
import { CarOwner } from './features/auth/register/car-owner/car-owner';
import { GarageAdmin } from './features/auth/register/garage-admin/garage-admin';
import { CarDetails } from './features/car-owner/car-details/car-details';

export const routes: Routes = [
    {path: 'login',
        component: Login
    },
    {path: 'reset',
        component:Resetpassword
    },
    {path: 'forgot',
        component:Forgotpassword
    },
    // {
    //     path: 'car-owner',
    //     component: CarOwner

    // },
    // {
    //     path: 'garage-admin',
    //     component: GarageAdmin

    // },
    {
        path: 'car-details',
        component: CarDetails

    },
    {
        path:'register',
        loadChildren: () => import('./features/auth/register/user-type/user-type.routes').then(m => m.routes)
    }
];
