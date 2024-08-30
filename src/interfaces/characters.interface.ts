export interface Character{
  id: number
  image: string
  name: string
  species: string
  location: {
    name: string
  };
}

export interface apiReturnRickandMorty{
  data: {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: Character[];
  };
}