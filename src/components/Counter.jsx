import React, { useEffect, useReducer, useState , useRef} from "react";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import reducer from "./reducer";

const initialValue = 0;
const UseState = () => {

  // const[ count , setCount ] = useState(0);

  const [count , setCount ] = useReducer( reducer , initialValue );

  const ab = useRef(0);// This variable will not trigger a re-render

// When value of a change then only re-render

useEffect( () =>{
  document.title = count;
  ab.current = ab.current+1 ;
  console.log(ab)
  
} , [count]);

  
// This will always run on every re-render 

  // useEffect( () =>{
  //    document.title = count ;
  // });
  
// This will run one time when the component mount , or on first render

  // useEffect( () =>{
  //    document.title = count
  // } , []);



  return (
    <>
      <Wrapper>
        <div className="container">
          <button onClick={ () => setCount({type: "INC"}) } >
            <BiPlusMedical className="icon" />
          </button>
          <h1>{count }</h1>
          <button
           onClick={ () => setCount({type:"DEC"})}>
            <FaMinus className="icon minus_icon" />
          </button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container { 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default UseState;

// we cannot use conditional statement in hooks