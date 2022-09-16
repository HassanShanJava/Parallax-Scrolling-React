import { Parallax } from 'react-parallax';
import Space from "../images/spaceStation.png"

const ImageThree = () => (
    <Parallax className='image' bgImage={Space}  strength={800}>
        <div className='content'>
            <span className='image-txt'>
                A trip to space.
            </span>
        </div>
    </Parallax>
);

export default ImageThree