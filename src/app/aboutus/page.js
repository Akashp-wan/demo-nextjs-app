"use client"; 
import React, { useState } from 'react'

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <h2>About</h2>
      <p>
        This is a short description about the project.
        {showMore && (
          <span>
            {" "}
            Here’s some extra detailed information that appears when you click
            Read More. You can write anything you want here.
          </span>
        )}
      </p>

      <span
        onClick={() => setShowMore(!showMore)}
        style={{
          color: "blue",
          cursor: "pointer",
          marginLeft: "8px",
          textDecoration: "underline",
        }}
      >
        {showMore ? "Read Less" : "Read More"}
      </span>
    </div>
  );
}

export default About;
