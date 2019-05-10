import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriveService } from '../../service/serive.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router,public api:SeriveService,private modalService: NgbModal) { }

  ngOnInit() {
  }

  openVerticallyCentered(content3) {
    this.modalService.open(content3, { centered: true,size: 'lg'  });
  }

}
