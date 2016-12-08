const CollectionAPIUtil = {

  createCollection(collection) {
    return ($.ajax({
      method: "POST",
      url: `api/collections`,
      data: {collection: `${collection.title}`},
    }));
  }

};

export default CollectionAPIUtil;
