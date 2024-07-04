import { IsoDate, PaginatedResult, Url } from '../../../types';

export type Person = {
  name: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: Url;
  films?: Url[];
  species?: Url[];
  vehicles?: Url[];
  starships?: Url[];
  created: IsoDate;
  edited: IsoDate;
  url: Url;
};

export type People = PaginatedResult<Person>;
