// ส่วนของ home ตรง slide

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

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
      <p>=====================================================</p>
    `;
    displayArea.appendChild(entryElement);

    form.reset();
  }
});