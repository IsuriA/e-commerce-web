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
    { name: '', logo: 'images/sony.png' },
    { name: '', logo: 'images/samsung.png' },
    { name: '', logo: 'images/panasonic.jpg' },
    { name: '', logo: 'images/lg.png' },
    { name: '', logo: 'images/smeg.png' },
    { name: '', logo: 'images/dell.png' },
    { name: '', logo: 'images/lenovo.png' },
    { name: '', logo: 'images/huawei.png' },
    { name: '', logo: 'images/hitachi.png' },
    { name: '', logo: 'images/philips.png' },
    { name: '', logo: 'images/ghd.png' },
    { name: '', logo: 'images/lange.png' },
    { name: '', logo: 'images/tcl.png' },
    { name: '', logo: 'images/jbl.png' }
  ];
}
