import React, { useState } from "react"; // Import React and useState hook to manage the component's state
import "../styles/SearchBar.css"; // Import the CSS for styling the SearchBar component

// Define the SearchBar component, receiving `onSearch` as a prop from its parent component
const SearchBar = ({ onSearch }) => {
  // State to keep track of the input query (movie title) entered by the user
  const [query, setQuery] = useState("");

  // handleSearch function that gets called when the form is submitted
  // This prevents the default form submission behavior and calls `onSearch` with the current query
  const handleSearch = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    onSearch(query); // Calls the `onSearch` function passed from the parent component with the current query
  };

  return (
    // A form element that calls handleSearch when submitted
    <form className="search-bar" onSubmit={handleSearch}>
      {/* Input field for the user to type in their search query */}
      <input
        type="text" // Specifies the input type as text
        placeholder="Search for a movie..." // Placeholder text in the input field
        value={query} // Sets the value of the input to be the query state
        onChange={(e) => setQuery(e.target.value)} // Updates the query state whenever the input changes
      />
      {/* Submit button to trigger the search */}
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar; // Export the SearchBar component for use in other parts of the application
