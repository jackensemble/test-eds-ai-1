/**
 * decorate the hero block
 * @param {Element} block the block element
 */
export default function decorate(block) {
  // Extract picture and text content
  const picture = block.querySelector('picture');
  const textContent = block.querySelector('p, h1, h2');

  // Create hero content container
  const heroContent = document.createElement('div');
  heroContent.className = 'hero-content';

  // If there's text content, add it to the content container
  if (textContent) {
    const textWrapper = document.createElement('div');
    textWrapper.className = 'hero-text';
    textWrapper.append(textContent); // Re-use existing text element
    heroContent.append(textWrapper);
  }

  // Clear and rebuild the block structure
  block.replaceChildren();

  // If there's a picture, add it as background
  if (picture) {
    const heroImage = document.createElement('div');
    heroImage.className = 'hero-image';
    heroImage.append(picture); // Re-use existing picture element
    block.append(heroImage);
  }

  // Add the content overlay
  block.append(heroContent);
}
