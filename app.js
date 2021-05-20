// const Links = {
//   facebook: "",
//   instagram: "",
//   twitter: "",
//   linkedin: "",
// };

window.onload = function () {
  const linkedin = document.profileForm.linkedin;
  const facebook = document.profileForm.facebook;
  const instagram = document.profileForm.instagram;
  const twitter = document.profileForm.twitter;
  const form = document.profileForm;
  const submit = document.getElementById("submitForm");

  submit.onclick = () => {
    console.log(linkedin.value);
    chrome.storage.sync.set({ linkedin: linkedin.value }, function () {
      console.log("Value is set to " + linkedin);
    });
  };

  console.log(linkedin.value);
};
