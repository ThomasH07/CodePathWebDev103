const renderGifts = async () => {
    try {
      const response = await fetch('/gifts'); 
      if (!response.ok) throw new Error('Failed to fetch gifts');
      const data = await response.json();
  
      const mainContent = document.getElementById('main-content');
  
      mainContent.innerHTML = '';
  
      if (data && data.length > 0) {
  
        data.forEach(gift => {

          const card = document.createElement('article');
          card.classList.add('card');

          const figure = document.createElement('figure');
          const img = document.createElement('img');
          img.src = gift.image;
          img.alt = gift.name;
          figure.appendChild(img);

          const giftTitle = document.createElement('h3');
          giftTitle.textContent = gift.name;
          giftTitle.classList.add('truncate');
  
          const pricePoint = document.createElement('p');
          pricePoint.textContent = "Price: " + gift.pricePoint;
          pricePoint.classList.add('truncate');
  
          const audience = document.createElement('p');
          audience.textContent = "Great For: " + gift.audience;
          audience.classList.add('truncate');
  
          const description = document.createElement('p');
          description.textContent = "Description: " + gift.description || "No description available.";
          description.classList.add('truncate-multiline');
  
          const link = document.createElement('a');
          link.href = `/gifts/${gift.id}`;
          link.setAttribute('role', 'button');
          link.textContent = 'Read More >';

          card.appendChild(figure);
          card.appendChild(giftTitle);
          card.appendChild(pricePoint);
          card.appendChild(audience);
          card.appendChild(description);
          card.appendChild(link);
  
          mainContent.appendChild(card);
        });
  
      } else {
        const message = document.createElement('h2');
        message.textContent = "No Gifts Available 😞";
        mainContent.appendChild(message);
      }
  
    } catch (error) {
      console.error("Error fetching gifts:", error);
    }
};
  
requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
window.location.href = '../404.html'
}
else{
    renderGifts()
}
  