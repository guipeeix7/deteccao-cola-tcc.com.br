import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortsHelperService {

  constructor() { }

  binarySearch(
    arr: number[],
    target: number,
    left: number = 0,
    right: number = arr.length - 1
  ): number {
    if (left > right) {
      return -1; // Base case: target not found
    }

    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // Base case: target found
    } else if (arr[mid] < target) {
      return this.binarySearch(arr, target, mid + 1, right); // Search the right half
    } else {
      return this.binarySearch(arr, target, left, mid - 1); // Search the left half
    }
  }


}
