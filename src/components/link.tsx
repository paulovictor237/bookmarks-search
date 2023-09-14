import { getFaviconUrlV3 } from '@/services/getFaviconUrl';
import { Card, CardDescription } from './ui/card';
import { FC } from 'react';

export type Props = {
  link: chrome.bookmarks.BookmarkTreeNode;
};

export const ChromeLinks: FC<Props> = ({ link }) => {
  const faviconSrc = getFaviconUrlV3(link.url!);
  return (
    <a href={link.url} target='_self' rel='noopener noreferrer'>
      <Card className='group w-96 flex flex-row items-center p-2 hover:bg-blue-500 hover:scale-110 transition-all'>
        <img className='h-8 w-8 mr-3 rounded-sm' src={faviconSrc} alt='' />
        <CardDescription
          className='truncate text-md text-gray-700 dark:text-white group-hover:text-white transition-none'
          title={link.title}
        >
          {link.title}
        </CardDescription>
      </Card>
    </a>
  );
};
