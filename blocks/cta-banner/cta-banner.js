export default async function decorate(block) {
  const [ctalink, attribution] = [...block.children].map((c) => c.firstElementChild);
  const ctabanner = document.createElement('div');
  // decorate cta-banner
  ctabanner.className = 'ctabanner';
  ctalink.className = 'ctalink';
  ctabanner.append(ctalink);
 
  block.innerHTML = '';
  block.append(ctabanner);
}