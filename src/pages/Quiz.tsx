import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';
import ReactLoading from 'react-loading';
import { Button, Card, Form } from 'react-bootstrap';
import { Check, X } from 'react-bootstrap-icons';
import { useEffectOnce, suffle } from 'utils/common';
import 'style/Quiz.scss';

interface QuizInfo {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}
export const Quiz = () => {
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState<QuizInfo[]>([]);
  const [example, setExample] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [checked, setChecked] = useState(-1);
  const bgColor = ['#f2d7d9', '#d3cedf', '#9cb4cc', '#748da6'];
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [answer, setAnswer] = useState(0);

  useEffectOnce(() => {
    sessionStorage.clear();
    document.body.style.backgroundColor = bgColor[current % 4];

    if (!loading) {
      axios
        .get('https://opentdb.com/api.php?amount=10')
        .then((Response) => {
          if (Response.data.response_code === 0) {
            setLoading(true);
            setQuiz(Response.data.results);
            const nonSuffle = [
              ...Response.data.results[current].incorrect_answers,
              Response.data.results[current].correct_answer,
            ];

            setExample(suffle(nonSuffle));
          }
        })
        .catch((Error) => {
          console.log(Error);
        });
    }

    const timer = setInterval(() => {
      setTimeElapsed((timeElapsed) => timeElapsed + 30);
    }, 30);

    return () => {
      clearInterval(timer);
    };
  });

  const handleChange = (e: any) => {
    const value = e.target.id;

    //정답 비교
    if (value === _.unescape(quiz[current].correct_answer)) {
      setCorrect(1);
      setAnswer(answer + 1);
    } else {
      setCorrect(2);
    }

    setChecked(e.target.value);
  };

  const handelNext = () => {
    document.body.style.backgroundColor = bgColor[(current + 1) % 4];

    setCurrent((prev) => prev + 1);
    setCorrect(0);
    setChecked(-1);
    const nonSuffle = [
      ...quiz[current + 1].incorrect_answers,
      quiz[current + 1].correct_answer,
    ];

    setExample(suffle(nonSuffle));
  };

  const handelFinish = () => {
    //
    sessionStorage.setItem('answer', String(answer));
    sessionStorage.setItem(
      'time',
      Math.floor(timeElapsed / 1000).toString() +
        '.' +
        Math.floor(timeElapsed / 1000).toString(),
    );

    navigate('/finish');
  };

  return (
    <div className="quiz-container">
      {loading ? (
        <Card className="quiz-body">
          <Card.Header>
            {current + 1}
            {'. '}
            {quiz[current].category}
          </Card.Header>
          <Card.Body>
            <Card.Title>{_.unescape(quiz[current].question)}</Card.Title>
            <Form>
              <div key={`default-radio`} className="mb-3">
                {example.map((value, key) => {
                  return correct === 0 ? (
                    <Form.Check
                      key={key}
                      type={`radio`}
                      id={_.unescape(value)}
                      value={key}
                      name={`answer`}
                      label={_.unescape(value)}
                      onChange={handleChange}
                      checked={checked == key}
                    />
                  ) : (
                    <Form.Check
                      key={key}
                      type={`radio`}
                      id={_.unescape(value)}
                      name={`answer`}
                      value={key}
                      label={_.unescape(value)}
                      onChange={handleChange}
                      checked={checked == key}
                      disabled
                    />
                  );
                })}
              </div>
            </Form>
            <div className="answer-container">
              <Check
                className={correct === 1 ? '' : 'hidden'}
                size={30}
                color={`green`}
              />
              <X
                className={correct === 2 ? '' : 'hidden'}
                size={30}
                color={`red`}
              />
              <div
                className={
                  correct !== 0
                    ? correct === 1
                      ? 'correct'
                      : 'in_correct'
                    : 'hidden'
                }
              >
                {'The answer is : '}
                {quiz[current].correct_answer}
              </div>

              {current !== 9 ? (
                <Button
                  className={correct !== 0 ? 'next-btn' : 'hidden'}
                  variant="primary"
                  onClick={handelNext}
                >
                  Next
                </Button>
              ) : (
                <Button
                  className={correct !== 0 ? 'next-btn' : 'hidden'}
                  variant="primary"
                  onClick={handelFinish}
                >
                  Finish
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      ) : (
        <ReactLoading
          type={'bubbles'}
          color={'#555'}
          height={100}
          width={100}
        />
      )}
    </div>
  );
};
