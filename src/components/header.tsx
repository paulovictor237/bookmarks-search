import { VITE_DEV_MODE } from '@/constants';
import { chromeSearch } from '@/repositories/search';
import { ModeToggle } from './mode-toggle';
import { Input } from './ui/input';
import { FC, useDeferredValue, useEffect, useRef, useState } from 'react';
import exemple from '@/assets/exemple.json';
import { XCircle } from 'lucide-react';
import { Button } from './ui/button';

export type Props = {
  setSearch: (data: chrome.bookmarks.BookmarkTreeNode[]) => void;
};

export const SearchHeader: FC<Props> = ({ setSearch }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [search, setSearchState] = useState('');
  const debounce = useDeferredValue(search);
  const updateSearch = async () => {
    if (debounce.length === 0) return setSearch([]);
    if (VITE_DEV_MODE) return setSearch(exemple);
    const bookmarks = await chromeSearch(debounce);
    setSearch(bookmarks);
  };

  const focus = () => {
    ref.current?.focus();
    setSearchState('');
    setSearch([]);
  };

  useEffect(() => {
    updateSearch();
  }, [debounce]);

  return (
    <div className='flex justify-center items-center gap-2 z-10'>
      <ModeToggle />
      <Input
        id='search'
        ref={ref}
        value={search}
        onChange={(e) => setSearchState(e.target.value)}
        placeholder='Bookmarks Search'
        className='md:w-[500px]'
        autoFocus
      />
      <Button variant='outline' size='icon' onClick={focus}>
        <XCircle />
      </Button>
    </div>
  );
};
