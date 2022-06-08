
const Card = ({ fetchedData }) => {
    let display;

    if (fetchedData) {
         display = fetchedData.map((data) => {
            const { name, id, status, location, image } = data
            return (
                <div key={id} className="card" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{location.name}</p>
                        <a href="#" className="btn btn-primary">{status}</a>
                    </div>
                </div>
            );
        })
    } else {
        display = "No Data Were Found !"
    }

    return (
        <>{display}</>
    );
}


export default Card;


