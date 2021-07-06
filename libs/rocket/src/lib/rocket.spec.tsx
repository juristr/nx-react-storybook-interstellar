import { render } from '@testing-library/react';

import Rocket from './rocket';

describe('Rocket', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rocket />);
    expect(baseElement).toBeTruthy();
  });
});
