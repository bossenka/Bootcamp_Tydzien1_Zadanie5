$('#load').on('click', function() {
  $.getJSON('https://jsonplaceholder.typicode.com/users', function(data) {
    for (var i=0; i<data.length; i++) {
      var user = data[i].name + '<br>' +
                 data[i].username + '<br>' +
                 data[i].email + '<br>' +
                 data[i].phone;
      $('<li></li>').html(user).appendTo('#users');
    }
  });
});
