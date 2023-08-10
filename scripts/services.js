
  const residentialButton = document.querySelector('.residential-button');
  const commercialButton = document.querySelector('.commercial-button');

  residentialButton.addEventListener('click', function() {
    window.location.href = 'contact.html?type=residential'; 
  });

  commercialButton.addEventListener('click', function() {
    window.location.href = 'contact.html?type=commercial'; 
  });

