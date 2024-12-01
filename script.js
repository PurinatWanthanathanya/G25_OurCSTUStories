// ส่วนของ form
const form = document.getElementById('form');
const entries = [];
let entryCount = 1;
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const email = document.getElementById('email').value.trim();
  const satisfaction = document.getElementById('satisfaction').value;
  const description = document.getElementById('description').value;

  const isValid = true;
  if (fullname.split(' ').length !== 2) {
    alert('กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง');
    isValid = false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('กรุณาใส่อีเมลล์ให้ถูกต้อง');
    isValid = false;
  }
  if (!gender) {
    alert('กรุณาเลือกเพศของคุณ');
    isValid = false;
  }
  if (!satisfaction) {
    alert('โปรดเลือกความพึงพอใจต่อเว็บไซต์');
    isValid = false;
  }

  if (isValid) {
    const newEntry = {
      count: entryCount,
      fullname,
      gender,
      email,
      satisfaction,
      description,
    };
    entryCount++;
    entries.push(newEntry);

    const displayArea = document.getElementById('display-area');
    const entryElement = document.createElement('div');
    entryElement.innerHTML = `
      <p><strong>ผู้เยี่ยมชมคนที่:</strong> ${newEntry.count}</p>
      <p><strong>ชื่อ-นามสกุล:</strong> ${newEntry.fullname}</p>
      <p><strong>Gender:</strong> ${newEntry.gender}</p>
      <p><strong>เพศ:</strong> ${newEntry.email}</p>
      <p><strong>ความพึงพอใจต่อเว็บไซต์:</strong> ${newEntry.satisfaction}</p>
      <p><strong>ข้อเสนอแนะ / ความคิดเห็น:</strong> ${newEntry.description}</p>
      <p>=======================================</p>
    `;
    displayArea.appendChild(entryElement);

    form.reset();
  }
});

//slider
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow() {
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = 'none';
  items[active].style.opacity = 1;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();
next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
}
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
}

//function ตรวจว่าถึงตรงไหนแล้วให้โชว์ปุ่ม
document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('back-to-top');

  function toggleButtonVisibility() {
    if (window.scrollY > 450) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  window.addEventListener('scroll', toggleButtonVisibility);

  backToTopButton.addEventListener('click', scrollToTop);
  
});