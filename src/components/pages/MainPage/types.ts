export interface MainPageArticle {
  title: string;
  img: string;
  timeAgo: number;
  views: number;
  commentsNumber: number;
  comment: Comment;
}
// commentsNumber оставлю пока, потому что данные с бека не приходит, поэтому comments.length не получится использовать

export interface IOpenedArticle {
  img: string;
  views: number;
  commentsNumber: number;
  comment: Comment;
}
// У меня особо не опыта в TS, поэтому пока не очень понимаю, как можно было бы оптимизировать этот интерфейс и MainPageArticle

export interface IClosedArticle {
  title: string;
  timeAgo: number;
}

interface Comment {
  time: string;
  author: string;
  commentText: string;
}
