import { listLinks } from "./listLinks";
import { Meta } from "./meta";

export interface List {
  data: any,
  links: listLinks,
  meta: Meta
  // current_page: number,
  // data: any,
  // first_page_url: string,
  // from: number,
  // last_page: number,
  // last_page_url: string,
  // links: listLinks[],
  // next_page_url: string,
  // path: string,
  // per_page: number,
  // prev_page_url: string,
  // to: number,
  // total: number,
}

