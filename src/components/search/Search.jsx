const Search = ({ search, setSearch }) => {
    return (
        <form
            className="searchForm"
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                type="text"
                role='searchbox'
                placeholder="Search items"
                className="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form >
    )
}

export default Search;
