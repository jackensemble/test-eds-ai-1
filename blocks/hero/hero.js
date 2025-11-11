/**
 * decorate the hero block - Coleman split layout
 * @param {Element} block the block element
 */
export default function decorate(block) {
  // Get the row (should have 2 cells: text and image)
  const row = block.querySelector(':scope > div');
  if (!row) return;

  const cells = [...row.querySelectorAll(':scope > div')];
  if (cells.length < 2) return;

  // Cell 0: Text content with buttons
  // Cell 1: Image

  const textCell = cells[0];
  const imageCell = cells[1];

  // Wrap text content
  const heroText = document.createElement('div');
  heroText.className = 'hero-text';

  // Move all content from text cell to hero-text wrapper
  while (textCell.firstChild) {
    heroText.append(textCell.firstChild);
  }
  textCell.append(heroText);
  textCell.className = 'hero-content';

  // Wrap image
  const picture = imageCell.querySelector('picture');
  if (picture) {
    const heroImage = document.createElement('div');
    heroImage.className = 'hero-image';
    heroImage.append(picture);
    imageCell.replaceChildren(heroImage);
    imageCell.className = 'hero-image-cell';
  }

  // Add class to row for styling
  row.className = 'hero-row';
}
