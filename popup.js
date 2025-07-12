document.querySelectorAll('.report-button').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault(); 
    const org = this.getAttribute('data-org');
    const url = window.location.href;
    let link = '';
    switch(org) {
      case 'rospotrebnadzor':
        link = `https://petition.rospotrebnadzor.ru/petition/`;
        break;
      case 'fas':
        link = `https://fas.gov.ru/pages/contacts/requests/poryadok-obrashheniya.html`;
        break;
      case 'rkn':
        link = `https://rkn.gov.ru/treatments/ask-question/`;
        break;
      case 'police':
        link = `https://мвд.рф/request_main`;
        break;
      case 'cbr':
        link = `https://www.cbr.ru/contactBR`;
        break;
    }
    if (link) window.open(link, '_blank');
  });
});