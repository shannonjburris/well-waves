import React from "react";
import { QUERY_SOUNDS } from "../utils/queries";
import { ADD_USER_SOUND } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import { Button } from "reactstrap";

const Study = () => {
  const { data } = useQuery(QUERY_SOUNDS, {
    fetchPolicy: "no-cache",
  });
  const soundList = data?.sounds || [];

  const [addUserSound] = useMutation(ADD_USER_SOUND);

  const handleClick = async (id) => {
    try {
      console.log(id);
      const { data } = await addUserSound({
        variables: { soundData: id },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
   

    <div>
        <h1>Study</h1>
      {soundList
        .filter((sound) => sound.tags.includes('study'))
        .map((filteredSounds) => {
            console.log(filteredSounds)
          return (
            <figure key={filteredSounds._id}>
              <figcaption>Listen {filteredSounds.name}:</figcaption>
              <audio controls src={filteredSounds.link}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
              <Button
                onClick={() => handleClick(filteredSounds._id)}
                className="add-button"
              >
                +
              </Button>
            </figure>
          );
        })}
    </div>
  );
};

export default Study;