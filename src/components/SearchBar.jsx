import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const SearchBar = ({search, setSearch}) => {
    return ( 
        <div className="flex items-center border rounded-lg px-3 py-2 w-40 sm:wd-56 md:w-90">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2"/>

            <input
                type="text"
                placeholder="Search product ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none"
            />

            {search && (
                <button
                onClick={() => setSearch("")}
                className="ml-2 text-gray-400 hover:text-black"
                
                >
                    <XMarkIcon className="h-5 w-5"/>
                </button>
            )}
        </div>
     );
}
 
export default SearchBar;