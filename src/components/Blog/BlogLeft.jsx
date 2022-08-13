import React from "react";
import blog from "../../data/blog.js";
import "./Blog.css";

function BlogLeft() {
  return (
    <article className='postcard light red'>
      <a
        className='postcard__img_link'
        href='https://stylesearch.com/eu/blogs/4-dresses-to-wear-this-july/103'>
        <img
          className='postcard__img'
          src={blog[1].image}
          alt='4 dresses to wear this july'
        />
      </a>
      <div className='postcard__text t-dark'>
        <h1 className='postcard__title red'>
          <a
            href='https://stylesearch.com/eu/blogs/4-dresses-to-wear-this-july/103'
            target='_blank'
            rel='noopener noreferrer'>
            {blog[1].title}
          </a>
        </h1>
        <div className='postcard__subtitle small'>
          <p>{blog[1].date}</p>
        </div>
        <div className='postcard__bar'></div>
        <div className='postcard__preview-txt'>{blog[1].content}</div>
      </div>
    </article>
  );
}

export default BlogLeft;
