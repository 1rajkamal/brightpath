const themeBtn = document.getElementById("themeToggle");
const body = document.body;

themeBtn.onclick = () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  themeBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
};
const langBtn = document.getElementById("langToggle");
let english = true;

langBtn.onclick = () => {
  english = !english;

  document.getElementById("heroTitle").innerText =
    english
      ? "Quality Tuition from LKG to Class 10"
      : "LKG से कक्षा 10 तक गुणवत्तापूर्ण ट्यूशन";

  document.getElementById("heroSub").innerText =
    english
      ? "Strong foundation • Concept clarity • Bright future"
      : "मजबूत आधार • स्पष्ट समझ • उज्ज्वल भविष्य";

  document.getElementById("classesTitle").innerText =
    english ? "Classes" : "कक्षाएँ";

  document.getElementById("subjectsTitle").innerText =
    english ? "Subjects" : "विषय";

  document.getElementById("feesTitle").innerText =
    english ? "Fees" : "शुल्क";

  document.getElementById("aboutTitle").innerText =
    english ? "About Us" : "हमारे बारे में";

  document.getElementById("contactTitle").innerText =
    english ? "Contact Us" : "संपर्क करें";

  langBtn.textContent = english ? "हिंदी" : "EN";
};
function showClass(type) {
  const subjects = document.getElementById("subjects");
  const fees = document.getElementById("fees");

  if (type === "lkg5") {
    subjects.innerHTML = "• Hindi<br>• English<br>• Maths<br>• General Knowledge<br>• Social Science<br>All Subjects";
    fees.innerHTML = "Tuition: ₹500 / month<br>Home Tuition: ₹3000 / month";
  }

  if (type === "6to8") {
    subjects.innerHTML = "• Hindi<br>• English<br>• Maths<br>• Science<br>• Social Science<br>All Subjects";
    fees.innerHTML = "Tuition: ₹1000 / month<br>Home Tuition: ₹3000 / month";
  }

  if (type === "9to10") {
    subjects.innerHTML = "• Hindi<br>• English<br>• Science<br>• Biology<br>• Physics";
    fees.innerHTML =
      "Tuition: ₹1000 / month<br>Home Tuition: ₹3000 / month<br><small>Maths not included</small>";
  }
}
function sendEnquiry() {
  const name = document.getElementById("enqName").value;
  const cls = document.getElementById("enqClass").value;
  const phone = document.getElementById("enqPhone").value;

  if (!name || !cls || !phone) {
    alert("Please fill all details");
    return;
  }

  const msg = `Hello, my child name is ${name}. Class: ${cls}. Parent Phone: ${phone}. I want to enquire about admission.`;

  const url = `https://wa.me/917360096031?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
const text = "Strong foundation • Concept clarity • Bright future";
const element = document.getElementById("heroSub");
let index = 0;
let isDeleting = false;
let speed = 70;
function loopTypeWriter() {
  if (!isDeleting) {
    element.innerHTML = text.substring(0, index + 1);
    index++;

    if (index === text.length) {
      setTimeout(() => (isDeleting = true), 1500);
    }
  } else {
    element.innerHTML = text.substring(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(loopTypeWriter, isDeleting ? 40 : speed);
}
loopTypeWriter();
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
