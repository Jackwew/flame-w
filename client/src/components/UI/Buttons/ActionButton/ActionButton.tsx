import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import classes from './ActionButton.module.css';
import { Icon } from '../..';

interface Props {
  name: string;
  icon: string;
  link?: string;
  handler?: () => void;
}

export const ActionButton = (props: Props): JSX.Element => {
  const body = (
    <Fragment>
      <div className={classes.ActionButtonIcon}>
        <Icon icon={props.icon} />
      </div>
      <div className={classes.ActionButtonName}>{props.name}</div>
    </Fragment>
  );

  if (props.link) {
    return (
      <Link to={props.link} tabIndex={0}>
        {body}
      </Link>
    );
  } else if (props.handler) {
    return (
      <div
        className={classes.ActionButton}
        onClick={props.handler}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && props.handler) props.handler();
        }}
        tabIndex={0}
      >
        {body}
      </div>
    );
  } else {
    return <div className={classes.ActionButton}>{body}</div>;
  }
};
