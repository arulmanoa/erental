import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.component.html',
  styleUrls: ['./account-modal.component.scss']
})
export class AccountModalComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal,


  ) { }

  ngOnInit(): void {
  }

  close(){
    this.activeModal.close('Modal Closed');
  }

}
