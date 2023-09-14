import { FC, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ChevronUp } from 'lucide-react';

export type Props = {
  hiddenHeightLimit?: number;
};

export const ScrollToTop: FC<Props> = ({ hiddenHeightLimit = 400 }) => {
  const [hide, setHide] = useState(true);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleScroll = () => {
    setHide(window.scrollY < hiddenHeightLimit);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (hide) return null;

  return (
    <Button
      className='fixed bottom-6 right-6 z-10 rounded-full p-2 h-auto'
      onClick={scrollTop}
    >
      <ChevronUp size='1.8rem' />
    </Button>
  );
};
