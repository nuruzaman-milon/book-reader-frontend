export interface IBooks {
  payload: IBook[]
} 
export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publication: string;
  payload?: []
} 