import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {

  brands = [
    { name: 'Philips', logo: 'assets/brands/philips.png' },
    { name: 'Samsung', logo: 'assets/brands/samsung.png' },
    { name: 'Panasonic', logo: 'assets/brands/panasonic.png' },
    { name: 'LG', logo: 'assets/brands/lg.png' },
    { name: 'Sony', logo: 'assets/brands/sony.png' },
    { name: 'Siemens', logo: 'assets/brands/siemens.png' },
    { name: 'Dell', logo: 'assets/brands/dell.png' },
    { name: 'Huawei', logo: 'assets/brands/huawei.png' }
  ];
}
