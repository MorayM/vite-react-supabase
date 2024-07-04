import { useQuery } from '@tanstack/react-query';
import { getPerson } from '../services/people';

const usePerson = (searchTerm: number | string) =>
  useQuery({
    queryKey: ['person', searchTerm],
    queryFn: () => getPerson(searchTerm),
  });

export default usePerson;
