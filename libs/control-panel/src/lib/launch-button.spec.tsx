import { render } from '@testing-library/react';

import ControlPanel from './control-panel';

describe('ControlPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ControlPanel />);
    expect(baseElement).toBeTruthy();
  });
});
