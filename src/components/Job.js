import React from 'react'
import Wrapper from "../assets/wrappers/Job";
import { Link } from "react-router-dom";
import Button from '../components/Button'
import customFetch from "../utils/axios";
const Job = ({name,position,id}) => {
   const submitDatatoServer = async (id) => {
     try {
       const result = await customFetch.delete(`/users/${id}`);
       return result.data
     } catch (error) {
       console.log(error);
     }
   };
  const deleteHandler= async (id)=>{
    await submitDatatoServer(id);
  }
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{name.charAt(0)}</div>
        <div className="info">
          <p>{name}</p>
          <h5>{position}</h5>
        </div>
      </header>
      <footer>
        <div className="actions">
          <Link className="btn edit-btn" to="/add-job">
            edit
          </Link>
          <Button
            type="button"
            className="btn delete-btn"
            handleChange={() => deleteHandler(id)}
          >
            Delete
          </Button>
        </div>
      </footer>
    </Wrapper>
  );
}

export default Job