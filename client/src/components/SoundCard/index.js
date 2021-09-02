import React from 'react';
import {
    Card, CardImg, CardBody,
} from 'reactstrap';
import { QUERY_SOUNDS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const SoundCard = () => {
    const { data } = useQuery(QUERY_SOUNDS, {
        fetchPolicy: "no-cache"
    });
    const soundList = data?.sounds || [];
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="/assets/img/Music-Logo.jpg" alt="Card image cap" />
                <CardBody>
                    <div>
                        {soundList.map((sound) => {
                             console.log("display card")
                            return (
                                <figure key={sound._id}>
                                    <figcaption>Listen {sound.name}:</figcaption>
                                    <audio
                                        controls
                                        src={sound.link}>
                                        Your browser does not support the
                                        <code>audio</code> element.
                                    </audio>
                                </figure>
                            )}
                        )};
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default SoundCard;