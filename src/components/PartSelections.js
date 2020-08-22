import React, { useState } from 'react';
import classNames from 'classnames/bind';
import classes from './PartSelections.module.scss';

const PartSelections = ({ updateSelectedPart }) => {
  const [isCushionActive, setCushionActive] = useState(true);
  const c = classNames.bind(classes);
  const onPartUpdate = () => {
    updateSelectedPart(isCushionActive ? 'leg' : 'cushion')
    setCushionActive(!isCushionActive);
  };

  return (
    <div className={classes.options} >
      <div
        key={'cushion'}
        className={classNames(classes.option, c({ 'active': isCushionActive }))}
        onClick={onPartUpdate} >
        <img
          className={classes.image}
          src='front_cushion.png' alt='cushion' />
      </div>
      <div
        key={'leg'}
        className={classNames(classes.option, c({ 'active': !isCushionActive }))}
        onClick={onPartUpdate} >
        <img
          className={classes.image}
          src='front_frame.png' alt='legs' />
      </div>
    </div>
  );
};

export default PartSelections;
