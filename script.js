


const showInfo = () => {
let y = 0;
const webButton = document.querySelector("#web-button");
 webButton.addEventListener("click", function (evt) {
window.location.href = "https://www.instagram.com/rohansahu2001?igsh=Mm85Mmd1cnhidDQ4";
});
const instaButton = document.querySelector("#insta-button");
const facebookButton = document.querySelector("#facebook-button");
const whatsappButton = document.querySelector("#whatsapp-button");
const gmailButton = document.querySelector("#gmail-button");

// webButton.setAttribute("visible", true);
  instaButton.setAttribute("visible", true);
setTimeout(() => {
  facebookButton.setAttribute("visible", true);
}, 0);
setTimeout(() => {
  whatsappButton.setAttribute("visible", true);
}, 0);
setTimeout(() => {
  gmailButton.setAttribute("visible", true);
}, 0);
setTimeout(()=>{
  booknowButton.setAttribute("visible", true)
}, 0);



let currentTab = "";
// webButton.addEventListener("click", function (evt) {
//   window.location.href = "https://deviautomotives.in";
// });
instaButton.addEventListener("click", function (evt) {
  window.location.href = "https://www.instagram.com/rohansahu2001?igsh=Mm85Mmd1cnhidDQ4";
});
facebookButton.addEventListener("click", function (evt) {
  window.location.href = "https://www.instagram.com/rohansahu2001?igsh=Mm85Mmd1cnhidDQ4";
});
whatsappButton.addEventListener("click", function (evt) {
  window.location.href = "https://wa.me/8435189172";
});
gmailButton.addEventListener("click", function (evt) {
  window.location.href =
    "9993161115rohan@gmail.com";
});




};

const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");
const e = document.querySelector("#scard-preview-button");
paintandquestPreviewButton.addEventListener('click', () => {
    paintandquestPreviewButton.setAttribute("visible", false);
   
     e.setAttribute("visible", false);
    // Play the first video
    const paintandquestVideoLink = document.querySelector("#paintandquest-video-link");
    const paintandquestVideoMp4 = document.querySelector("#paintandquest-video-mp4");
    paintandquestVideoLink.setAttribute("src", "#paintandquest-video-mp4");
    paintandquestVideoMp4.play();
    
    // Play the second video
    const scardVideoLink = document.querySelector("#scard-video-link");
    const scardVideo = document.querySelector("#scard-video");
    scardVideoLink.setAttribute("src", "#scard-video");
    scardVideo.play();
});

AFRAME.registerComponent('mytarget', {
    init: function() {
        this.el.addEventListener('targetFound', event => {
            console.log("target found");
            // Assuming you want to show the image initially and only show the videos when the target is found
            paintandquestPreviewButton.setAttribute("visible", true);
            showInfo();
        });
        this.el.addEventListener('targetLost', event => {
            console.log("target lost");
        });
    }
});
