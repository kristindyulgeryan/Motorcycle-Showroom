window.addEventListener("load", solve);

function solve() {
  const colorInputEl = document.getElementById("colors");
  const modelInputEl = document.getElementById("motorcycles");
  const dateAndTimeInputEl = document.getElementById("datetime");
  const fullNameInputEl = document.getElementById("full-name");
  const emailInputEl = document.getElementById("email");
  const testBtnEl = document.getElementById("test-ride-btn");
  const previewListUl = document.getElementById("preview-list");
  const completeListUl = document.getElementById("complete-list");

  testBtnEl.addEventListener("click", addInfo);

  function addInfo(e) {
    e.preventDefault();

    const inputsEl = [
      colorInputEl,
      modelInputEl,
      dateAndTimeInputEl,
      fullNameInputEl,
      emailInputEl,
    ];

    if (inputsEl.some((element) => element.value === "")) {
      return;
    }

    const liElInfo = document.createElement("li");
    const articleEl = document.createElement("article");

    const pColorEl = document.createElement("p");
    pColorEl.textContent = `Color: ${colorInputEl.value}`;

    const pModelEl = document.createElement("p");
    pModelEl.textContent = `Model: ${modelInputEl.value}`;

    const pNameEl = document.createElement("p");
    pNameEl.textContent = `For: ${fullNameInputEl.value}`;

    const pContactEl = document.createElement("p");
    pContactEl.textContent = `Contact: ${emailInputEl.value}`;

    const pDateEl = document.createElement("p");
    pDateEl.textContent = `Test Ride On: ${dateAndTimeInputEl.value}`;

    articleEl.appendChild(pColorEl);
    articleEl.appendChild(pModelEl);
    articleEl.appendChild(pNameEl);
    articleEl.appendChild(pContactEl);
    articleEl.appendChild(pDateEl);

    const div = document.createElement("div");
    div.classList.add("btn-container");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next-btn");
    nextBtn.textContent = "Next";

    div.appendChild(editBtn);
    div.appendChild(nextBtn);

    liElInfo.appendChild(articleEl);
    liElInfo.appendChild(div);

    previewListUl.appendChild(liElInfo);
    const editColorEl = colorInputEl.value;
    const editModelEl = modelInputEl.value;
    const editedNameEl = fullNameInputEl.value;
    const editedEmailEl = emailInputEl.value;
    const editTimeEl = dateAndTimeInputEl.value;

    testBtnEl.disabled = true;

    inputsEl.forEach((element) => (element.value = ""));

    //  Edit button action
    editBtn.addEventListener("click", (e) => {
      colorInputEl.value = editColorEl;
      modelInputEl.value = editModelEl;
      fullNameInputEl.value = editedNameEl;
      emailInputEl.value = editedEmailEl;
      dateAndTimeInputEl.value = editTimeEl;

      liElInfo.remove();

      testBtnEl.disabled = false;
    });

    // Next button action
    nextBtn.addEventListener("click", (e) => {
      const completeLi = document.createElement("li");
      const completeArticle = document.createElement("article");

      const completeColorEl = document.createElement("p");
      completeColorEl.textContent = `Color: ${editColorEl}`;

      const completeModelEl = document.createElement("p");
      completeModelEl.textContent = `Model: ${editModelEl}`;

      const completeNameEl = document.createElement("p");
      completeNameEl.textContent = `For: ${editedNameEl}`;

      const completeContact = document.createElement("p");
      completeContact.textContent = `Contact: ${editedEmailEl}`;

      const completeDateEl = document.createElement("p");
      completeDateEl.textContent = `Test Ride On: ${editTimeEl}`;

      const completeBtn = document.createElement("button");
      completeBtn.classList.add("complete-btn");
      completeBtn.textContent = "Complete";

      completeArticle.appendChild(completeColorEl);
      completeArticle.appendChild(completeModelEl);
      completeArticle.appendChild(completeNameEl);
      completeArticle.appendChild(completeContact);
      completeArticle.appendChild(completeDateEl);
      completeArticle.appendChild(completeBtn);

      completeLi.appendChild(completeArticle);
      completeListUl.appendChild(completeLi);

      liElInfo.remove();

      testBtnEl.disabled = true;

      completeBtn.addEventListener("click", (e) => {
        completeListUl.remove();

        const confirmBtn = document.createElement("button");
        confirmBtn.classList.add("confirm-btn");
        confirmBtn.textContent = "Your Test Ride is Confirmed";

        const divDataView = document.querySelector(".data-view");
        divDataView.appendChild(confirmBtn);

        confirmBtn.addEventListener("click", (e) => {
          window.location.reload();
        });
      });
    });
  }
}
