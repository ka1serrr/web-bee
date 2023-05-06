import { ProfileNavigationData } from './types';
const imgSrc = 'img/profile/navigation'
export const profileNavigationData: ProfileNavigationData[] = [
  {
    img: `${imgSrc}/person.svg`,
    text: 'My profile',
    link: '/profile'
  },
  {
    img: `${imgSrc}/balance.svg`,
    text: 'Balance',
    link: '/balance',
    color: '#8F8F8F',
    colorBg: '#FFFFFF',
    notifications: 1430,
    additionalString: '$'
  },
  {
    img: `${imgSrc}/connections.svg`,
    text: 'Connections',
    link: '/connections',
    color: '#FFFFFF',
    colorBg: '#E33939',
    notifications: 29,
  },
  {
    img: `${imgSrc}/friends.svg`,
    text: 'Friends',
    link: '/friends',
  }
]