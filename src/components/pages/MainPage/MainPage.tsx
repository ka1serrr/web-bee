import styles from './mainPage.module.scss';
import { Article } from '@/components/UI/Article/Article';
import { mainPageData } from './mainPageData';
import { MainPageArticle } from '@/components/pages/MainPage/types';

const Content = () => {
  return (
    <>
      {mainPageData.map((item: MainPageArticle, index: number) => (
        <Article
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
        <Content />
      </div>
    </div>
  );
};

export default MainPage;
