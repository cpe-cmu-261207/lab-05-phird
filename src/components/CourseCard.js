import "../css/CourseCard.css"
import { useContext } from "react";
import { CourseContext } from "../App";

const CourseCard = ( props ) => {
  const {id, name, grade, credit} = props;
  const { dispatch } = useContext(CourseContext)

  const onRemoveCourse = () => {
    console.log("Your gonna Delete !")
    //dispatch delete action
    dispatch({
      type:"DELETE_COURSE",
      payload: id,
    });
    }
  
  return (
      <table className="courseCard">
        <tbody id="tablebody">
          <tr id="title-of-table">
            <th id="t-title" >Course Name</th>
            <th id="t-title" >Grade</th>
            <th id="t-title" >Credit</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{grade}</td>
            <td>{credit}</td>
            <td><button className="deleteButt" onClick={onRemoveCourse}> x </button> </td>
          </tr>
        </tbody>
      </table>
  );
};

export default CourseCard;
