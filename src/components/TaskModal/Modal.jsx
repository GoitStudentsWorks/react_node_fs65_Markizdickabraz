import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import {animation} from '../../styles/variables';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1000;
  background-color: #ffffff;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 48px;
  padding-bottom: 40px;
  border: 1px solid #dce3e5cc;
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px #1111111a;
  
  transform: translate(-50%, -50%) scale(0.1);
  transition: transform ${animation};

  @media screen and (min-width: 768px) {
    padding-left: 28px;
    padding-right: 28px;
    padding-top: 40px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  border: none;
  outline: none;
  background: none;
  padding: 6px;
`;

const Modal = ({ close, children }) => {
  const containerRef = useRef();

  const closeHandler = evt => {
    close();
  };

  useEffect(() => {
    const escHandler = evt => {
      if (evt.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', escHandler);
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      containerRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 1);

    return () => {
      document.removeEventListener('keydown', escHandler);
      document.body.style.overflow = 'auto';
    };
  }, [close]);

  return (
    <Container ref={containerRef}>
      <CloseBtn onClick={closeHandler}>
        <GrClose size={12} />
      </CloseBtn>
      {children}
    </Container>
  );
};

export { Modal };
