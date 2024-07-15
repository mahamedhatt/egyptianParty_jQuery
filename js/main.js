$('.menu-icon').click(function () {
  if ($('#leftMenu').width() == '0') $('#leftMenu').animate({ width: '500px' });
  else $('#leftMenu').animate({ width: '0' });
});

// Close the left menu
$('.close-btn').click(function () {
  $('#leftMenu').animate({ width: '0' });
});

// Toggle singer content
$('.singer-btn').click(function () {
  $('.singer-p').slideUp('slow');
  if (!$(this).next('.singer-p').is(':visible')) {
    $(this).next('.singer-p').slideDown('slow');
  }
});

// time
$(document).ready(function () {
  var countDownDate = new Date('Jul 20, 2024 15:00:00').getTime();

  var countdownfunction = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('#days').text(days + ' D');
    $('#hours').text(hours + ' h');
    $('#minutes').text(minutes + ' m');
    $('#seconds').text(seconds + ' s');

    if (distance < 0) {
      clearInterval(countdownfunction);
      $('#days').text('EXPIRED');
      $('#hours').text('');
      $('#minutes').text('');
      $('#seconds').text('');
    }
  }, 1000);
});

// count textarea
$(document).ready(function () {
  const maxLength = 100;
  $('#message').on('input', function () {
    const remaining = maxLength - $(this).val().length;
    $('#characterCount').text(`${remaining} characters remaining`);
  });
});
