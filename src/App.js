import React from "react";
import Menu from "./components/Menu";
import Collections from "./components/collections/Collections";

function App() {

  const [collectionData, setCollectionData] = React.useState([])

  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {
    fetch('https://64dfcc8471c3335b25831233.mockapi.io/photos')
      .then(res => res.json())
      .then(json => setCollectionData(json))
  }, []
  )
  
  return (
    <div className="wrapper">
      <h1>My photograph collection</h1>

      <Menu searchValue={searchValue} setSearchValue={setSearchValue}/>

      <Collections searchValue={searchValue} collectionData={collectionData} />
      
    </div>
  );
}

export default App;
