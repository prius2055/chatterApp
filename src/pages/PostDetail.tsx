import React from 'react';
import { useSelector } from 'react-redux';
import { FaPencil } from 'react-icons/fa6';
import Post from '../components/Post';
import './PostDetail.css';
import Nagivation from '../components/Navigation';
import Header from '../components/Header';

const PostAnalytics: React.FC = () => {
  // const { posts } = useSelector((store) => store.post);

  // const filteredPosts = posts.filter((post) => post.posts.length !== 0);

  return (
    <div className="post-detail-container">
      <Nagivation />
      <div>
        <Header />
        <div className="post-detail">
          <div className="post-analytics">
            <h2>Posts analytics</h2>
            <div>
              <span>May 2023,</span>
              <span>25days so far</span>
            </div>
          </div>

          <div className="post-highlight">
            <h3>Posts highlights</h3>
            <div className="top-post">
              <h2>Top posts</h2>
              <p>earned 2980 impressions</p>
            </div>

            <Post />
            <button>View post activity</button>
            <div>
              <h3>Posts summary</h3>
              <p>May 2023 summary</p>
            </div>
          </div>
          <div className="post-detail-footer">
            <div className="pd-footer">
              <div className="pd-footer-info">
                <p>Posts</p>
                <p className="pd-footer-info-val">3</p>
              </div>
              <div className="pd-footer-info">
                <p>Posts impressions</p>
                <p className="pd-footer-info-val">2.98k views</p>
              </div>
            </div>
            <div className="pd-footer">
              <div className="pd-footer-info">
                <p>Profile visits</p>
                <p className="pd-footer-info-val">300</p>
              </div>
              <div className="pd-footer-info">
                <p>New followers</p>
                <p className="pd-footer-info-val">300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAnalytics;
