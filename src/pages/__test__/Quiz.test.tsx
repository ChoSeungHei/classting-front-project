import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { Quiz } from '../Quiz';
import '@testing-library/jest-dom';
//import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

//jest.mock('axios');

test('API 호출 후 버튼 동작 확인', async () => {
  render(
    <Router>
      <Quiz />
    </Router>,
  );

  //   (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
  //     data: {
  //       results: [
  //         {
  //           name: {
  //             first: 'ali',
  //           },
  //         },
  //         {
  //           name: {
  //             first: 'abu',
  //           },
  //         },
  //       ],
  //     },
  //   });

  const button = screen.getByRole('radio', { name: 'answer' });

  fireEvent.click(button);

  expect(button).toBeDisabled();
});
