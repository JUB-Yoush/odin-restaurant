const buildPage = () => {
  console.log('ran from startup.js');
  const container = document.getElementById('container');

  const header = document.createElement('div');
  header.textContent = 'untitled food place';
  const headerLinks = document.createElement('div');
  const home = document.createElement('div');
  const homeAnchor = document.createElement('a');
  homeAnchor.textContent = 'home';
  const menu = document.createElement('div');
  const menuAnchor = document.createElement('a');
  menuAnchor.textContent = 'menu';
  const contact = document.createElement('div');
  const contactAnchor = document.createElement('a');
  contactAnchor.textContent = 'contact';

  const main = document.createElement('div');
  const mainHeader = document.createElement('h1');
  const mainBtn = document.createElement('button');

  const footer = document.createElement('div');

  header.classList.add('header');
  headerLinks.classList.add('header-links');

  home.classList.add('home');
  menu.classList.add('menu');
  contact.classList.add('contact');

  main.classList.add('main');
  mainHeader.classList.add('main-header');

  footer.classList.add('footer');

  container.appendChild(header);
  container.appendChild(main);
  container.appendChild(footer);

  home.appendChild(homeAnchor);
  menu.appendChild(menuAnchor);
  contact.appendChild(contactAnchor);
  headerLinks.appendChild(home);
  headerLinks.appendChild(menu);
  headerLinks.appendChild(contact);
  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);
  main.appendChild(mainHeader);
  main.appendChild(mainBtn);
};
buildPage();
