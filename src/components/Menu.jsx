function Menu({ searchValue, setSearchValue }) {

  const cat = [
    {'name':'All'},
    {'name':'Mountains'},
    {'name':'Oceans'},
    {'name':'Architecture'},
    {'name':'Towns'},
  ]

  return (
    <div className="nav">
      <ul className="nav_ul">
        {cat.map(obj => <li className="nav__item">{obj.name}</li>)}
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