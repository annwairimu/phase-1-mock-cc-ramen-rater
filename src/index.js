const ramenMenu = document.querySelector("#ramen-menu");

fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then(data => {
    data.forEach(ramen => {
      const ramenImg = document.createElement("img");
      ramenImg.src = ramen.image;
      ramenImg.addEventListener("click", () => displayRamenDetails(ramen));
      ramenMenu.appendChild(ramenImg);
    });
  });
  const ramenDetail = document.querySelector("#ramen-detail");

  function displayRamenDetails(ramen) {
    ramenDetail.innerHTML = `
      <img src="${ramen.image}">
      <h2>${ramen.name}</h2>
      <h3>${ramen.restaurant}</h3>
      <p>Rating: ${ramen.rating}</p>
      <p>Comment: ${ramen.comment}</p>
    `;
  }
  const newRamenForm = document.querySelector("#new-ramen");

  newRamenForm.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(newRamenForm);
    
    const newRamen = {
      name: formData.get("name"),
      restaurant: formData.get("restaurant"),
      image: formData.get("image"),
      rating: formData.get("rating"),
      comment: formData.get("comment")
    };
  
    fetch("http://localhost:3000/ramens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRamen)
    })
    .then(response => response.json())
    .then(ramen => {
      const ramenImg = document.createElement("img");
      ramenImg.src = ramen.image;
      ramenImg.addEventListener("click", () => displayRamenDetails(ramen));
      ramenMenu.appendChild(ramenImg);
    });
  });
    

