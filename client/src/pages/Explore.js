import React from 'react';
import GenerateSound from '../utils/generateRandSound';
import { QUERY_SOUNDS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Explore = () => {
  const { loading, data } = useQuery(QUERY_SOUNDS, {
    fetchPolicy: "no-cache"
  });
  const soundList = data?.sounds || [];

  return (
    <div>
      <p>There's a world of sound out there just waiting to be discovered.</p>
      <p>Click the button below to explore!</p>
      <GenerateSound />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="square">
          {soundList.map((sound) => {
            return (

              <figure key={sound._id}>
                <figcaption>Listen {sound.name}:</figcaption>
                <audio
                  controls
                  src= {sound.link}>
                  Your browser does not support the
            <code>audio</code> element.
    </audio>
              </figure>

            );
          })}
        </div>

      )
      };
       </div> 
  )}

export default Explore;
