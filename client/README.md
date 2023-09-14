# Environment variables/files

client/.env.local
server/app/public/wp-config.php
server/app/public/wp-content/themes/blank/.env

# Instructions

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

3. run this mutation in the GraphQL IDE to get a refresh token (replace username and password with credentials of an Administrator):

```gql
mutation Login {
  login(
    input: {
      clientMutationId: "uniqueId"
      password: "your_password"
      username: "your_username"
    }
  ) {
    refreshToken
  }
}
```

4. copy refresh token from GraphQL IDE into client/.env.local (WORDPRESS_AUTH_REFRESH_TOKEN)
5. add the second secret in client/.env.local (WORDPRESS_PREVIEW_SECRET)
6. set WORDPRESS_URL in client/.env.local and verify that WORDPRESS_API_URL and WORDPRESS_UPLOADS_URL are correct
7. set REDIRECTION_URL in themes/blank/.env
