import { useEffect } from 'react';
import one from '../images/parallax/1.png';
import two from '../images/parallax/2.png';
import three from '../images/parallax/3.png';
import four from '../images/parallax/4.png';
import five from '../images/parallax/5.png';
import six from '../images/parallax/6.png';
import seven from '../images/parallax/7.png';

import '../blocks/parallax/parallax.css'

export default function Parallax() {
  useEffect(() => {
    window.addEventListener('load', () => {
      const scene = document.querySelector('.parallax');
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight

      window.addEventListener('mousemove', (e) => {
        console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
        const centerX = windowWidth / 2;
        const centerY = windowHeight / 2;
        const coefficient = 70;

        scene.style.transform = `
    rotateX(${Math.round((e.clientY - centerY) / coefficient) * -1}deg)
    rotateY(${Math.round((e.clientX - centerX) / coefficient)}deg)
    `;
      })
    })
  })

  return (
    <div className="parallax">
      {/* <button className='parallax__layer parallax__button' type='button' /> */}
      <img className="parallax__layer parallax__layer-one" src={one} alt="Картина" />
      <img className="parallax__layer parallax__layer-two" src={two} alt="Картина" />
      <img className="parallax__layer parallax__layer-three" src={three} alt="Картина" />
      <img className="parallax__layer parallax__layer-four" src={four} alt="Картина" />
      <img className="parallax__layer parallax__layer-five" src={five} alt="Картина" />
      <img className="parallax__layer parallax__layer-six" src={six} alt="Картина" />
      <img className="parallax__layer parallax__layer-seven" src={seven} alt="Картина" />
    </div>
  );
}