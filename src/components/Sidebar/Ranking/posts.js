// @flow strict
export type Post = {
  title: string;
  path: string;
}

export const posts: Post[] = [
  {
    title: 'Next.jsのISRを使ってスプレッドシートをデータソースにして業務フローを変えた話',
    path: '/posts/nextjs-isr-spreadsheet',
  },
  {
    title: 'テスト駆動開発（TDD）とは何か。コードで実践方法を解説します',
    path: '/posts/test-driven-development/',
  },
  {
    title: 'Next.js + esa.io + VercelでJAMStackな爆速ブログを構築する',
    path: '/posts/nextjs-with-cms-esa/',
  },
  {
    title: '弁護士ドットコムライブラリーのフロントエンドのアーキテクチャ（Next.js + TypeScript）',
    path: '/posts/bengo4com-library-frontend',
  },
  {
    title: 'jQueryの作者による「毎日コードを書く」習慣の効果と自分で半年やってみた感想',
    path: '/posts/write-code-every-day',
  },
];

export const zennPosts: Post[] = [
  {
    title: 'Next.jsのルーティングにTypeScriptで型をつけたい',
    path: '/panda_program/articles/typescript-nextjs-routing',
  },
  {
    title: 'Reactコンポーネントの抽象化とインターフェースのリファクタリング',
    path: '/panda_program/articles/interface-and-refactoring',
  },
];
