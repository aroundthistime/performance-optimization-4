import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setBgColor, showModal } from '../redux/imageModal';
import { getAverageColorOfImage } from '../utils/getAverageColorOfImage';

function PhotoItem({ photo: { urls, alt } }) {
  const dispatch = useDispatch();

  const openModal = (event) => {
    dispatch(showModal({ src: urls.full, alt }));

    // Use image with smaller resolution to reduce computation payload
    const imageAverageColor = getAverageColorOfImage(event.target);
    dispatch(setBgColor(imageAverageColor))
  };

  return (
    <ImageWrap>
      <Image src={urls.small + '&t=' + new Date().getTime()} alt={alt} onClick={openModal} crossOrigin='*'/>
    </ImageWrap>
  );
}

const ImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
`;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
`;

export default PhotoItem;
