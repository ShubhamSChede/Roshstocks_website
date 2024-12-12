import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PageLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or use actual loading logic
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust timeout as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <StyledWrapper>
        <div className="loader-container">
          <div className="loader" />
        </div>
      </StyledWrapper>
    );
  }

  return children;
}

const StyledWrapper = styled.div`
  .loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 9999;
  }

  .loader {
    width: 50px;
    aspect-ratio: 1.154;
    position: relative;
    background: conic-gradient(
      from 120deg at 50% 64%,
      #0000,
      #ff1919 1deg 120deg,
      #0000 121deg
    );
    animation: l27-0 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
  }

  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    transform-origin: 50% 66%;
    animation: l27-1 1.5s infinite;
  }

  .loader:after {
    --s: -1;
  }

  @keyframes l27-0 {
    0%,
    30% {
      transform: rotate(0);
    }

    70% {
      transform: rotate(120deg);
    }

    70.01%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes l27-1 {
    0% {
      transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
    }

    30%,
    70% {
      transform: rotate(calc(var(--s, 1) * 120deg))
        translate(calc(var(--s, 1) * -5px), 10px);
    }

    100% {
      transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
    }
  }
`;

export default PageLoader;