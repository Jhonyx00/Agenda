import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  @Input() totalContacts: number = 0;
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  private pageSize = 10;

  get pages(): number[] {
    const totalPages = Math.ceil(this.totalContacts / this.pageSize);
    const pagesArray = [];

    for (let page = 1; page <= totalPages; page++) {
      pagesArray.push(page);
    }

    return pagesArray;
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }

  nextPage(): void {
    const totalPages = Math.ceil(this.totalContacts / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }
}
