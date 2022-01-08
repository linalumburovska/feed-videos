import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Athlete } from 'src/app/models/athlete.interface';

@Component({
  selector: 'app-modal-athlete-information',
  templateUrl: './modal-athlete-information.component.html',
  styleUrls: ['./modal-athlete-information.component.scss']
})
export class ModalAthleteInformationComponent implements OnInit {

  @Input() athleteInformation: Athlete;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.dismissAll();
  }

}
