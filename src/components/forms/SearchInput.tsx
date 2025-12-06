import clsx from 'clsx';
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

interface SearchInputProps {
  onSearch: (query: string) => void;
  onClear?: () => void;
  placeholder?: string;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, onClear, placeholder = 'Search products', className }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    if (event.target.value === '') {
      onClear?.();
    }
  };

  const executeSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      executeSearch();
    }
  };

  return (
    <div className={clsx("flex items-center border-b border-(--gray-60) px-2 w-full overflow-hidden whitespace-nowrap text-ellipsis", className)}>
      <div className="mr-2 text-gray-500">
        <i className="icon-search" onClick={executeSearch}/>
      </div>
      <input
        type="text"
        className="flex-grow border-none py-1 text-base text-(--gray-70) font-light focus:outline-none"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchInput;