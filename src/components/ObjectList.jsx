import { useDispatch } from "react-redux"
import { deleteObject } from "../store/actions/ObjectAction"

function ObjectList({ list }) {
    const dispatch = useDispatch()

    const onDelete = (id) => {
        dispatch(deleteObject(id))
    }
    return (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
            {
                list.map((obj, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100">
                            <div className="card-header">
                                {obj.name}
                            </div>
                            <div className="card-body">
                                <div className="card-text mb-1">Color: {obj.data?.color ? obj.data.color : obj.data?.Color ? obj.data.Color : "N/A"}</div>
                                <div className="card-text mb-1">Price: {obj.data?.price ? obj.data.price : obj.data?.Price ? obj.data.Price : "N/A"}</div>
                                <div className="card-text mb-1">CPU: {obj.data?.["CPU model"] ? obj.data["CPU model"] : obj.data?.CPU ? obj.data.CPU : "N/A"}</div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-danger btn-sm" onClick={() => onDelete(obj.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ObjectList
