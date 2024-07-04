// URLs are strings, but this lets us know that we can use the value of anything with this type to make a request
export type Url = string;

export type IsoDate = string;

export type SearchParameters = {
  search?: string;
  page?: number;
};

export type PaginationInfo = {
  count: number;
  next: string | null;
  previous: string | null;
};

export type PaginatedResult<T> = PaginationInfo & {
  results: T[];
};

// As an example, you can do the above same thing in a more C# style too, the end result is exactly the same.
// Type vs Interface is subject to a lot of discussion in the TS community but the trend seems to be that
// types are preferred unless you need the specific features of an interface.
export interface IPaginationInfo {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface IPaginatedResult<T> extends IPaginationInfo {
  results: T[];
}
