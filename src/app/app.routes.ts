import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)
    },
    {
        path: 'brands',
        loadComponent: () => import('./brands/brands.component').then(mod => mod.BrandsComponent)
    },
    {
        path: 'products',
        loadComponent: () => import('./products/products.component').then(mod => mod.ProductsComponent)
    },
    {
        path: 'contact-us',
        loadComponent: () => import('./contact-us/contact-us.component').then(mod => mod.ContactUsComponent)
    },
    {
        path: 'about-us',
        loadComponent: () => import('./about-us/about-us.component').then(mod => mod.AboutUsComponent)
    },
    {
        path: 'admin-dashboard',
        loadComponent: () => import('./admin-dashboard/admin-dashboard.component').then(mod => mod.AdminDashboardComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import('./cart/cart.component').then(mod => mod.CartComponent)
    },
    {
        path: 'signin',
        loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./register/register.component').then(mod => mod.RegisterComponent)
    },
    {
        path: 'product-management',
        loadComponent: () => import('./product-management/product-management.component').then(mod => mod.ProductManagementComponent)
    },
    {
        path: 'supplier-management',
        loadComponent: () => import('./supplier-management/supplier-management.component').then(mod => mod.SupplierManagementComponent)
    },
    {
        path: 'debtors-followup',
        loadComponent: () => import('./debtors-followup/debtors-followup.component').then(mod => mod.DebtorsFollowupComponent)
    },
    {
        path: 'checkout',
        loadComponent: () => import('./checkout/checkout.component').then(mod => mod.CheckoutComponent)
    }

];
