import React from "react";
import Menu from "./components/Menu";
import Collections from "./components/collections/Collections";

function App() {

  const [collectionData, setCollectionData] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [activeCategory, setActiveCategory] = React.useState(0)
  const [collectionLoading, setCollectionLoading] = React.useState(true)

  React.useEffect(() => {
    // fetch(`${activeCategory ? `https://64dfcc8471c3335b25831233.mockapi.io/photos?category=${activeCategory}` : 'https://64dfcc8471c3335b25831233.mockapi.io/photos'}`)
    setCollectionLoading(true)
    fetch(`https://64dfcc8471c3335b25831233.mockapi.io/photos${activeCategory ? `?category=${activeCategory}` : ''}`)
      .then(res => res.json())
      .then(json => setCollectionData(json))
      .finally(() => setCollectionLoading(false))
  }, [activeCategory]
  )

  return (
    <div className="wrapper">
      <h1>My photograph collection</h1>

      <Menu searchValue={searchValue} setSearchValue={setSearchValue} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      <Collections searchValue={searchValue} collectionData={collectionData} collectionLoading={collectionLoading} setCollectionLoading={setCollectionLoading} />

    </div>
  );
}

export default App;
