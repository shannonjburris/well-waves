import React from 'react';
import { useQuery } from '@apollo/client';
import { Redirect, useParams } from 'react-router-dom';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import { useMutation } from "@apollo/client";
import { DELETE_USER_SOUND } from "../utils/mutations";
import {Button} from "reactstrap"

import Auth from '../utils/auth';

function Favorite() {
  const { email: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { email: userParam },
  });

  const user = data?.me || data?.user || {};
  const savedSounds = user.sounds;






  const [deleteUserSound, { error }] = useMutation(DELETE_USER_SOUND);

  const handleClick = async (id) => {
    try {
      console.log(id);
      const { data } = await deleteUserSound({
        variables: { soundData: id },
      });
      console.log(data);
      // history.push(`/favorites/${data.addUserSound._id}`);
    } catch (err) {
      console.error(err);
    }
  };







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
      <h1>Favorites</h1>
  
    {savedSounds.map((sound, index) => {
      return (
        <div className="sound-card">
          <figure key={sound._id}>
                <figcaption>Listen {sound.name}:</figcaption>
                <audio controls src={sound.link}>
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
                <Button onClick={() => handleClick(sound._id)} className="delete-button">-</Button>
          </figure>
        </div>
        )
    })}
    
      </div>
  )};

export default Favorite;
