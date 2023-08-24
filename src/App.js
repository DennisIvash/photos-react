import React from "react";
import Menu from "./components/Menu";
import Collections from "./components/collections/Collections";

function App() {

  const [collectionData, setCollectionData] = React.useState([])
  React.useEffect(() => {
    fetch('https://64dfcc8471c3335b25831233.mockapi.io/photos')
      .then(res => res.json())
      .then(json => setcollectionData(json))
  }, []
  )

  console.log(collectionData[0].photos);
  

  return (
    <div className="wrapper">
      <h1>My photograph collection</h1>

      <Menu />

      {/* <Collections /> */}
      {/* name={photos[0].name} photos={photos[0].photos}  */}
    </div>
  );
}

export default App;
