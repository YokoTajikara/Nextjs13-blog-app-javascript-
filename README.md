This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Next(SSR), Strapi, GraphQLでブログの雛形を作成
strapi-grapQLブランチでNext(SSR), Strapi, GraphQLでブログの雛形を作成しました。
MUIを使ってページネーションのカスタマイズも作成しました。

**strapi-grapQL**ブランチをクローンすること。
完成したものの確認画面（カスタマイズしたページネーションを含む）

http://localhost:3000/articles/

http://localhost:3000/articles/pages/4

※トップページのページネーションは静的なので動かない
http://localhost:3000/

(マスターブランチはsupabaseと連携している。apiのエンドポイントが参考になるのでマージしないで残しておく。)


### frontendのローカル環境
Udemy/food-delivery-udemy/frontend-test/next13-tailwindcss-blog-js

### backendのローカル環境
Udemy/food-delivery-udemy/backend
```
npm run develop
```
で起動してhttp://localhost:1337/
にアクセスする



[参考 strapi graphQL SSR](https://www.apollographql.com/blog/how-to-use-apollo-client-with-next-js-13#next-js-server-components-cache)

[参考 strapi graphQL SPA](https://strapi.io/blog/how-to-build-a-to-do-app-using-next-js-and-strapi)

[参考 strapi graphQL pagination](https://docs.strapi.io/dev-docs/api/graphql#pagination-by-page))

[参考　MUI pagination](https://mui.com/material-ui/react-pagination/)

[参考　MUI paginationスタイルカスタマイズ](https://mui.com/material-ui/api/pagination/#css)
