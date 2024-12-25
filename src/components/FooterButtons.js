import React from 'react';
import styled from 'styled-components';

const FooterButtons = () => {
  return (
    <StyledWrapper>
      <div className="links">
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" id="instagram" className="icons-social-media"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" id="facebook" className="icons-social-media">
          <path d="M504 256C504 119 395 10 256 10S8 119 8 256c0 123.5 90.8 226.5 208 243v-172h-62v-71h62v-54c0-61.5 36-95.5 90.5-95.5 26 0 53 4 53 4v58h-29.8C309 100 288 116 288 145v54h72l-11 71h-61v172c117.2-16.5 208-119.5 208-243z" />
        </svg>
        <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" id="youtube" className="icons-social-media"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg></div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  .links {
    display: flex;
    gap: 10px;
  }

  .icons-social-media {
    align-items: center;
    margin-top: 10px;
    padding: 5px;
    width: 32px;
    cursor: pointer !important;
    transition: 300ms all ease-in-out;
    position: relative;
  }

  .icons-social-media:hover {
    translate: -0px -10px;
  }

  #instagram,
      #youtube,#facebook {
    transition: 300ms all ease-in-out;
    clip-path: circle(65%);
  }

  #instagram:hover {
    background-color: rgb(221, 157, 189);
  }

  #youtube {
    height: 35px;
  }

  #youtube:hover {
    background-color: rgb(241, 96, 96);
  }

  #facebook:hover {
    background-color: rgb(59, 89, 152);
  }`;

export default FooterButtons;
