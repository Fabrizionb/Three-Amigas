import React from "react";
import BlogLeft from "../Blog/BlogLeft.jsx";
import BlogRight from "../Blog/BlogRight.jsx";

function BlogContainer(props) {
  return (
    <>
      <section className='light'>
        <h4 className='text-center mt-5 paymentTitle'>{props.title}</h4>
        <div className='container py-2 mt-3'>
          {
            <>
              <BlogRight />
              <BlogLeft />
            </>
          }
        </div>
      </section>
    </>
  );
}

export default BlogContainer;
