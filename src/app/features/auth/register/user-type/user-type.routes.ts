import { Routes } from "@angular/router"
import { UserType } from "./user-type"
import { CarOwner } from "../car-owner/car-owner"
import { GarageAdmin } from "../garage-admin/garage-admin"
import { VerifyOTP } from "../veryfyOTP/verify-otp"

export const routes: Routes = [
    // Load a specific child by default when navigating to parent
    // Add an empty path redirect

    {path: '',
        component: UserType,
        children: [
            {path: 'car-owner', component: CarOwner },
            {path: 'garage-admin', component: GarageAdmin},
            {path: 'verifyotp',component: VerifyOTP}
        ]

    }
]