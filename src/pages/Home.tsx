import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'style/Home.scss';

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let color = 0;
    const interval = setInterval(function () {
      const bgColor = ['#f2d7d9', '#d3cedf', '#9cb4cc', '#748da6'];
      color = (color + 1) % 4;
      document.body.style.backgroundColor = bgColor[color];
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div className="title">퀴즈 게임</div>
      <Button variant="primary" onClick={() => navigate(`/Quiz`)}>
        <div className="contents">퀴즈 풀기</div>
      </Button>
    </div>
  );
};
