function Menu({ searchValue, setSearchValue }) {
  return (
    <div className="nav">
      <a href="" className="active nav__item">All</a>
      <a href="" className="nav__item">Mountains</a>
      <a href="" className="nav__item">Oceans</a>
      <a href="" className="nav__item">Architecture</a>
      <a href="" className="nav__item">Towns</a>
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