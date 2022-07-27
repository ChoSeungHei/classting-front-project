import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { Chart } from 'component';
import 'style/Finish.scss';

export const Finish = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Card className="quiz-body">
        <Card.Header as="h5">Result</Card.Header>
        <Card.Body>
          <Card.Title>총 소요시간</Card.Title>
          <Card.Text>
            {sessionStorage.getItem('time')}
            {' 초'}
          </Card.Text>
          <Card.Title>정답수</Card.Title>
          <Card.Text>
            {sessionStorage.getItem('answer')}
            {' 개'}
          </Card.Text>
          <Card.Title>오답수</Card.Title>
          <Card.Text>
            {10 - Number(sessionStorage.getItem('answer'))}
            {' 개'}
          </Card.Text>
          <Chart />
          <Button variant="primary" onClick={() => navigate('/quiz')}>
            다시 풀기
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
