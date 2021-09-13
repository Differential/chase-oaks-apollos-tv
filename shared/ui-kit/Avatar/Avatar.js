import React from 'react';
import PropTypes from 'prop-types';

import { PressableBox, systemPropTypes } from 'shared/ui-kit';

function Avatar(props = {}) {
  return (
    <PressableBox {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clipRule="evenodd"
        />
      </svg>
    </PressableBox>
  );
}

Avatar.propTypes = {
  ...systemPropTypes,
  onPress: PropTypes.func,
};

export default Avatar;