import { useSelector } from 'react-redux';

import { RootState } from '@/modules';

export default function yuseTodos() {
  const todos = useSelector((state: RootState) => state.todos);
  return todos;
}
