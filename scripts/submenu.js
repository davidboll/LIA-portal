$(() => {
  const portal = $('#portal');
  const submenu = $('#submenu');

  portal.on('click touchstart', function (event) {
    event.preventDefault();
    submenu.toggle();
  });
});

  