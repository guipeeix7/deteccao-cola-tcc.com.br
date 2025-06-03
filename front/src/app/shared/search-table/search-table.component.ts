import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss']
})
export class SearchTableComponent {
  private item :string = ''
  @Output() searchEmitter = new EventEmitter<string>();

  searchDatabase(query:string){
    this.searchEmitter.emit(query)
  }

}
