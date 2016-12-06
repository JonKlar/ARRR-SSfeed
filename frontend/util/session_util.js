const SessionAPIUtil = {

  login(user) {
    return ($.ajax({
      method: "POST",
      url: 'api/session',
      data: {username: `${user.username}`, password: `${user.password}`},
    }));
  },

   signup(user) {
    return ($.ajax({
      method: "POST",
      url: 'api/users',
      data: { user: {username: `${user.username}`, password: `${user.password}`} },
   }));
 },

  logout() {
    return ($.ajax({
      method: "DELETE",
      url: 'api/session',
      }));
  },

};

export default SessionAPIUtil;
