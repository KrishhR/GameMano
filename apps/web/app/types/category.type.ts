export type Category = {
  name: string;
  slug: string;
  url: string;
};

export interface CategoryFilterI {
  name: string;
  slug: string;
  // change: boolean;
}

export interface SortingI {}

export interface filterI {
  categoryFilter: CategoryFilterI[];
  sorting: SortingI;
}
