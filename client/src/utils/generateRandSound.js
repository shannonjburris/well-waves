import React from 'react';
import Explore from '../pages/Explore';

const generateSound = (props) => {
    <div id='randomSound'>
        <div>
            <script>
                document.getElementById("randomSound").innerHTML =
                Math.floor(Math.random() * 100);
                console.log(randomSound);
            </script>
        </div>
    </div>
}
export default generateSound;