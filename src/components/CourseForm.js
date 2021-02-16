import "../css/CourseForm.css" ;
import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useState } from "react";
import { CourseContext } from "../App";

const CourseForm = () => {
  const [myCourse, setMycourse] = useState({name:"", grade:"",credit:""});
  const {dispatch} = useContext(CourseContext);

  const addCourse = (e) => {
    console.log("YOU JUST CLICK ADD BUTTON")
    e.preventDefault();
    if(myCourse!=="" && myCourse.name !=="" && myCourse.grade !=="Your Grade" && myCourse.credit !==""){
      console.log("Course Gonna be ADD ! ")
      dispatch({
        type: "ADD_COURSE",
        payload: {
          id: Date.now(),
          name: myCourse.name,
          grade: myCourse.grade,
          credit: myCourse.credit,
        },
      });
      
      document.getElementById('input').value='';
      document.querySelector('#cCredit').value='';
      document.querySelector('#cGrade').value='';
      setMycourse('');
    }
    else{
      alert("Please Check your Data !")
    } 
  };

  return (
    <form className="containerForm" onSubmit={addCourse} >
      
      {/* Course Name */}
      <div className="courseName">
        <label className="label">Course Name : </label>
        <input 
            className="input"
            id="input" 
            type="text" 
            placeholder="e.q Calculus" 
            onChange= {(e) => setMycourse({
              ...myCourse,name: e.currentTarget.value})}/>
      </div>
      {/* User Grade */}
      <div className="userGrade">
        <label className="label" >Grade : </label>
        <select className="input" 
                id="cGrade"
                type="text"  
                placeholder = "please select ..."
                onChange={(e) => setMycourse({
                  ...myCourse,grade: e.currentTarget.value })}
            >
            {GRADES.map((grade,index) =>{
              return <option key={index} value={grade.value}> {grade.name} </option>})}
        </select>
      </div>
      {/* User Credit */}
      <div className="userCredit">
        <label className="label" >Credit : </label>
        <select className="input"
                id="cCredit" 
                type="number"  
                placeholder = "please select ..."
                onChange={(e) => setMycourse({
                  ...myCourse,credit: e.currentTarget.value
                })}
          >
              {CREDITS.map((credit,index) => {
              return <option key={index} value={credit}>{credit}</option>
              })} 
        </select>
      </div>
      <div className="buttonBox">
        <button className='SubmitButton' type="submit"> Add </button>
      </div>
    </form>
  );
};

export default CourseForm;
