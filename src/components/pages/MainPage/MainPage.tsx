import styles from './mainPage.module.scss';
import { Article } from '@/components/UI/Article/Article';
import { mainPageData } from './mainPageData';
import { MainPageArticle } from '@/components/pages/MainPage/types';
import { Profile } from '@/components/UI/Profile/Profile';

const Articles = () => {
  return (
    <>
      {mainPageData.map((item: MainPageArticle, index: number) => (
        <Article
          key={item.title}
          index={index}
          title={item.title}
          img={item.img}
          time={item.time}
          timeAgo={item.timeAgo}
          comment={item.comment}
          views={item.views}
          commentsNumber={item.commentsNumber}
          author={item.author}
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
