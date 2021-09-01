import React, {useState} from "react";
import GenerateSound from "../utils/generateRandSound";
import { QUERY_SOUNDS } from "../utils/queries";
import {ADD_USER_SOUND} from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import {useHistory} from "react-router-dom"
import { Button } from "reactstrap";


const Explore = () => {
  const [savedSounds, setSavedSounds] = useState({
    
  })
  const history = useHistory();


  const { loading, data } = useQuery(QUERY_SOUNDS, {
    fetchPolicy: "no-cache",
  });
  const soundList = data?.sounds || [];
 
  




  const [addUserSound, { error }] = useMutation(ADD_USER_SOUND);

  const handleClick = async (id) => {
    console.log(id)
    try {
      const { data } = await addUserSound({
        variables: { id },
      });

      history.push(`/favorites/${data.addUserSound._id}`);
    } catch (err) {
      console.error(err);
    }
  };




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
                <audio controls src={sound.link}>
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
                <Button onClick={() => handleClick(sound._id)}>Add</Button>
              </figure>
            );
          })}
          {error && <div>Something went wrong...</div>}
        </div>
      )}
      ;
    </div>
  );
};

export default Explore;
