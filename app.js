window.onload = function () {
  const name = document.profileForm.name;
  const linkedin = document.profileForm.linkedin;
  const facebook = document.profileForm.facebook;
  const instagram = document.profileForm.instagram;
  const twitter = document.profileForm.twitter;
  const portfolio = document.profileForm.portfolio;
  const submit = document.getElementById("submitForm");

  chrome.storage.sync.get(["linkedin"], function (result) {
    linkedin.value = result.linkedin;
  });
  chrome.storage.sync.get(["name"], function (result) {
    name.value = result.name;
  });
  chrome.storage.sync.get(["twitter"], function (result) {
    twitter.value = result.twitter;
  });
  chrome.storage.sync.get(["instagram"], function (result) {
    instagram.value = result.instagram;
  });
  chrome.storage.sync.get(["portfolio"], function (result) {
    portfolio.value = result.portfolio;
  });
  chrome.storage.sync.get(["facebook"], function (result) {
    facebook.value = result.facebook;
  });

  submit.onclick = () => {
    console.log(linkedin.value);
    chrome.storage.sync.set(
      {
        name: name.value,
        linkedin: linkedin.value,
        twitter: twitter.value,
        facebook: facebook.value,
        instagram: instagram.value,
        portfolio: portfolio.value,
      },
      function () {
        console.log("Value is set to " + linkedin);
      }
    );
  };

  console.log(linkedin.value);
};
