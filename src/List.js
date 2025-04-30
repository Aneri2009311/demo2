import React, { useState } from 'react';
import PropTypes from 'prop-types';

function List(props) {
  // List of courses
  const course = [
    "Master In Android Development", 
    "Master In Game Development", 
    "Master In Full Stack Development", 
    "Master In Web Development", 
    "Master In React Native", 
    "Master In Data Science", 
    "Master In ASP.net development", 
    "Master In Data Analytics", 
    "Master In Software Testing"
  ];

  // State to keep track of selected course
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Handle course click event
  const handleCourseClick = (courseName) => {
    // Toggle the selection of the course
    setSelectedCourse(prevSelectedCourse => prevSelectedCourse === courseName ? null : courseName);
  };

  return (
    <div>
      <h2>{props.data}</h2>
      <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
        {course.map((val, key) => {
          // Check if this course is selected
          const isSelected = selectedCourse === val;
          return (
            <li
              key={key}
              onClick={() => handleCourseClick(val)}
              style={{
                cursor: 'pointer',
                backgroundColor: isSelected ? 'darkblue' : 'transparent', // Only selected course gets dark blue background
                color: isSelected ? 'white' : 'black', // Selected course text turns white
                padding: '10px',
                borderRadius: '5px',
                margin: '5px 0',
                transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition
                listStyleType: "square"
              }}
            >
              {val}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

List.propTypes = {
  data: PropTypes.string.isRequired, // Define the type of the data prop
};

export default List;
