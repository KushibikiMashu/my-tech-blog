// @flow strict
export type Post = {
  title: string;
  path: string;
}

export const posts: Post[] = [
  {
    title: 'Next.jsのISRを使ってスプレッドシートをデータソースにして業務フローを変えた話',
    slug: '/nextjs-isr-spreadsheet',
  },
  {
    title: 'テスト駆動開発（TDD）とは何か。コードで実践方法を解説します',
    slug: '/test-driven-development/',
  },
  {
    title: 'Next.js + esa.io + VercelでJAMStackな爆速ブログを構築する',
    slug: '/nextjs-with-cms-esa/',
  },
  {
    title: '弁護士ドットコムライブラリーのフロントエンドのアーキテクチャ（Next.js + TypeScript）',
    slug: '/bengo4com-library-frontend',
  },
  {
    title: 'jQueryの作者による「毎日コードを書く」習慣の効果と自分で半年やってみた感想',
    slug: '/write-code-every-day',
  },
].map((post) => ({ ...post, path: `/posts${post.slug}` }));

export const zennPosts: Post[] = [
  {
    title: 'React を深く知るための入り口',
    slug: '/deep-dive-into-react'
  },
  {
    title: 'Next.jsに「できるだけ」依存しないReactアプリケーションの構成',
    slug: '/nextjs-architecture',
  },
  {
    title: 'Next.jsのルーティングにTypeScriptで型をつけたい',
    slug: '/typescript-nextjs-routing',
  },
  {
    title: 'Reactコンポーネントの抽象化とインターフェースのリファクタリング',
    slug: '/interface-and-refactoring',
  },
].map((post) => ({ ...post, path: `/panda_program/articles${post.slug}` }));
