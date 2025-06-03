import { EventEmitter } from '@angular/core';
import { List } from '../models/list';

export interface BaseSelectableList {
 /**
  * Any base list should implement
  * - method to get data
  * - method to page data
  * - method to un-select data
  * - method to SelectData
  * - method to charge the current selected items and display into the list
  * @param query
  * @returns
  */

  selectedListEmitter :EventEmitter<number[]>; //Emitter to father component selected items
  itemSelectedList    : any[];  //Selected items from database and also new ones

  ListData            :List;    //List o data comming from database
  page                :number;  //Actual List page
  query               :string;  //Name of item
  namedRoute          :string;  //Route to retrive data
  itemName            :string;  //Name of the actual searchable item in database table

  /**
   * Filter from name of desired item
   */
  filterQuery : (query: string) => void;

  /**
   * Paginate throught the database
   * @param page current page
   * @returns
   */
  changePage  : (page: number) => void;


  /**
   * Communicate to fahte component the current selected items
   * @param selecteds
   * @returns
   */
  emitSelections : (selecteds:[]) => void;

  /**
   * Toggle selected items in list
   * @param newItem
   * @returns
   */
  toggleSelection : (newItem: any) => void;

  /**
   * Communicate to backend in order to get the data array[]
   * @param page
   * @param query
   * @returns
   */
  getData : (page:number , query:string) => void;
}
