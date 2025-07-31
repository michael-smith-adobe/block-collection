export default async function decorate(block) {
  const [ctalinktext, attribution] = [...block.children].map((c) => c.firstElementChild);
  const ctabanner = document.createElement('div');
  const ctatext = ctalinktext.textContent.split(/\r?\n/);
  const ctalink = document.createElement('h2');
  ctalink.innerHTML = ctatext[1];
  const sublink = document.createElement('p');
  sublink.innerHTML = ctatext[2];
  // decorate cta-banner
  ctabanner.className = 'ctabanner';
  ctalink.className = 'ctalink';
  sublink.className = 'sublink';
  ctabanner.append(ctalink);
  ctabanner.append(sublink);
 
  block.innerHTML = '';
  block.append(ctabanner);
}