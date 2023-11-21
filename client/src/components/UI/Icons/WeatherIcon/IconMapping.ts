import { IconKey } from 'skycons-ts';

export interface WeatherCondition {
  code: number;
  icon: {
    day: IconKey;
    night: IconKey;
  }
}

export enum TimeOfDay {
  day,
  night
}

export class IconMapping {
  private conditions: WeatherCondition[] = [
    {
      code: 1000,
      icon: {
        day: 'clear-day',
        night: 'clear-night'
      }
    },
    {
      code: 1003,
      icon: {
        day: 'partly-cloudy-day',
        night: 'partly-cloudy-night'
      }
    },
    {
      code: 1006,
      icon: {
        day: 'cloudy',
        night: 'cloudy'
      }
    },
    {
      code: 1009,
      icon: {
        day: 'cloudy',
        night: 'cloudy'
      }
    },
    {
      code: 1030,
      icon: {
        day: 'fog',
        night: 'fog'
      }
    },
    {
      code: 1063,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
    },
    {
      code: 1066,
      icon: {
        day: 'snow-day',
        night: 'snow-night'
      }
    },
    {
      code: 1069,
      icon: {
        day: 'rain-snow-day',
        night: 'rain-snow-night'
      }
    },
    {
      code: 1072,
      icon: {
        day: 'sleet',
        night: 'sleet'
      }
    },
    {
      code: 1087,
      icon: {
        day: 'thunder-day',
        night: 'thunder-night'
      }
    },
    {
      code: 1114,
      icon: {
        day: 'snow',
        night: 'snow'
      }
    },
    {
      code: 1117,
      icon: {
        day: 'snow',
        night: 'snow'
      }
    },
    {
      code: 1135,
      icon: {
        day: 'fog',
        night: 'fog'
      }
    },
    {
      code: 1147,
      icon: {
        day: 'fog',
        night: 'fog'
      }
    },
    {
      code: 1150,
      icon: {
        day: 'rain',
        night: 'rain'
      }
    },
    {
      code: 1153,
      icon: {
        day: 'rain',
        night: 'rain'
      }
    },
    {
      code: 1168,
      icon: {
        day: 'sleet',
        night: 'sleet'
      }
    },
    {
      code: 1171,
      icon: {
        day: 'sleet',
        night: 'sleet'
      }
    },
    {
      code: 1180,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
    },
    {
      code: 1183,
      icon: {
        day: 'rain',
        night: 'rain'
      }
    },
    {
      code: 1186,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
    },
    {
      code: 1189,
      icon: {
        day: 'rain',
        night: 'rain'
      }
    },
    {
      code: 1192,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
    },
    {
      code: 1195,
      icon: {
        day: 'rain',
        night: 'rain'
      }
    },
    {
      code: 1198,
      icon: {
        day: 'sleet',
        night: 'sleet'
      }
    },
    {
      code: 1201,
      icon: {
        day: 'sleet',
        night: 'sleet'
      }
    },
    {
      code: 1204,
      icon: {
        day: 'rain-snow',
        night: 'rain-snow'
      }
    },
    {
      code: 1207,
      icon: {
        day: 'rain-snow',
        night: 'rain-snow'
      }
    },
    {
      code: 1210,
      icon: {
        day: 'snow-day',
        night: 'snow-night'
      }
    },
    {
      code: 1213,
      icon: {
        day: 'snow',
        night: 'snow'
      }
    },
    {
      code: 1216,
      icon: {
        day: 'snow-day',
        night: 'snow-night'
      }
    },
    {
      code: 1219,
      icon: {
        day: 'snow',
        night: 'snow'
      }
    },
    {
      code: 1222,
      icon: {
        day: 'snow-day',
        night: 'snow-night'
      }
    },
    {
      code: 1225,
      icon: {
        day: 'snow',
        night: 'snow'
      }
    },
    {
      code: 1237,
      icon: {
        day: 'hail',
        night: 'hail'
      }
    },
    {
      code: 1240,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
    },
    {
      code: 1243,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
    },
    {
      code: 1246,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
    },
    {
      code: 1249,
      icon: {
        day: 'rain-snow-day',
        night: 'rain-snow-night'
      }
    },
    {
      code: 1252,
      icon: {
        day: 'rain-snow-day',
        night: 'rain-snow-night'
      }
    },
    {
      code: 1255,
      icon: {
        day: 'snow-day',
        night: 'snow-night'
      }
    },
    {
      code: 1258,
      icon: {
        day: 'snow-day',
        night: 'snow-night'
      }
    },
    {
      code: 1261,
      icon: {
        day: 'hail',
        night: 'hail'
      }
    },
    {
      code: 1264,
      icon: {
        day: 'hail',
        night: 'hail'
      }
    },
    {
      code: 1273,
      icon: {
        day: 'thunder-rain-day',
        night: 'thunder-rain-night'
      }
    },
    {
      code: 1276,
      icon: {
        day: 'thunder-rain',
        night: 'thunder-rain'
      }
    },
    {
      code: 1279,
      icon: {
        day: 'thunder-day',
        night: 'thunder-night'
      }
    },
    {
      code: 1282,
      icon: {
        day: 'thunder',
        night: 'thunder'
      }
    }
  ];

  mapIcon(weatherStatusCode: number, timeOfDay: TimeOfDay): IconKey {
    const mapping = this.conditions.find((condition: WeatherCondition) => condition.code === weatherStatusCode);

    if (mapping) {
      if (timeOfDay === TimeOfDay.day) {
        return mapping.icon.day;
      } else if (timeOfDay === TimeOfDay.night) {
        return mapping.icon.night;
      }
    }

    return 'clear-day';
  }
}