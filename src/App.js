import React from 'react';
import Relogio from './Relogio'; // Importa o componente Relogio
import ImageCarousel from './photoCarrosel';

const images = [
  'https://thumbs2.imgbox.com/ad/46/n2v0psJP_t.jpg',
  'https://thumbs2.imgbox.com/1e/15/3CynN05C_t.jpg',
  'https://thumbs2.imgbox.com/ab/d3/6J0tiCav_t.jpg',
  'https://thumbs2.imgbox.com/90/b0/93ywlB60_t.jpg',
  'https://thumbs2.imgbox.com/af/b0/yBwwAXT2_t.jpg',
  'https://thumbs2.imgbox.com/52/fa/86AjTtJH_t.jpg',
  'https://thumbs2.imgbox.com/3a/1a/0xpKFEhD_t.jpg',
  'https://thumbs2.imgbox.com/3e/cb/oeSfH8x2_t.jpg',
  'https://thumbs2.imgbox.com/d3/09/IYzoI87m_t.jpg',
  'https://thumbs2.imgbox.com/a3/74/GNa9L1QH_t.jpg',
  'https://thumbs2.imgbox.com/8a/7f/Jzok1B8y_t.jpg',
  'https://thumbs2.imgbox.com/7c/f5/qWBMy4QV_t.jpg',
  'https://thumbs2.imgbox.com/2d/cc/CxHiAOsu_t.jpg',
  'https://thumbs2.imgbox.com/1d/cb/7xBCJlVD_t.jpg',
  'https://thumbs2.imgbox.com/0a/82/DlGglbwB_t.jpg',
  'https://thumbs2.imgbox.com/d0/fb/VMCvPA7Z_t.jpg',
  'https://thumbs2.imgbox.com/e5/f6/AMnU2IUX_t.jpg',
  'https://thumbs2.imgbox.com/04/f8/13H0RAKX_t.jpg',
  'https://thumbs2.imgbox.com/1d/39/59Vdc1tz_t.jpg',
  'https://thumbs2.imgbox.com/d5/11/cPGXQArd_t.jpg',
  'https://thumbs2.imgbox.com/56/c7/vDaccKiA_t.jpg',
  'https://thumbs2.imgbox.com/86/bb/IX5VrDho_t.jpg',
  'https://thumbs2.imgbox.com/ab/99/be7vEIcK_t.jpg'
];

function App() {
  return (
    <div className="App">
      {/* <Relogio /> */}
      <ImageCarousel images={images} interval={3000} />
    </div>
  );
}

export default App;
