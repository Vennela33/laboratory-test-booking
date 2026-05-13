import { Search } from "lucide-react";

function SearchBar({
  searchTerm,
  setSearchTerm
}) {

  return (
    <div className="relative mb-6">

    

        <Search
          size={20}
          className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
        />

        <input
          type="text"
          placeholder="Search tests like Blood Test..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
           search-input pl-12
          "
        />

      </div>

  );
}

export default SearchBar;