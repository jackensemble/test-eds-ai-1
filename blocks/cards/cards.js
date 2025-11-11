/**
 * decorate the cards block - Coleman style with image overlays
 * @param {Element} block the block element
 */
export default function decorate(block) {
  // Get all rows (direct children divs)
  const rows = [...block.querySelectorAll(':scope > div')];

  // Create a list to hold the cards
  const ul = document.createElement('ul');
  ul.className = 'cards-list';

  rows.forEach((row) => {
    const cells = [...row.querySelectorAll(':scope > div')];

    if (cells.length < 3) return; // Skip invalid rows

    // Create card element
    const li = document.createElement('li');
    li.className = 'card';

    // Extract content from cells
    // Cell 0: Image
    // Cell 1: Tagline (em) - overlay text on image
    // Cell 2: Category heading (strong) - below image
    // Cell 3: Description text
    // Cell 4: Links

    const picture = cells[0]?.querySelector('picture');
    const tagline = cells[1]?.querySelector('em');
    const categoryHeading = cells[2]?.querySelector('strong');

    // Create image container with overlay text
    if (picture) {
      const cardImage = document.createElement('div');
      cardImage.className = 'card-image';
      cardImage.append(picture); // Re-use existing picture element

      // Add tagline overlay on the image
      if (tagline) {
        const overlayText = document.createElement('div');
        overlayText.className = 'card-image-text';
        overlayText.textContent = tagline.textContent;
        cardImage.append(overlayText);
      }

      li.append(cardImage);
    }

    // Create card body container (below the image)
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Category heading below image
    if (categoryHeading) {
      const heading = document.createElement('h3');
      heading.textContent = categoryHeading.textContent;
      cardBody.append(heading);
    }

    // Description text
    if (cells[3]) {
      const description = document.createElement('p');
      description.textContent = cells[3].textContent;
      cardBody.append(description);
    }

    // Links as buttons
    if (cells[4]) {
      const links = cells[4].querySelectorAll('a');
      if (links.length > 0) {
        const linkContainer = document.createElement('div');
        linkContainer.className = 'card-links';
        links.forEach((link) => {
          link.classList.add('button');
          linkContainer.append(link); // Re-use existing link elements
        });
        cardBody.append(linkContainer);
      }
    }

    li.append(cardBody);
    ul.append(li);
  });

  // Replace block content with decorated structure
  block.replaceChildren(ul);
}
