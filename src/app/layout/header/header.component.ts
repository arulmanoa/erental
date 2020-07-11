import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AccountModalComponent } from 'src/app/shared/modals/account-modal/account-modal.component';
import { LocationModalComponent } from 'src/app/shared/modals/location-modal/location-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modalOption: NgbModalOptions = {};
  isLogged: boolean = false;
  userName: any;
  constructor(
    private modalService: NgbModal,

  ) {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    
  }

  ngOnInit(): void {
    this.isLogged = false;
  }

  signin() {

    const modalRef = this.modalService.open(AccountModalComponent, this.modalOption);
    modalRef.result.then((result) => {
      if (result != "Modal Closed") {


      }
    });  
  }
  chooseLocation() {
    this.modalOption.size = 'xl'
    const modalRef = this.modalService.open(LocationModalComponent, this.modalOption);
    modalRef.result.then((result) => {
      if (result != "Modal Closed") {


      }
    });
  }
}
