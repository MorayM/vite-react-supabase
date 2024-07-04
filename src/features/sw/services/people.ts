import api from '../../../services/api';
import { encode } from '../../../utils/queryString';
import { SearchParameters } from '../../../types';
import { People, Person } from '../types';

/**
 * Get information about a single person
 * @param searchTerm The person to search for - either an ID or a full URL
 */
export const getPerson = async (searchTerm: number | string) => {
  const url = typeof searchTerm === 'string' ? searchTerm : `https://swapi.dev/api/people/${searchTerm}/`;
  const { data } = await api.get<Person>(url);
  return data;
};

export const getPeople = async (searchTerm?: SearchParameters) => {
  const url = `https://swapi.dev/api/people/${encode(searchTerm)}`;
  const { data } = await api.get<People>(url);
  return data;
};
