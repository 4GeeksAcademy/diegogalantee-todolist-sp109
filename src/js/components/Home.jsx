import React from "react";

//include images into your bundle

import TodoList from "./TodoList";
//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <TodoList />
    </div>
  );
};

export default Home;