# WomEmpSports

Website for the international WomEmpSports non-profit project.

## Tech Stack:
- Backend: WordPress Headless CMS
- Frontend: Next.js w/ Chakra UI in Typescript
- Data Fetching: GraphQL w/ WPGraphQL, GraphQL Code Generator, and Next.js Incremental Static Regeneration
- Localization: Next.js Internationalization (i18n) and Polylang
- Linting & Formatting: ESlint and Prettier
- Hosting: Vercel (front-end) and Hostinger (back-end)
- CI: Automatic FTP deploy to WordPress host and Vercel

## Contents:
- Pages:
  - Homepage: Shows project description and partners information with descriptions, logos, and links.
  - News: Shows a list of blog posts with titles, images, dates, and excerpts.
  - Resources: Shows a list of embedded YouTube videos with excerpts and dates.
  - Posts: Individual blog post with a featured image as banner, title, and content. 

- Header:
  - Shows the project logo and links to project socials.
  - Allows navigation between the homepage, news, and resources.
  - Allows changing the language.

- Footer:
  - Shows funding information for the project and developer links.

- Localization: 
  - Homepage in 5 languages: English, Italian, Greek, Spanish, Bulgarian.

## Setup

### Environment variables/files
client/.env.local
server/app/public/wp-config.php
server/app/public/wp-content/themes/blank/.env

### Instructions
1. duplicate client/.env.local.example and rename to .env.local
2. generate two secrets with:
```bash
python3 - <<EOF
import secrets
for r in range(2): print(secrets.token_urlsafe(64))
EOF
```
2. add the first secret for jwt in wp-config.php:
```php
define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', 'YOUR_STRONG_SECRET' );
```
3. run this mutation in the GraphQL IDE to get a refresh token (replace username and password with credentials of a WordPress Administrator):
```gql
mutation Login {
    login(
        input: {
        password: "your_password"
        username: "your_username"
        }
    ) {
        refreshToken
    }
}
```
4. copy refresh token from GraphQL IDE into .env.local (WORDPRESS_AUTH_REFRESH_TOKEN)
5. add the second secret in .env.local (WORDPRESS_PREVIEW_SECRET)
6. set the redirect url in the theme (see server/app/public/wp-content/themes/blank/readme.MD)

## TODO:
- Add privacy policy
- Add video lightbox
- Add lighthouse testing
