import React from "react";
import "./Blog.css";
import blog from "../../data/blog.js";
function BlogRight() {
  return (
    <article className='postcard light blue'>
      <img
        className='postcard__img'
        src={blog[0].image}
        alt='find your natural pallete color'
      />
      <div className='postcard__text t-dark'>
        <h1 className='postcard__title blue'>
          <a
            href='https://colorwise.me/mobile-apps'
            target='_blank'
            rel='noopener noreferrer'>
            {blog[0].title}{" "}
          </a>
        </h1>
        <div className='postcard__subtitle small'>
          <p>{blog[0].date}</p>
        </div>
        <div className='postcard__bar'></div>
        <div className='postcard__preview-txt'>{blog[0].content} </div>
      </div>
    </article>
  );
}

export default BlogRight;
