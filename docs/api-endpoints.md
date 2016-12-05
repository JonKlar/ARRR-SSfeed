# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Articles

- `GET /api/articles`
  - articles index/search
  - accepts `tag_name` query param to list notes by tag
  - accepts pagination params (if I get there)
- `POST /api/articles`
- `GET /api/articles/:id`
- `PATCH /api/articles/:id`
- `DELETE /api/articles/:id`

### feeds

- `GET /api/feeds`
- `POST /api/feeds`
- `GET /api/feeds/:id`
- `DELETE /api/feeds/:id`
- `GET /api/feeds/:id/articles`
  - index of all articles for a feed

### collections

- `GET /api/collections`
- `POST /api/collections`
- `GET /api/collections/:id`
- `DELETE /api/collections/:id`
- `GET` `/api/collections/:id/feeds`


### Tags

- A feeds tags will be included in the feeds show template
- `GET /api/tags`
- `POST /api/feeds/:feed_id/tags`: add tag to feed
- `DELETE /api/feeds/:feed_id/tags/:tag_name`: remove tag from feed
