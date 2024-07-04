import { useQuery } from '@tanstack/react-query';
import { SearchParameters } from '../../../types';
import { getPeople } from '../services/people';

const usePeople = (searchTerm?: SearchParameters) =>
  useQuery({
    queryKey: ['people', searchTerm],
    queryFn: () => getPeople(searchTerm),
  });

export default usePeople;
