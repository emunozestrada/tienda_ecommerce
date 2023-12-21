document.addEventListener("DOMContentLoaded", function () {
  const top = document.querySelector(".top");
  const closeButton = document.getElementById("closeButton");

  closeButton.addEventListener("click", function () {
    top.style.display = "none";
  });
});

/*------------MAIN BANNER------------*/
window.addEventListener('load', () => {
  let beesContainer = document.querySelector('.beesContainer');  
 

  beesContainer.style.filter = 'none';
});
















// function openPromotional() {
//   var announcementContent = document.getElementById("promotional");
//   announcementContent.classList.toggle("block");
// }
  

// function closePromotionalSpace() {
//     var announcementContent = document.getElementById("promotionalSpace");
//     announcementContent.classList.toggle("block");
// }

// let closeButton = document.querySelector('#button-close');
// let announcemenContent  = document.querySelector('.announcement-content');

// closeButton.addEventListener('click', () => {
//     announcementContent.remove();
// });