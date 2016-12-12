const CollectionAPIUtil = {

  createCollection(collection) {
    return ($.ajax({
      method: "POST",
      url: `api/collections`,
      data: { collection: { title: `${collection.title}` } },
    }));
  },

  destroyCollection(collection) {
    return ($.ajax({
      method: "DELETE",
      url: `api/collections/${collection.id}`,
    }));
  },


  addFeed(collection, feed) {
    return ($.ajax({
      method: "POST",
      url: `/api/collections/${collection.id}/feeds/${feed.id}`
    }));
  },

  removeFeed(collection, feed) {
    return ($.ajax({
      method: "DELETE",
      url: `/api/collections/${collection.id}/feeds/${feed.id}`
    }));
  }

};

export default CollectionAPIUtil;
