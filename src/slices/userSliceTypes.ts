export interface InitialState {
  img: string;
  name: string;
  job: string;
  socialNets: SocialNet[];
}

interface SocialNet {
  img: 'img/profile/tg.svg' | 'img/profile/hh.svg' | 'img/profile/tw.svg';
  link: 'tg' | 'hh' | 'tw';
}
