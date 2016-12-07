[ARRR!SSfeed Live!](https://arrr-ss-feed.herokuapp.com/#/)

ARRR!SSfeed is an RSS reader clone of Feedly.  You can create collections,
add feeds to your collection and stay up to date with your favorite publications
all in one place.

MVP

0. New account creation, login, and guest/demo login
0. A production README, replacing this README (NB: check out the sample [production README][production-readme] -- you'll write this later)
0. Hosting on Heroku
* Collections
* RSS Feeds
* Articles
* Reads
* **Bonus**: Favorites
* **Bonus**: Search


Wireframes

[feed_view](./wireframes/feed view.png)
[feed_search_view](feed_search_view.png)
[login_view](login_view.png)



[Sample-state](./sample-state.md)





[DB Schema](./schema.md)





[API endpoints](./api-endpoints.md)





### Implementation timeline


### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Collection model, API, components (1 day)

**Objective:** Collections can be created and seen

### Phase 3: Feed model, API, components (2 days)

**Objective:** Feeds can be added to sessions and the api calls to sites return correctly

### Phase 4:  Articles (2 days)

**Objective:** Articles can be read and indexed under their feeds/collections and saved

### Phase 5: Tags and Search (3 days)

**Objective:** users can search feeds by tags or feed name

### Phase 6: read/unread (1day)
**Objective:** articles are automatically marked as read and will no longer be shown in the feed

### Bonus features

- [ ] Alternate layout options
- [ ] Infinite scroll
- [ ] Share collections with other users
