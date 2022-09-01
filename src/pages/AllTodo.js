import React, { useState } from "react";
import { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import Job from "../components/Job";
import customFetch from "../utils/axios";
const AllTodo = () => {
  const [users, Setusers] = useState([]);
  const submitDatatoServer = async () => {
    try {
      const result = await customFetch.get("/users");
      Setusers(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    submitDatatoServer();
  }, []);
  return (
    <Wrapper>
      <h5>
        {users.length} user{users.length > 1 && "s"} Found
      </h5>
      <div className="jobs">
        {users?.map((user) => {
          console.log(user);
          return (
            <Job
              key={user.id}
              {...user}
              submitDatatoServer={submitDatatoServer}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default AllTodo;
