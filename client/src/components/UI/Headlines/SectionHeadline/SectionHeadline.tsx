import { Link } from 'react-router-dom';

import classes from './SectionHeadline.module.css';

interface Props {
  title: string;
  link: string;
}

export const SectionHeadline = (props: Props): JSX.Element => {
  return (
    <Link to={props.link}>
      <div className={classes.SectionHeadline}>{props.title}</div>
    </Link>
  );
};
