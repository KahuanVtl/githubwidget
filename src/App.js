import React from 'react';
import Relogio from './Relogio'; // Importa o componente Relogio
import ImageCarousel from './photoCarrosel';

const images = [
  'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/8893/live/ac7e5c10-c12f-11ee-896d-39d9bd3cadbb.jpg.webp',
  'https://img.freepik.com/fotos-gratis/linda-borboleta-na-natureza_23-2150445580.jpg',
  'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'
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
