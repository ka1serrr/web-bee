import { ProfileNavigationData } from '@/components/UI/ProfileNavigation/types';
const imgSrc = 'img/profile/navigation'

export const settingsNavigationData: ProfileNavigationData[] = [
  {
    img: `${imgSrc}/events.svg`,
    text: 'Events',
    link: '/events',
    color: '#FFFFFF',
    colorBg: '#47B091',
    notifications: 45
  },
  {
    img: `${imgSrc}/settings.svg`,
    text: 'Account settings',
    link: '/settings',
  }
]