Router.route('/filter/:season?', {
  name:'queries',
  data: function () {
    var season = this.params.season;
    return {
      query: CallCenterQueries.find({$where: function() {
        return (this.Season == season);
      }})
    }
  }
});
