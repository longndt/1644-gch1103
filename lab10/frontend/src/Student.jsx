import React, { useEffect, useState } from "react";
import axios from "axios";

//set đường dẫn của ExpressJS server (back-end)
const baseURL = "http://localhost:5000";

const Student = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get(baseURL);
         setData(response.data);
      };

      fetchData();
   }, []);

   return (
      <div className="container">
         <center>
            <table className="table table-primary">
               <tr>
                  <th colSpan={7}>
                     <h3>STUDENT LIST</h3>
                  </th>
               </tr>
               <tr className="columns">
                  <th>Name</th>
                  <th>Birthday</th>
                  <th>Department</th>
                  <th>Class</th>
                  <th>GPA</th>
                  <th>Student Year</th>
                  <th>Gender</th>
               </tr>
               {data.map((student) => (
                  <tr>
                     <th>{student.name}</th>
                     <th>{student.dob}</th>
                     <th>{student.department}</th>
                     <th>{student.class}</th>
                     <th>{student.gpa}</th>
                     <th>{student.studentYear}</th>
                     <th>{student.gender}</th>
                  </tr>
               ))}
            </table>
         </center>
      </div>
   );
};

export default Student;
