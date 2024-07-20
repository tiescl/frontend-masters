import { useQuery } from '@tanstack/react-query';
import fetchBreedList from '../utils/fetchBreedList';

export default function useBreedList(animal) {
  var results = useQuery({
    queryKey: ['breeds', animal],
    queryFn: fetchBreedList
  });

  return [results?.data?.breeds ?? [], results.status];
}
