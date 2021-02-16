import "./css/App.css"
import { createContext, useReducer, useEffect, useState} from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

import {initialState, reducer} from "./components/CourseReducer";

export const CourseContext = createContext({});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [GPA,setGpa] = useState(0.0);

  function fetchPage(){
    const localPage = localStorage.getItem("courseData");
    if(localPage){
      dispatch({
        type: "SET_COURSE",
        payload: JSON.parse(localPage),
      });
    }
  }

  function calGPA() {
    var aGrade = 0 ; 
    var aCredit = 0 ;
    state.courseData.forEach( element => {
      aCredit += Number(element.credit)
      aGrade += (Number(element.grade)*Number(element.credit));
    });
    
    if(aGrade === 0 ){
      setGpa(0.0)
    }else{ 
      setGpa(aGrade/aCredit);
    }
  }


  useEffect(fetchPage,[]);

  useEffect(()=> {
    calGPA();
    localStorage.setItem("courseData", JSON.stringify(state.courseData));
  },[state.courseData]);

  return (
    <div className="Container">
      <h1>GPA CALCULATOR</h1>
      {/* TODO ADD UI */}
    <CourseContext.Provider id="content" value={{state, dispatch}}>
      <div className="container">
        <CourseForm/>
        <CourseList courses={state.courseData} />
        <div className="textGpa">
              <p className="gpa-line"> GPA : {GPA.toFixed(2)} </p>
        </div>
      </div>
    </CourseContext.Provider>
    </div>
  );
}

export default App;
