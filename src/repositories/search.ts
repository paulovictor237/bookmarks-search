type ChromeSearch = (
  keyword: string,
) => Promise<chrome.bookmarks.BookmarkTreeNode[]>;

export const chromeSearch: ChromeSearch = async (keyword) => {
  const local = await chrome.bookmarks.search(keyword);
  const filter = local.filter((item) => {
    return item.dateGroupModified === undefined && item.url !== undefined;
  });
  return filter;
};
