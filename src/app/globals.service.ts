import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {

  constructor() { }

  isLoading : boolean = false;

  isError : boolean = false;
  error : any;

  errorThrown(error) {
    this.error = error;
    this.isError = true;
  }
}
