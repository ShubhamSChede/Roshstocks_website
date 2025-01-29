import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Button = () => {
  return (
    <StyledWrapper>
      <Link href="/categories">
        <button>Explore Categories</button>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    padding: 0.8em 1.8em;
    border: 2px solid #FF0072;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    transition: 0.3s;
    z-index: 1;
    font-family: inherit;
    color: #FF0072;
    font-weight: bold;
    cursor: pointer;
  }

  button::before {
    content: '';
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: #FF0072;
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }

  button:hover::before {
    width: 105%;
  }

  button:hover {
    color: #111;
  }
`;


const ExploreCategoryButton = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Button />
    </div>
  );
};

export default ExploreCategoryButton;
