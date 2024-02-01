import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreetingMessage } from "../redux/messageSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.value);
  
  useEffect(() => {
    dispatch(getGreetingMessage());
  }, []);

  return <h1>{message}</h1>;
};

export default Greeting;
