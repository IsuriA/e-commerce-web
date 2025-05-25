import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-seller-auth',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class SellerAuthComponent {
  products = [
    { name: 'Samsunng 43 Inch Smart TV', price: 128000, image: 'images/tv1.jpg', category: 'Home Appliances' },
    { name: 'Panasonic 55 Inch UHD Smart TV', price: 240000, image: 'images/tv2.jpg', category: 'Home Appliances' },
    { name: 'LG 43 Inch UHD 4K Smart TV', price: 210000, image: 'images/tv3.jpg', category: 'Home Appliances' },
    { name: 'LG 32 Inch LED Smart TV', price: 295000, image: 'images/tv4.jpg', category: 'Home Appliances' },

    { name: 'Panasonic 7KG Semi Auto Washing Machine', price: 220000, image: 'images/wm1.jpg', category: 'Home Appliances' },
    { name: 'Panasonic 13KG Fully Automatic Bloomwash Top Loader With Heater ', price: 655000, image: 'images/wm2.jpg', category: 'Home Appliances' },
    { name: 'LG 11KG Smart Inverter Top Load Washing Machine', price: 240000, image: 'images/wm3.jpg', category: 'Home Appliances' },
    { name: 'LG 13KG Fully Auto Washing Machine', price: 480000, image: 'images/wm4.jpg', category: 'Home Appliances' },

    { name: 'PHILIPS  2L Rice Cooker with Steamer ', price: 9000, image: 'images/rc1.jpg', category: 'Kitchen Appliances' },
    { name: 'Panasonic 1.0L Rice Cooker', price: 12000, image: 'images/rc2.jpg', category: 'Kitchen Appliances' },
    { name: 'PHILIPS 2.2L Rice Cooker', price: 6900, image: 'images/rc3.jpg', category: 'Kitchen Appliances' },
    { name: 'Panasonic  1.5L Rice Cooker', price: 5600, image: 'images/rc4.jpg', category: 'Kitchen Appliances' },

    { name: 'PHILIPS Digital Crisp Air Fryer 5L', price: 36000, image: 'images/af1.jpg', category: 'Kitchen Appliances' },
    { name: 'Samsung 5L Air Fryer', price: 32000, image: 'images/af2.jpg', category: 'Kitchen Appliances' },
    { name: 'Samsung Duocrisp Air Fryer 9L ', price: 54000, image: 'images/af3.jpg', category: 'Kitchen Appliances' },
    { name: 'Panasonic 5.7L Air Fryer', price: 36000, image: 'images/af4.jpg', category: "Kitchen Appliances }," },

    { name: 'Panasonic 7 Speeds Hand Mixer With Bowl Egg Beater', price: 16000, image: 'images/b1.jpg', category: 'Kitchen Appliances' },
    { name: 'SMEG Mixer with Bowl 3.5L', price: 43000, image: 'images/b2.jpg', category: 'Kitchen Appliances' },
    { name: 'PHILIPS Stand Mixer 4L', price: 12000, image: 'images/b3.jpg', category: 'Kitchen Appliances' },
    { name: 'PHILIPS Stand Mixer 6L', price: 18000, image: 'images/b4.jpg', category: 'Kitchen Appliances' },

    { name: 'SMEG Inverter Double Door Refrigerator', price: 230000, image: 'images/f1.jpg', category: 'Kitchen Appliances' },
    { name: 'Samsung Refrigerator Inverter Technology', price: 112000, image: 'images/f2.jpg', category: 'Kitchen Appliances' },
    { name: 'Panasonic Direct Cool Refrigerator Double Door', price: 80000, image: 'images/f3.jpg', category: 'Kitchen Appliances' },
    { name: 'LG Refrigerator Inverter Technology', price: 203000, image: 'images/f4.jpg', category: "Kitchen Appliances }," },

    { name: 'PHILIPS Daily Collection Coffee maker ', price: 20500, image: 'images/cm1.jpg', category: 'Kitchen Appliances' },
    { name: 'Panasonic Espresso Coffee Maker', price: 8000, image: 'images/cm2.jpg', category: 'Kitchen Appliances' },
    { name: 'LG Multifunctional Espresso Machine', price: 10500, image: 'images/cm3.jpg', category: 'Kitchen Appliances' },
    { name: 'SMEG Coffee Maker', price: 35000, image: 'images/cm4.jpg', category: 'Kitchen Appliances' },

    { name: 'SMEG Two Slice Pop Up Toaster', price: 8500, image: 'images/t1.jpg', category: 'Kitchen Appliances' },
    { name: 'PHILIPS Toaster', price: 4900, image: 'images/t2.jpg', category: 'Kitchen Appliances' },
    { name: 'Pansonic Stainless Steel 2 Slice Toaster', price: 12000, image: 'images/t3.jpg', category: 'Kitchen Appliances' },
    { name: 'LG Two Slice  Pop Up Toaster', price: 8000, image: 'images/t4.jpg', category: 'Kitchen Appliances' },

    { name: 'PHILIPS Electric Kettle', price: 10300, image: 'images/ek1.jpg', category: 'Kitchen Appliances' },
    { name: 'Panasonic Electric Cordless Kettle Heater', price: 9900, image: 'images/ek2.jpg', category: 'Kitchen Appliances' },
    { name: 'SMEG Automatic 1.8 Litre Electric Kettle', price: 18000, image: 'images/ek3.jpg', category: 'Kitchen Appliances' },
    { name: 'Panasonic Coddles Electric Kettle Heater', price: 4300, image: 'images/ek4.jpg', category: 'Kitchen Appliances' },

    { name: 'LG Speed 16 Inch Stand Fan 5 Blade', price: 21500, image: 'images/fan1.jpg', category: 'Home Appliances' },
    { name: 'Samsung  Stand Fan ', price: 18000, image: 'images/fan2.jpg', category: 'Home Appliances' },
    { name: 'Pansonic  Stand Fan ', price: 20100, image: 'images/fan3.jpg', category: 'Home Appliances' },
    { name: 'PHILIPS  Stand Fan ', price: 19500, image: 'images/fan4.jpg', category: 'Home Appliances' },

    { name: 'LG Inverter air conditioner ', price: 200800, image: 'images/ac1.jpg', category: 'Home Appliances' },
    { name: 'Samsung Xtreme Inverter', price: 430800, image: 'images/ac2.jpg', category: 'Home Appliances' },
    { name: 'LG Air Conditioners Inverter & Non Inverter', price: 350000, image: 'images/ac3.jpg', category: 'Home Appliances' },
    { name: 'Hitachi Inverter Air Conditioner ', price: 225000, image: 'images/ac4.jpg', category: 'Home Appliances' },

    { name: 'PHILIPS Professional Foldable Hair Dryer', price: 4300, image: 'images/hd1.jpg', category: 'Home Appliances' },
    { name: 'Panasonic Professional Foldable Hair Dryer With Speed And Temperature Settings', price: 8500, image: 'images/hd2.jpg', category: 'Home Appliances' },
    { name: 'Samsung Foldable Hair Dryer', price: 8000, image: 'images/hd3.jpg', category: 'Home Appliances' },
    { name: 'Hitachi Foldable Hair Dryer', price: 4600, image: 'images/hd4.jpg', category: 'Home Appliances' },

    { name: 'Lange Portable Hair Iron Hair Straightener', price: 7500, image: 'images/hi1.jpg', category: 'Home Appliances' },
    { name: 'Panasonic Iron Hair Straightener', price: 8000, image: 'images/hi2.jpg', category: 'Home Appliances' },
    { name: 'GND Iron Hair Straightener', price: 4800, image: 'images/hi3.jpg', category: 'Home Appliances' },
    { name: 'Hitachi Ceramic Hair Straightening Flat Iron', price: 5500, image: 'images/hi4.jpg', category: 'Home Appliances' },

    { name: 'Samsung Digital Clock ', price: 4500, image: 'images/ec1.jpg', category: 'Home Appliances' },
    { name: 'Dell Mini Electronic Car Clock ', price: 4300, image: 'images/ec2.jpg', category: 'Home Appliances' },
    { name: 'Huawei Electronic Clock ', price: 3500, image: 'images/ec3.jpg', category: 'Home Appliances' },
    { name: 'Panasonic Alarm Clock', price: 5800, image: 'images/ec4.jpg', category: 'Home Appliances' },

    { name: 'Dell Wireless Charger', price: 3200, image: 'images/wc1.jpg', category: 'Mobile Accessories' },
    { name: 'Panasonic Wireless Charger', price: 4100, image: 'images/wc2.jpg', category: 'Mobile Accessories' },
    { name: 'Hitachi Wireless Charger', price: 5800, image: 'images/wc3.jpg', category: 'Mobile Accessories' },
    { name: 'TCL Wireless Charger', price: 4550, image: 'images/wc4.jpg', category: 'Mobile Accessories' },

    { name: 'Samsung 10 Inch Selfie LED Ring Light with 7ft Stand Tripod and Adjustable Phone Holder', price: 3500, image: 'images/rl1.jpg', category: 'Mobile Accessories' },
    { name: 'PHILIPS 12 Inch Selfie LED Ring Light', price: 5800, image: 'images/rl2.jpg', category: 'Mobile Accessories' },
    { name: 'TCL 14.5 Inch Selfie LED Ring Light', price: 4300, image: 'images/rl3.jpg', category: 'Mobile Accessories' },
    { name: 'Hitachi Table Light', price: 5500, image: 'images/l1.jpg', category: 'Mobile Accessories' },

    { name: 'TCL Wireless Headband ', price: 8000, image: 'images/headset1.jpg', category: 'Mobile Accessories' },
    { name: 'Samsung Wireless Headband ', price: 6300, image: 'images/headset2.jpg', category: 'Mobile Accessories' },
    { name: 'Dell Wireless Headband ', price: 15500, image: 'images/headset3.jpg', category: 'Mobile Accessories' },
    { name: 'Huawei Wireless Headband ', price: 8200, image: 'images/headset4.jpg', category: 'Mobile Accessories' },
    { name: 'JBL Wireless Headband ', price: 18300, image: 'images/headset5.jpg', category: 'Mobile Accessories' },

    { name: 'Samsung Earbuds', price: 10300, image: 'images/earbuds1.jpg', category: 'Mobile Accessories' },
    { name: 'Dell Earbuds', price: 13500, image: 'images/earbuds2.jpg', category: 'Mobile Accessories' },
    { name: 'SONY Earbuds', price: 8600, image: 'images/earbuds3.jpg', category: 'Mobile Accessories' },
    { name: 'TCL Earbuds', price: 9300, image: 'images/earbuds4.jpg', category: 'Mobile Accessories' },
    { name: 'JBL Earbuds', price: 12300, image: 'images/earbuds5.jpg', category: 'Mobile Accessories' },

    { name: 'Dell 10000mAh Power Bank', price: 6500, image: 'images/pb1.jpg', category: 'Mobile Accessories' },
    { name: 'Hitachi 10400mAh Power Bank', price: 8000, image: 'images/pb2.jpg', category: 'Mobile Accessories' },
    { name: 'TCL Portable Charger ', price: 4300, image: 'images/pb3.jpg', category: 'Mobile Accessories' },
    { name: 'Hitachi 10000mAh Super Fast Power Bank ', price: 7500, image: 'images/pb4.jpg', category: 'Mobile Accessories' },

    { name: 'Panasonic Phone Holder', price: 2500, image: 'images/ph1.jpg', category: 'Mobile Accessories' },
    { name: 'Samsung Phone Holder', price: 4300, image: 'images/ph2.jpg', category: 'Mobile Accessories' },
    { name: 'Hitachi Phone Holder', price: 3500, image: 'images/ph3.jpg', category: 'Mobile Accessories' },
    { name: 'Dell Phone Holder', price: 2800, image: 'images/ph4.jpg', category: 'Mobile Accessories' },

    { name: 'Hitachi Earphones 3.5mm Connector with Mic', price: 2300, image: 'images/headphone1.jpg', category: 'Mobile Accessories' },
    { name: 'DEll Earphones 3.8mm Connector with Mic', price: 300, image: 'images/headphone2.jpg', category: 'Mobile Accessories' },
    { name: 'TCL 3.5mm Sports Handsfree', price: 2100, image: 'images/headphone3.jpg', category: 'Mobile Accessories' },
    { name: 'SONY 3.6mm Sports Handsfree', price: 4450, image: 'images/headphone4.jpg', category: 'Mobile Accessories' },

    { name: 'JBL Bluetooth Speaker ', price: 50000, image: 'images/jbl1.jpg', category: 'Mobile Accessories' },
    { name: 'JBL Portable Bluetooth Speaker with Radio USB rechargeable Wireless', price: 188500, image: 'images/jbl2.jpg', category: 'Mobile Accessories' },
  ];
}
