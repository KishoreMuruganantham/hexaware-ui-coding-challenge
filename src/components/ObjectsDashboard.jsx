import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getObjects } from "../store/actions/ObjectAction"
import ObjectList from "./ObjectList"

function ObjectsDashboard() {
    const objects = useSelector(state => state.objects)
    const dispatch = useDispatch()

    const [page, setPage] = useState(0)
    const size = 10
    const [search, setSearch] = useState("")
    const [searchText, setSearchText] = useState("")

    const filteredObjects = objects.filter(obj =>
        String(obj.name || "").toLowerCase().includes(search.toLowerCase())
    )

    useEffect(() => {
        dispatch(getObjects())
    }, [dispatch])

    const totalPages = Math.ceil(filteredObjects.length / size)
    const startIndex = page * size
    const pagedObjects = filteredObjects.slice(startIndex, startIndex + size)

    const onPageChange = (val) => {
        setPage(val)
    }
    return (
        <>
            {/* Search input */}
            <div className = "row mb-4">
                <div className = "col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Object Name..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>

                <div className = "col-md-2">
                    <button type="button" className="btn btn-primary" onClick={() => {setSearch(searchText.trim());setPage(0);}}>Search</button>
                </div>
            </div>

            <ObjectList list={pagedObjects} />

            {filteredObjects.length === 0 && <p>No objects found.</p>}

            {totalPages > 0 && <nav aria-label="Page navigation example" style={{ alignContent: "center" }}>
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
                <p>{`Showing ${pagedObjects.length} records from total ${filteredObjects.length} records`}</p>
            </nav>}
        </>
    )
}

export default ObjectsDashboard
