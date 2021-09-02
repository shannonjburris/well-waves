import React from 'react';
import { useQuery } from '@apollo/client';
import { Redirect, useParams } from 'react-router-dom';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

function Favorite() {
  const { email: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { email: userParam },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
    return <Redirect to="/favorites" />;
  }

  if (loading) {
    return <div>Loading...</div>;

  }

  if (!user?.email) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h1>hello</h1>
      {/* {Object.keys(user).map((sounds) => sounds.sounds.map((sound) => {
        return (
          <figure key={sound._id}>
            <figcaption>Listen {sound.name}:</figcaption>
            <audio controls src={sound.link}>
              Your browser does not support the
                  <code>audio</code> element.
                </audio>

          </figure>
        );
      }))} */}
      </div>
  )};

export default Favorite;
