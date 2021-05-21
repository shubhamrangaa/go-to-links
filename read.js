window.onload = function () {
  const profileName = document.getElementById("profileName");
  let displayLink = document.getElementById("displayLink");
  let linkedinButton = document.getElementById("linkedinButton");
  let twitterButton = document.getElementById("twitterButton");
  let portfolioButton = document.getElementById("portfolioButton");
  let facebookButton = document.getElementById("facebookButton");
  let instagramButton = document.getElementById("instagramButton");

  chrome.storage.sync.get(["name"], function (result) {
    profileName.innerHTML = `Hi ${result.name}, how are you?`;
  });
  linkedinButton.onclick = () => {
    chrome.storage.sync.get(["linkedin"], function (result) {
      displayLink.value = result.linkedin;
      displayLink.select();
      document.execCommand("copy");
    });
  };
  twitterButton.onclick = () => {
    chrome.storage.sync.get(["twitter"], function (result) {
      displayLink.value = result.twitter;
      displayLink.select();
      document.execCommand("copy");
    });
  };
  portfolioButton.onclick = () => {
    chrome.storage.sync.get(["portfolio"], function (result) {
      displayLink.value = result.portfolio;
      displayLink.select();
      document.execCommand("copy");
    });
  };
  facebookButton.onclick = () => {
    chrome.storage.sync.get(["facebook"], function (result) {
      displayLink.value = result.facebook;
      displayLink.select();
      document.execCommand("copy");
    });
  };
  instagramButton.onclick = () => {
    chrome.storage.sync.get(["instagram"], function (result) {
      displayLink.value = result.instagram;
      displayLink.select();
      document.execCommand("copy");
    });
  };
};
