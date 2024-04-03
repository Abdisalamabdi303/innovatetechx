import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/hompage/Blog';
import blogimage1 from '../../assets/blogimage1.jpg'
import blogimage2 from '../../assets/blogimage2.jpg'
import blogimage3 from '../../assets/image4.png'

const blogPosts = [
  {
    image: blogimage1,
    date: 'November 16, 2011',
    title: 'Three Pillars of User Delight',
    excerpt: 'Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...'
  },
  {
    image: blogimage2,
    date: 'September 24, 2017',
    title: 'app Mapping Methods',
    excerpt: 'Visual-design principles can be applied consistently throughout the process of creating a polished UX map...'
  }
  {
    image: blogimage3,
    date: 'September 24, 2017',
    title: 'app Mapping Methods',
    excerpt: 'Visual-design principles can be applied consistently throughout the process of creating a polished UX map...'
  }
];

ReactDOM.render(
  <Blog blogPosts={blogPosts} />,
  document.getElementById('root')
);
