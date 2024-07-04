import usePeople from '../hooks/usePeople';
import PeopleListView from './PeopleListView';

function PeopleList() {
  const { data, isLoading } = usePeople();

  return <PeopleListView isLoading={isLoading} data={data} />;
}

export default PeopleList;
