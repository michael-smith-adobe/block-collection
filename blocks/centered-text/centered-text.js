export default async function decorate(block) {
  const [text, attribution] = [...block.children].map((c) => c.firstElementChild);
  const textblock = document.createElement('div');
  // decorate cta-banner
  textblock.className = 'textblock';
  textblock.append(text);
 
  block.innerHTML = '';
  block.append(textblock);
}