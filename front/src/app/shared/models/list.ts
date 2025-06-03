import { listLinks } from "./listLinks";
import { Meta } from "./meta";

export interface List {
  data: any,
  links: listLinks,
  meta: Meta
}

