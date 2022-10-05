import { IPost } from "./Post";

export interface ResponseListPost {
  pagination: IPagination;
  listPost: IPost[];
}

export interface IPagination {
  total: number;
  limit: number;
  offset: number;
}
