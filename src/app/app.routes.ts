import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(mod => mod.HomeComponent)
    },
    {
        path: 'brands',
        loadComponent: () => import('./components/brands/brands.component').then(mod => mod.BrandsComponent)
    },
    {
        path: 'products',
        loadComponent: () => import('./components/products/products.component').then(mod => mod.ProductsComponent)
    },
    {
        path: 'contact-us',
        loadComponent: () => import('./components/contact-us/contact-us.component').then(mod => mod.ContactUsComponent)
    },
    {
        path: 'about-us',
        loadComponent: () => import('./components/about-us/about-us.component').then(mod => mod.AboutUsComponent)
    },
    {
        path: 'admin-dashboard',
        loadComponent: () => import('./components/admin-dashboard/admin-dashboard.component').then(mod => mod.AdminDashboardComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import('./components/cart/cart.component').then(mod => mod.CartComponent)
    },
    {
        path: 'signin',
        loadComponent: () => import('./components/login/login.component').then(mod => mod.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./components/register/register.component').then(mod => mod.RegisterComponent)
    },
    {
        path: 'product-management',
        loadComponent: () => import('./components/product-management/product-management.component').then(mod => mod.ProductManagementComponent)
    },
    {
        path: 'supplier-management',
        loadComponent: () => import('./components/supplier-management/supplier-management.component').then(mod => mod.SupplierManagementComponent)
    },
    {
        path: 'debtors-followup',
        loadComponent: () => import('./components/debtors-followup/debtors-followup.component').then(mod => mod.DebtorsFollowupComponent)
    },
    {
        path: 'checkout',
        loadComponent: () => import('./components/checkout/checkout.component').then(mod => mod.CheckoutComponent)
    },
    
];
