import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  // Sales by Category (Pie Chart)
  categorySales = [
    { name: 'Lighting', value: 150000 },
    { name: 'Home Appliances', value: 250000 },
    { name: 'Mobile Devices', value: 180000 },
    { name: 'Kitchen', value: 120000 }
  ];

  // Monthly Sales (Bar Chart)
  monthlySales = [
    { name: 'Jan', value: 200000 },
    { name: 'Feb', value: 180000 },
    { name: 'Mar', value: 250000 },
    { name: 'Apr', value: 300000 },
    { name: 'May', value: 220000 }
  ];

  view: [number, number] = [700, 400];

  // Chart Options
  showLegend = true;
  showLabels = true;
  animations = true;
  colorScheme = { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] };
}

