import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";

export default function Courses() {
  return (
    <div id="wd-courses" className="ms-4">
      <h2 className="text-danger">Course 1234 </h2> <hr />
      <div className="d-flex">
        <div className="d-none d-lg-block me-5">
          <CoursesNavigation />
        </div>

        <div className="flex-lg-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Modules" element={<Modules />} />
            <Route path="/Piazza" element={<h2>Piazza...</h2>} />
            <Route path="/Zoom" element={<h2>Zoom...</h2>} />
            <Route path="/Assignments" element={<Assignments />} />
            <Route path="/Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="/Quizzes" element={<h2>Quizzes...</h2>} />
            <Route path="/Grades" element={<h2>Grades...</h2>} />
            <Route path="/People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
