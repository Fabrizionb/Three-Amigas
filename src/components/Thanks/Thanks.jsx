import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

const Thanks = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 111110000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='text-center mt-5'>
      <br></br>
      <PropagateLoader color='#66b1d8' size={5} />
      <p className='mt-4 mb-4'>
        Redirecting to the main page in 10 seconds.{" "}
        <Link to='/'>Click here to go now.</Link>{" "}
      </p>
      <img
        className='mb-1'
        src='https://res.cloudinary.com/dm01fzgtk/image/upload/v1661621605/thank-you-for-your-purchase-message-1_nwxsjm.png'
        alt=''></img>
    </div>
  );
};

export default Thanks;
