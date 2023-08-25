import Collection from "./collection/Collection"
function Collections({collectionData}) {

    return (
        <div className="collections">
            {collectionData.map(obj => <Collection name={obj.name} photos={obj.photos} />)}
           
        </div>
    )
}
export default Collections