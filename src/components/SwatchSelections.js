import React from 'react';
import classes from './SwatchSelections.module.scss';

const SwatchSelections = ({ updateSelectedColor, updateSelectedTexture }) => {
  const colors = [
    '#0d0b08',
    '#45392a',
    '#cd950c',
    '#cd9b9b',
    '#8000ff',
  ];
  const textures = [
    'denim.jpg',
    'fabric.jpg',
    'fabric_stripe.jpg',
    'pattern.jpg',
    'wood.jpg',
  ];
  return (
    <div className={classes.selections} >
      {colors.map((color) =>
        <div
          key={color}
          className={classes.swatch}
          style={{ background: color }}
          onClick={() => updateSelectedColor(color)}>
        </div>
      )}
      {textures.map((texture) =>
        <div
          key={texture}
          className={classes.swatch}
          onClick={() => updateSelectedTexture(texture)}>
          <img className={classes.texture} src={`textures/${texture}`} alt={texture} />
        </div>
      )}
    </div>
  );
};

export default SwatchSelections;