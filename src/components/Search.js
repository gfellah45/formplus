const Search = ({ setSearch }) => {
  return (
    <input
      type="text"
      name="search"
      placeholder="Search Templates"
      className="text-sm placeholder-gray-500 outline-none focus:outline-none"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Search;
