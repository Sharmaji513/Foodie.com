import React from 'react';
import '../components/WidgetsList.css';
import { WIDGETS_IMG } from '../utils/constents';



const WidgetsList = (props) => {
  const {listOfwidgets} = props;
  // console.log(props)

  const imageId = listOfwidgets?.imageId;
  // console.log(imageId)

  return (
    <div className='widgets-container'>
      <div className='widget-card'>
        {imageId ? (
          <img  src={`${WIDGETS_IMG}${imageId}`} alt="Widget" className="widget-image" />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <hr />
    </div>
  );
};

export default WidgetsList;
