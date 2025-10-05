const button = document.getElementById('startBtn');

button.addEventListener('click', () => {
    document.getElementById('cards').scrollIntoView({behavior: 'smooth'});

});

const text = "The Relationship Tracker";
const element = document.getElementById("typewriter");
let index = 0;

function type() {
    if ( index < text.length ) {
        element.textContent += text[index];
        index++;
        setTimeout(type, 100);
    }

}
    type();


const question = "HOW IT WORKS";
const faqElement = document.getElementById("faq");
let faqIndex = 0;

function typeFaq() {
    if ( faqIndex < question.length ) {
        faqElement.textContent += question[faqIndex];
        faqIndex++;
        setTimeout(typeFaq, 400);
    }
}
    typeFaq();  


    document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  reveals.forEach((el) => observer.observe(el));
});

// Load previous value from Local Storage or start at 0
  let progressValue = parseInt(localStorage.getItem("progress")) || 0;

  const progressBar = document.getElementById("progress");
  const percent = document.getElementById("percent");

  // Update bar on page load
  updateBar();

  // Increase
  document.getElementById('plus').addEventListener('click', () => {
    if (progressValue < 100) {
      progressValue += 1;
      saveAndUpdate();
    }
  });

  // Decrease
  document.getElementById('minus').addEventListener('click', () => {
    if (progressValue > 0) {
      progressValue -= 1;
      saveAndUpdate();
    }
  });



  // Save to Local Storage and update bar
  function saveAndUpdate() {
    localStorage.setItem("progress", progressValue);
    updateBar();
  }

  // Update bar width and percent text
  function updateBar() {
    progressBar.style.width = progressValue + "%";
    percent.textContent = progressValue + "%";
  }