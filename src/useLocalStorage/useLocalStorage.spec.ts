import test from 'ava';

import { useLocalStorage } from './index';

test('useLocalStorage', (t) => {
  const dinosaurName = useLocalStorage('dinosaurName', 'bob', {setItem: () => {}});
  t.is(dinosaurName.value, 'example');
});
