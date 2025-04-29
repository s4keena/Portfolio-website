
// Optional: Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! (Not really, but looks good right?) 💌");
});

document.addEventListener("DOMContentLoaded", function() {
  // Select the name (inside the span) and the image elements
  const nameElement = document.getElementById('name');
  const profileImage = document.querySelector('.aboutpic img');  // Select the img inside .aboutpic

  // List of images for changing the picture in order
  const imageList = [
    'images/facecard.jpg',
    'images/me1.jpg',
    'images/fam.jpg'
  ];

  let currentImageIndex = 0;  // Initialize index to keep track of the current image

  // Add a single event listener to the name so that the image changes when clicked
  nameElement.addEventListener('click', function() {
    // Add fade-out effect
    profileImage.classList.add('fade');
  
    // After the fade-out transition, change the image source in order
    setTimeout(function() {
      currentImageIndex = (currentImageIndex + 1) % imageList.length; // Cycle through the images
      profileImage.src = imageList[currentImageIndex];  // Change the image source
      // Remove the fade effect, and allow the fade-in transition
      profileImage.classList.remove('fade');
    }, 300); // Wait for the fade-out duration (300ms)
  });
});

//scroll navbar disappear
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    navbar.style.top = "-100px"; // move navbar up and hide it
  } else {
    // Scrolling up
    navbar.style.top = "0"; // bring navbar back
  }
  lastScrollY = window.scrollY;
});

document.addEventListener("DOMContentLoaded", function() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const details = card.querySelector('.project-details');

    card.addEventListener('mouseenter', function() {
      details.style.display = 'block'; // Show the details
      details.style.opacity = '1'; // Fade in effect
    });

    card.addEventListener('mouseleave', function() {
      details.style.display = 'none'; // Hide the details
      details.style.opacity = '0'; // Fade out effect
    });
  });
});