window.onload = function () {
  // const linkedin = document.profileForm.linkedin;
  // const facebook = document.profileForm.facebook;
  // const instagram = document.profileForm.instagram;
  // const twitter = document.profileForm.twitter;
  // const form = document.profileForm;
  let linkedinLink = document.getElementById("linkedinLink");
  let linkedinButton = document.getElementById("linkedinLinkButton");

  linkedinButton.onclick = () => {
    chrome.storage.sync.get(["linkedin"], function (result) {
      linkedinLink.value = result.linkedin;
      linkedinLink.select();
      document.execCommand("copy");
      console.log("Value currently is " + result.linkedin);
    });
  };
};
