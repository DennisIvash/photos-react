import Collection from "./collection/Collection"
function Collections({collectionData, searchValue}) {

    return (
        <div className="collections">
            {
            collectionData
            .filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map(obj => <Collection name={obj.name} photos={obj.photos} />)
            }
        </div>
    )
}
export default Collections