import { EventEmitter } from "@angular/core";

export interface BaseItem {
  ItemData: any; //item data
  selectedItems:number[]; //List of selected items, to compare to
  emmitItemSelect : EventEmitter<any>;//Emmit selection of item
  clicked : boolean; //If item is already selected

  /**
   * Called on component is initialized
   * @returns void
   */
  ngOnInit : () => void;
  /**
   * Toggle current item status
   * @returns void
   */
  toggleClickedState: () => void;

  /**
   * Toggle item state to selected or de-selected and emit it to father component
   * @param $e evente from UI
   * @returns void
   */
  selectItem : ($e) => void;
}
