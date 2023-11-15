import React, { useContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

import Confetti from 'react-confetti';

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql';
import AccordionExampleFluid from '../components/Accordion';

function Home() {
  const headingStyle = {
    color: '#E86A33',
    fontSize: '50px',
    fontFamily: 'Fantasy'
  }
  const loadingStyle ={
    fontFamily: 'Fantasy',
    color: '#E86A33'
  }
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    setShowConfetti(true);
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(confettiTimer);

  }, []);
  const { user } = useContext(AuthContext);
  const {
    loading,
    data: { getPosts: posts } = {}
  } = useQuery(FETCH_POSTS_QUERY);

  return (
    <div>
      {showConfetti && <Confetti/>}
      <Grid columns={3}>
        <Grid.Row className="page-title">
          <h1 style = {headingStyle}><bold>  Recent Posts</bold></h1>
        </Grid.Row>
        <Grid.Row>
          {user && (
            <Grid.Column>
              <PostForm />
            </Grid.Column>
          )}
          {loading ? (
            <h1 style={loadingStyle}>Loading posts..</h1>
          ) : (
            <Transition.Group>
              {posts &&
                posts.map((post) => (
                  <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                    <PostCard post={post} />
                  </Grid.Column>

                ))}
            </Transition.Group>
          )}
        </Grid.Row>
      </Grid>
    <AccordionExampleFluid/>  
    </div> 
  );
}

export default Home;
