import React, { useEffect } from "react";

const Todo = () => {
  useEffect(() => {
    // Simulate a delay to see the loader in action
    const timer = setTimeout(() => {
      console.log("Todo Page Loaded");
    }, 3000); // 3-second delay

    return () => clearTimeout(timer);
  }, []);

  return <div>Todo Page</div>;
};

export default Todo;
