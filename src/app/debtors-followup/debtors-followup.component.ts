import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-debtors',
  imports: [CommonModule, FormsModule],
  templateUrl: './debtors-followup.component.html',
  styleUrls: ['./debtors-followup.component.css']
})

export class DebtorsFollowupComponent implements OnInit {
  debtors = [
    {
      debtorId: 1,
      name: 'Nimal Perera',
      purchaseDate: new Date('2025-06-01'),
      totalAmount: 50000,
      advancedPayment: 10000,
      dueDate: new Date('2025-06-15'),
      paidAmount: 20000
    },
    {
      debtorId: 2,
      name: 'Chamod Silva',
      purchaseDate: new Date('2025-06-01'),
      totalAmount: 550000,
      advancedPayment: 55000,
      dueDate: new Date('2025-06-15'),
      paidAmount: 100000
    },
    {
      debtorId: 3,
      name: 'Vajira sanjaya',
      purchaseDate: new Date('2025-06-01'),
      totalAmount: 190000,
      advancedPayment: 19000,
      dueDate: new Date('2025-06-30'),
      paidAmount: 25000
    },
    {
      debtorId: 4,
      name: 'Amali Tharanga',
      purchaseDate: new Date('2025-06-01'),
      totalAmount: 500000,
      advancedPayment: 50000,
      dueDate: new Date('2025-06-20'),
      paidAmount: 28000
    },
    {
      debtorId: 5,
      name: 'Gayan aththanayaka',
      purchaseDate: new Date('2025-06-01'),
      totalAmount: 6000000,
      advancedPayment: 60000,
      dueDate: new Date('2025-06-30'),
      paidAmount: 200000
    }
  ];

  filteredDebtors = [...this.debtors];
  filterDebtorId: string = '';
  filterDueDate: string = '';

  ngOnInit() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredDebtors = this.debtors.filter((debtor) => {
      const matchesId = this.filterDebtorId
        ? debtor.debtorId.toString().includes(this.filterDebtorId)
        : true;

      const matchesDueDate = this.filterDueDate
        ? new Date(debtor.dueDate).toISOString().slice(0, 10) ===
        this.filterDueDate
        : true;

      return matchesId && matchesDueDate;
    });
  }
}
