import { Parallax } from 'react-parallax';
import Sattellite from "../images/sattellite.png"

const ImageTwo = () => (
    <Parallax className='image' bgImage={Sattellite}  strength={800}>
        <div className='content'>
            <span className='image-txt'>
                A trip to space.
            </span>
        </div>
    </Parallax>
);

export default ImageTwo