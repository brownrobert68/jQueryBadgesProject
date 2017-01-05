$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/rbrown68.json',
    dataType: 'jsonp',
    success: function(response) {
      var completedCourses = response.courses.completed;
      var $badges = $('#badges');
      for (i = 0; i < completedCourses.length; i++){
        $badges.append("<div class=\'course\'><h3>" + completedCourses[i].title + "</h3><img src=\'" + completedCourses[i].badge + "\'>" + "<a href=\'" + completedCourses[i].url + "\' target=\'_blank\' class=\'btn btn-primary\' >See Course</a></div>");
      }
    }
  });

});
