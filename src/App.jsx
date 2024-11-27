import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form  from "./component/Form";

const App = () => {
  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Form/>}></Route>
          </Routes>
        </Router>

      </div>
    </div>
  )
}

export default App