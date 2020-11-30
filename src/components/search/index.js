function Search(props) {
  function handleChange(e) {
    const { value } = e.target;
    props.handleCallback(value);
  }

  return (
    <input type="text" className="searchBar" onChange={handleChange}></input>
  );
}

export default Search;
