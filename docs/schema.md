# Database Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## saved_articles
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
content         | text      | not null
content_snippet | text      | not null
author          | string    | not null
published_date  | date      | not null
feed_id         | integer   | not null (references feeds)
read            | boolean   | not null, default: false

## articles
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
content         | text      | not null
content_snippet | text      | not null
author          | string    | not null
published_date  | date      | not null
read            | boolean   | not null, default: false
feed_id         | integer   | not null (references feeds)



## feeds
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
url           | string    | not null
title         | string    | not null
link          | string    | not null (html version of feed)
description   | text      | not null
author        | string    | not null
collection_id | integer   | not null, foreign key (references collections), indexed


## collections
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
feed_id     | integer   | not null, foreign key (references feeds), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
