import { Observable } from "rxjs";
import { List } from "../models/list";

export interface BaseUpdate {
  cursoId:number;
  loading : boolean;
  disabled : boolean;
  urlFragment : string
  searchableParameterName : string
  dataFromServer : any;
  dataId : number;
  page:number;
  query:string;

  getData : (resp) => void;

  refreshData : (page:number, query:string) => Observable<List>;

  ngOnInit: () => void;

  toggleSubmit : () => void;

  onSubmit : () => void

}
