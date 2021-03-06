import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { Card, systemPropTypes, utils } from 'shared/ui-kit';
import Styled from './Menu.styles';

function Menu(props = {}) {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (props.closeOnDocumentClick) {
      const close = (event) => {
        if (!containerRef?.current?.contains(event.target)) setVisible(false);
      };
      document.addEventListener('mousedown', close);
      return () => document.removeEventListener('mousedown', close);
    }
    return null;
  }, [props.closeOnDocumentClick]);

  function toggle(event) {
    event.preventDefault();
    setVisible(!visible);
  }

  return (
    <Styled ref={containerRef} {...props}>
      {props.renderTrigger ? (
        <Styled.Toggle>{props.renderTrigger({ toggle })}</Styled.Toggle>
      ) : null}
      {visible ? (
        <Styled.Content side={props.side} width={props.menuWidth}>
          <Card
            p="xs"
            {...props.cardProps}
            contentProps={props.cardContentProps}
          >
            {typeof props.children === 'function'
              ? props.children(toggle)
              : props.children}
          </Card>
        </Styled.Content>
      ) : null}
    </Styled>
  );
}

Menu.propTypes = {
  ...systemPropTypes,
  cardProps: PropTypes.shape({
    ...systemPropTypes,
  }),
  cardContentProps: PropTypes.shape({
    ...systemPropTypes,
  }),
  closeOnDocumentClick: PropTypes.bool,
  menuWidth: PropTypes.string,
  renderTrigger: PropTypes.func.isRequired,
  side: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
};

Menu.defaultProps = {
  cardProps: {
    boxShadow: 'medium',
  },
  closeOnDocumentClick: true,
  menuWidth: utils.rem('250px'),
};

Menu.Link = Styled.Link;

export default Menu;
