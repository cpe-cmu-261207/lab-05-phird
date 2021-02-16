import React from 'react';
import CourseCard from "./CourseCard"

const CourseList = ({ courses }) => (
    <div>    
    {courses.map( (course) => (
            <CourseCard
                key = {course.id}
                id = {course.id}
                name = {course.name}
                grade = {course.grade}
                credit = {course.credit}
            />
        ))}
    </div>
);

export default CourseList;