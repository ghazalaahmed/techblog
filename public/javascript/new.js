const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('.form-input').value;
  const content = document.querySelector(
    '.form-textarea'
  ).value;
console.log(title)
console.log(content)
  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);
