import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  @Input() orderBy: string;
  @Input() orderType: string;
  @Output() queryEvt = new EventEmitter<string>();
  @Output() orderEvt = new EventEmitter();

  handleQuery(query: string) {
    this.queryEvt.emit(query);
  }
  handleSort(order: object) {
    this.orderEvt.emit(order);
  }

  constructor() { }

  ngOnInit() {}
}
