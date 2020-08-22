import React from 'react';
import classNames from 'classnames/bind';
import classes from './SwatchSelections.module.scss';

const SwatchSelections = ({ updateSelectedColor, updateSelectedTexture, activePart }) => {
  const c = classNames.bind(classes);
  const colors = [
    '#0d0b08',
    '#45392a',
    '#cd950c',
    '#cd9b9b',
    '#4169e1',
  ];
  const textures = [
    'wood.jpg',
    'denim.jpg',
    'fabric.jpg',
    'fabric_stripe.jpg',
    'pattern.jpg',
  ];

  const isDisabled = (texture) => {
    if (activePart === 'leg') {
      if (texture !== 'wood.jpg') {
        return true;
      }
    }
    return false;
  };

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
          className={classNames(classes.swatch, c({ 'disabled': isDisabled(texture) }))}
          onClick={() => updateSelectedTexture(texture)}>
          <img
            className={classes.texture}
            src={`textures/${texture}`}
            alt={texture} />
        </div>
      )}
    </div>
  );
};

export default SwatchSelections;