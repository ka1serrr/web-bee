import styles from './mainPage.module.scss';
import { Article } from '@/components/UI/Article/Article';
import { mainPageData } from './mainPageData';
import { MainPageArticle } from '@/components/pages/MainPage/types';
import { Profile } from '@/components/UI/Profile/Profile';
import { useTimer } from '@/hooks/useTimer';

const Articles = () => {
  useTimer();
  return (
    <>
      {mainPageData.map((item: MainPageArticle, index: number) => (
        <Article
          key={item.title}
          index={index}
          title={item.title}
          img={item.img}
          timeAgo={item.timeAgo}
          comment={item.comment}
          views={item.views}
          commentsNumber={item.commentsNumber}
        />
      ))}
    </>
  );
};
const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.articles}>
            <Articles />
          </div>
          <div className={styles.profileAndSettings}>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
