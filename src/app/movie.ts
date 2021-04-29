export interface Movie {
  title?: string;
  adult?: boolean;
  release_date?: string;
  vote_average?: number;
  overview?: string;
  poster_path?: string; //returns path to poster; full url: https://image.tmdb.org/t/p/original/[poster_path];
  onFavorites?: boolean;
  [x: string]: any;  
}