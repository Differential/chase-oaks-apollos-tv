/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import App from '../../shared/components/App';

it('renders correctly', () => {
  renderer.create(<App />);
});
