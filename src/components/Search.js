function Search(props) {
    console.log(props)
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" aria-label="Search" onChange={e => props.filterResults(e)} />
        </form>
      </div>
    );
  }
  
  export default Search;
  