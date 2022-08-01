import { render, screen } from '@testing-library/react';
import { Home } from '../Home';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Home />', () => {
  test("화면에 '퀴즈 게임'이라는 텍스트가 보이는지 테스트", () => {
    render(
      <Router>
        <Home />
      </Router>,
    );

    const text = screen.getByText('퀴즈 게임');
    expect(text).toBeInTheDocument();
  });
});
