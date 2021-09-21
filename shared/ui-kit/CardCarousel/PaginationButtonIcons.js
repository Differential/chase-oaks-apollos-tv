import { Box, systemPropTypes } from 'shared/ui-kit';

const PrevIcon = (props = {}) => (
  <Box {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </Box>
);

PrevIcon.propTypes = systemPropTypes;

const NextIcon = (props = {}) => (
  <Box {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </Box>
);
NextIcon.propTypes = systemPropTypes;

export { PrevIcon, NextIcon };
