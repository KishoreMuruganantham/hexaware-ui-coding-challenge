import { useEffect, useState } from "react"
import { Link } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getObjects } from "../store/actions/ObjectAction"
import ObjectList from "./ObjectList"

function ObjectsDashboard() {
    const objects = useSelector(state => state.objects)
    const dispatch = useDispatch()

    const [page, setPage] = useState(0)
    const size = 10

    useEffect(() => {
        dispatch(getObjects())
    }, [])

    const totalPages = Math.ceil(objects.length / size)
    const startIndex = page * size
    const pagedObjects = objects.slice(startIndex, startIndex + size)

    const onPageChange = (val) => {
        setPage(val)
    }
    return (
        <div>
            <div className="mb-4 mt-4">
                <Link to="/add" className="btn btn-primary" >
                    +Add Object
                </Link>
            </div>

            <ObjectList list={pagedObjects} />

            <nav aria-label="Page navigation example" style={{ "alignContent": 'center' }}>
                <ul className="pagination justify-content-center">
                    <li className="page-item"><button className="page-link" onClick={() => setPage(page - 1)}
                        disabled={page === 0}>Previous</button></li>

                    {
                        Array.from({ length: totalPages }, (e, index) => (
                            <li key={index} className={index === page ? "page-item active" : "page-item"}>
                                <button className="page-link" onClick={() => onPageChange(index)}>{index + 1}</button></li>
                        ))}

                    <li className="page-item"><button className="page-link" onClick={() => setPage(page + 1)}
                        disabled={page === (totalPages - 1)} >Next</button></li>

                </ul>
                <p>{`Page ${page + 1} of ${totalPages} total pages`}</p>
                <p>{`Showing ${pagedObjects.length} records from total ${objects.length} records`}</p>
            </nav>
        </div>
    )
}

export default ObjectsDashboard
