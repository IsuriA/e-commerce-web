import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ConfigService } from '../../services/config/config.service';
import { Observable } from 'rxjs';
import { DebtorFollowupService } from '../../services/debtor-followup.service';

@Component({
  selector: 'app-debtors',
  imports: [CommonModule, FormsModule],
  templateUrl: './debtors-followup.component.html',
  styleUrls: ['./debtors-followup.component.css']
})

export class DebtorsFollowupComponent implements OnInit {
  debtorFollowupService = inject(DebtorFollowupService);
  configService = inject(ConfigService);
  dueOrders$: Observable<any> = this.debtorFollowupService.getPaymentDueOrders();

  filteredDebtors = [];
  filterDebtorId: string = '';
  filterDueDate: string = '';

  ngOnInit() {
    // this.applyFilters();
  }

  // applyFilters() {
  //   this.filteredDebtors = this.debtors.filter((debtor) => {
  //     const matchesId = this.filterDebtorId
  //       ? debtor.debtorId.toString().includes(this.filterDebtorId)
  //       : true;

  //     const matchesDueDate = this.filterDueDate
  //       ? new Date(debtor.dueDate).toISOString().slice(0, 10) ===
  //       this.filterDueDate
  //       : true;

  //     return matchesId && matchesDueDate;
  //   });
  // }

  getPrefixedDebtorId(debtorId: number): string {
    return String(debtorId).padStart(3, '0')
  }
}
