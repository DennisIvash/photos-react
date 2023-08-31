function Menu({ searchValue, setSearchValue, activeCategory, setActiveCategory }) {

  const cat = [
    {'name':'All'},
    {'name':'Oceans'},
    {'name':'Mountains'},
    {'name':'Architecture'},
    {'name':'Towns'},
  ]

  return (
    <div className="nav">
      <ul className="nav_ul">
        {cat.map((obj, index) => <li onClick={() => setActiveCategory(index)} className={`nav__item ${index === activeCategory ? "active" : ""}`}>{obj.name}</li>)}
      </ul>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Search by name"
      />
    </div>
  )
}

export default Menu