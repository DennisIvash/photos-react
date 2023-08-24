import Collection from "./collection/Collection"
function Collections({name, photos}) {
    console.log(name, photos);
    return (
        <div className="collections">
            <Collection name={name} photos={photos} />
        </div>
    )
}
export default Collections