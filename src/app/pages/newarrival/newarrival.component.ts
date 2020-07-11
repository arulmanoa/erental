import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AccountModalComponent } from 'src/app/shared/modals/account-modal/account-modal.component';

@Component({
  selector: 'app-newarrival',
  templateUrl: './newarrival.component.html',
  styleUrls: ['./newarrival.component.scss']
})
export class NewarrivalComponent implements OnInit {
  modalOption: NgbModalOptions = {};
  constructor(
    private modalService: NgbModal,

  ) {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
  }

  ngOnInit(): void {
  }

  new() {

    const modalRef = this.modalService.open(AccountModalComponent, this.modalOption);

    modalRef.result.then((result) => {
      if (result != "Modal Closed") {

      }
    });
  }
}
