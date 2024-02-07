import { blogDetails } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CommentBox from "./CommentBox";
import HeadShake from 'react-reveal/HeadShake';
import Flash from 'react-reveal/Flash';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';
import Rotate from 'react-reveal/Rotate';
const {
  image,
  date,
  admin,
  title,
  title1,
  title2,
  title3,
  title4,
  title5,
  text1,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  text11,
  text12,
  text2,
  comments,
  tags,
  category,
  posts,
  inputs,
} = blogDetails;

const BlogDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    inputs.forEach(({ name }) => (data[name] = formData.get(name)));
    console.log(data);
  };

  return (
    <div className="blog-details">
      <div className="post-details">
        <div className="inner-box">
          <div className="image-box">
            <Link href="/blog-single">
              <a>
                <Image src={image.src} alt="" />
              </a>
            </Link>
          </div>
          <div className="lower-box">
          <Zoom right duration={1000} delay={400}>
            <div className="post-meta">
              <ul className="clearfix">
                <li>
                  <span className="far fa-clock"></span> {date}
                </li>
                <li>
                  <span className="far fa-user-circle"></span> {admin}
                </li>
                <li>
                  <span className="far fa-comments"></span> {comments.length}{" "}
                  Comments
                </li>
              </ul>
            </div>
            <h4>{title}</h4>
            <div className="text">
              <p>{text1}</p>
              <h5>{title1}</h5>
              <p>{text2}</p>
              <h5>{title2}</h5>
           
              <p>{text3}</p>
              <h5>{title3}</h5>
              <p>{text4}</p>
              <p>{text5}</p>
              <p>{text6}</p>
              <p>{text7}</p>
              <h5>{title4}</h5>
              <p>{text8}</p>
              <h5>{title5}</h5>
              <p>{text9}</p>
              <p>{text10}</p>
              <p>{text11}</p>
              <p>{text12}</p>
            </div>
            </Zoom>
          </div>
        </div>

        <div className="info-row clearfix">
        <Bounce top  duration={1300} delay={600}> 
          <div className="tags-info">
            <strong>Tags:</strong>{" "}
            {tags.map((tag, i) => (
              <Fragment key={i}>
                <a href="#">{tag}</a>
                {tags.length !== i + 1 && ", "}
              </Fragment>
            ))}
          </div>
          <div className="cat-info">
            <strong>Category:</strong>{" "}
            {category.map((cate, i) => (
              <Fragment key={i}>
                <a href="#">{cate}</a>
                {category.length !== i + 1 && ", "}
              </Fragment>
            ))}
          </div>
          </Bounce>
        </div>
      </div>
      <div className="post-control-two">
      <Roll top duration={1600} delay={600}>
        <Row className="clearfix">
          {posts.map((post, i) => (
            <Col key={i} md={6} sm={12} className="control-col">
              <div className="control-inner">
                <h4>
                  <a href="#">{post}</a>
                </h4>
                <a href="#" className="over-link"></a>
              </div>
            </Col>
          ))}
        </Row>
        </Roll>
      </div>
      <div className="comments-area">
      <Rotate bottom left duration={1800} delay={700}> 
        <div className="comments-title">
           <h3>{comments.length} Comments</h3>
        </div>
        {comments.map((comment) => (
          <CommentBox key={comment.id} comment={comment} />
        ))}
          </Rotate>
      </div>
    
      <div className="leave-comments">
        <div className="comments-title">
        <Flash duration={1000} delay={400}>     <h3>Leave a comment</h3></Flash>
        </div>
        <div className="default-form comment-form">
     
          <form onSubmit={handleSubmit}>
            <Row className="clearfix">
              {inputs.map(({ name, type, placeholder, required }) => (
                <Col
                  key={name}
                  md={type ? 6 : 12}
                  sm={12}
                  className="form-group"
                >   <HeadShake duration={1000} delay={400}>
                  {type ? (
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      required={required}
                    />
                  ) : (
                    <textarea
                      name={name}
                      placeholder={placeholder}
                      required={required}
                    ></textarea>
                  )}
                   </HeadShake>
                </Col>
              ))}
              <Col md={12} sm={12} className="form-group">
              <Zoom right>
                <button type="submit" className="theme-btn btn-style-one">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Submit Comment</span>
                </button>
                </Zoom>
              </Col>
            </Row>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
