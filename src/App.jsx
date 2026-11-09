import { Link, Route, Routes } from "react-router"
import ObjectsDashboard from "./components/ObjectsDashboard"
import ObjectAdd from "./components/ObjectAdd"

const App = () => { //parent component

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="navbar-brand" to="">Object Dashboard</Link>

              <div className="collapse navbar-collapse" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/add">Add Object</Link>
                  </li>

                </ul>

              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-12">
          <Routes>
            <Route path="" element={<ObjectsDashboard />} />
            <Route path="add" element={<ObjectAdd />} />
          </Routes>
        </div>
      </div>


    </div>


  )

}

export default App
