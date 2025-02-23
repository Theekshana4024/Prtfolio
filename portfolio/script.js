function toggleDescription() {
    var desc = document.getElementById("product-desc");
    var btn = document.querySelector(".see-more-btn");
    
    if (desc.style.display === "none") {
      desc.style.display = "block";
      btn.innerText = "See Less";
    } else {
      desc.style.display = "none";
      btn.innerText = "See More";
    }
  }