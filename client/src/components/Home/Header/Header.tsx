import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
import { State } from '../../../store/reducers';

// CSS
import classes from './Header.module.css';

// Components
import { WeatherWidget } from '../../Widgets/WeatherWidget/WeatherWidget';

// Utils
import { getDateTime } from './functions/getDateTime';
import { greeter } from './functions/greeter';
import axios from 'axios';
import { ApiResponse } from '../../../interfaces';

import { ONE_SENTENCE } from '../../../types';
import { Spinner } from '../../UI';

export const Header = (): JSX.Element => {
  const { hideHeader, hideDate, showTime } = useSelector(
    (state: State) => state.config.config
  );

  const [dateTime, setDateTime] = useState<string>(getDateTime());
  const [greetLoading, setGreetLoading] = useState<boolean>(false);
  const [greeting, setGreeting] = useState<ONE_SENTENCE>({
    day: '',
    en: 'Talk is cheap, Show me the code.',
    month: '',
    pic: '',
    zh: '别逼逼，让我看看你的内裤',
  });

  const getDayEnglish = async () => {
    setGreetLoading(true)
    const { data } = await axios.get<ApiResponse<any>>(
      'https://api.vvhan.com/api/en?type=sj'
    );
    setGreetLoading(false)
    if (data?.success) {
      setGreeting(data?.data);
    }
  };

  useEffect(() => {
    getDayEnglish();
  }, []);

  useEffect(() => {
    let dateTimeInterval: NodeJS.Timeout | any;

    dateTimeInterval = setInterval(() => {
      setDateTime(getDateTime());
      // setGreeting(greeter());
    }, 1000);

    return () => window.clearInterval(dateTimeInterval);
  }, []);

  return (
    <header className={classes.Header}>
      {(!hideDate || showTime) && <p>{dateTime}</p>}

      <Link to="/settings" className={classes.SettingsLink}>
        Go to Settings
      </Link>

      {!hideHeader && (
        <span className={classes.HeaderMain}>
          {!greetLoading ? (
            <div className={classes.greetingBox}>
              <p className={classes.dayEnglish}>{greeting?.en}</p>
              <p>{greeting?.zh}</p>
            </div>
          ) : (
            <Spinner />
          )}
          <WeatherWidget />
        </span>
      )}
    </header>
  );
};
