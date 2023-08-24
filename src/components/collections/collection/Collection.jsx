function Collection({ name, photos }) {
    return (
        <div className="collection">
            <img src={photos[0]} alt="" />
            <div className="small-images">
                <img src={photos[1]} alt="" />
                <img src={photos[2]} alt="" />
                <img src={photos[3]} alt="" />
            </div>
            <h3>{name}</h3>
        </div>
    )
}

export default Collection