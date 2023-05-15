import { useState } from 'react';
import SearchModeToggler from './SearchBar/SearchModeToggler';
import SearchInput from './SearchBar/SearchInput';
import { useQuery } from '@tanstack/react-query';
import SearchButton from './SearchBar/SearchButton';

interface SearchBarProps {
  setPriceData: (priceData: any) => void;
}

const SearchBar = ({ setPriceData }: SearchBarProps) => {
  const [searchMode, setSearchMode] = useState('song');
  const [songSearchQuery, setSongSearchQuery] = useState({ artist: '', song: '' });
  const [playlistSearchString, setPlaylistSearchString] = useState('');

  return (
    <div className='flex md:flex-row flex-col w-4/5 md:gap-10 gap-8'>
      <SearchModeToggler
        searchMode={searchMode}
        setSearchMode={setSearchMode}
        songSearchQuery={songSearchQuery}
        playlistSearchString={playlistSearchString}
        setSongSearchQuery={setSongSearchQuery}
        setPlaylistSearchString={setPlaylistSearchString}
      />
      <SearchInput
        searchMode={searchMode}
        songSearchQuery={songSearchQuery}
        setSongSearchQuery={setSongSearchQuery}
        playlistSearchString={playlistSearchString}
        setPlaylistSearchString={setPlaylistSearchString}
      />
      <SearchButton />
    </div>
  );
};

export default SearchBar;