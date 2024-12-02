import React from 'react';
import styled from 'styled-components';

const AboutButtons = () => {
  return (
    <StyledWrapper>
      <div className="links">
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" id="instagram" className="icons-social-media">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6-7.8 34.7-22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" id="linkedin" className="icons-social-media">
          <path d="M100.28 448H7.4V148.9h92.88zm-46.32-342C24.9 106 0 81.13 0 53.17A53.2 53.2 0 0153.29 0c29.32 0 53.18 23.7 53.18 53.17s-23.86 52.8-53.51 52.8zm394.72 342h-92.68V312.33c0-32.35-11.6-54.4-40.6-54.4-22.14 0-35.32 14.85-41.13 29.23-2.11 5.2-2.65 12.43-2.65 19.7V448h-92.88s1.21-236.16 0-260.8h92.88v36.9c-.18.3-.44.6-.65.9h.65v-.9c12.35-18.92 34.45-45.96 84-45.96 61.33 0 107.2 39.83 107.2 125.31zm-102.58-309.4a48 48 0 1048-48 48 48 0 00-48 48z" />
        </svg>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" id="facebook" className="icons-social-media">
          <path d="M504 256C504 119 395 10 256 10S8 119 8 256c0 123.5 90.8 226.5 208 243v-172h-62v-71h62v-54c0-61.5 36-95.5 90.5-95.5 26 0 53 4 53 4v58h-29.8C309 100 288 116 288 145v54h72l-11 71h-61v172c117.2-16.5 208-119.5 208-243z" />
        </svg>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row;

  .links {
    display: flex;
    gap: 10px;
  }

  .icons-social-media {
    align-items: center;;
    padding: 5px;
    width: 32px;
    margin-left: 10px
    cursor: pointer !important;
    transition: 300ms all ease-in-out;
    position: relative;
  }

  .icons-social-media:hover {
    translate: -0px -10px;
  }

  #instagram:hover {
    background-color: rgb(221, 157, 189);
  }

  #linkedin:hover {
    background-color: rgb(0, 119, 181);
  }

  #facebook:hover {
    background-color: rgb(59, 89, 152);
  }
`;

export default AboutButtons;
