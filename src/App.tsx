import { useState } from 'react';
import { ChromeLinks } from './components/link';
import { ScrollToTop } from './components/scroll-to-top';
import { SearchHeader } from './components/header';
import { Button } from './components/ui/button';
import { ArrowUp } from 'lucide-react';

function App() {
  const [result, setResult] = useState<chrome.bookmarks.BookmarkTreeNode[]>([]);

  return (
    <div className='min-h-screen p-10'>
      <ScrollToTop />
      <SearchHeader setSearch={setResult} />
      <div className='flex flex-col gap-2 items-center mt-5'>
        {result.map((item) => (
          <ChromeLinks key={item.id} link={item} />
        ))}
      </div>
      <div className='flex-col items-center justify-center h-full hidden'>
        <ArrowUp size={50} />
        <Button className='text-2xl'>Start Search</Button>
      </div>
    </div>
  );
}

export default App;
