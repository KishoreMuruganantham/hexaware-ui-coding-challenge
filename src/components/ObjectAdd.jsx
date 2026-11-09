import { useState } from "react"
import { useNavigate } from "react-router"
import { addObject } from "../store/actions/ObjectAction"
import { useDispatch } from "react-redux"

function ObjectAdd() {
    const [name, setName] = useState("")
    const [year, setYear] = useState(0)
    const [price, setPrice] = useState(0)
    const [cpu, setCpu] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const add = async (e) => {
        e.preventDefault()
        let obj = {
            'name': name,
            'data': {
                'Year': Number(year),
                'Price': Number(price),
                'CPU': cpu
            }
        }
        // go back to the dashboard only after the API saves the object
        await dispatch(addObject(obj))
        navigate("/")
    }
    return (
        <div className="container">
            <h3>Add new Object</h3>
            <form onSubmit={(e) => add(e)}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mt-4">
                            <label>Name</label>
                            <input type="text" className="form-control"
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mt-4">
                            <label>Year</label>
                            <input type="number" className="form-control"
                                onChange={(e) => setYear(e.target.value)} />
                        </div>
                        <div className="mt-4">
                            <label>Price</label>
                            <input type="number" step="0.01" className="form-control"
                                onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="mt-4">
                            <label>CPU</label>
                            <input type="text" className="form-control"
                                onChange={(e) => setCpu(e.target.value)} />
                        </div>
                        <div className="mt-4">

                            <button type="submit" className="btn btn-primary" >
                                +Add Object
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default ObjectAdd
