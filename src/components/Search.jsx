import { useRef, useEffect } from "react"

function Search() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, []);

  return (
    <div className="search-bar">
      <input type="text" placeholder="Serch for your recipe..." className="search-input" ref={inputRef}/>
       <button className="icon-button" title="Search">
        🔍
      </button>
    </div>
  )
}

export default Search
