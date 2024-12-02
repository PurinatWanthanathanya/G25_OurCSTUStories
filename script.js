// ส่วนของ form
const form = document.getElementById('form');

const entries = [];
let entryCount = 1;

const showMessage = (id, messages = [], show = true) => {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = show ? 'block' : 'none';
    if (messages.length > 0) {
      element.innerHTML = messages.join('<br>');
    }
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const genderElement = document.querySelector('input[name="gender"]:checked');
  const email = document.getElementById('email').value.trim();
  const satisfaction = document.getElementById('satisfaction').value;
  const description = document.getElementById('description').value;

  showMessage('success', [], false);
  showMessage('danger', [], false);

  const errors = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (fullname.split(' ').filter(part => part).length !== 2) {
    errors.push('<span class="required">*</span>กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง<span class="required">*</span>');
  }

  if (!emailRegex.test(email)) {
    errors.push('<span class="required">*</span>กรุณาใส่อีเมลล์ให้ถูกต้อง<span class="required">*</span>');
  }

  if (!genderElement) {
    errors.push('<span class="required">*</span>กรุณาเลือกเพศของคุณ<span class="required">*</span>');
  }

  if (!satisfaction) {
    errors.push('<span class="required">*</span>กรุณาเลือกความพึงพอใจต่อเว็บไซต์<span class="required">*</span>');
  }

  if (errors.length > 0) {
    showMessage('danger', errors);
    return;
  }

  const confirmSubmission = confirm('คุณต้องการยืนยันข้อมูลหรือไม่?');
  if (!confirmSubmission) {
    return;
  }
  const gender = genderElement.value;
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

  showMessage('success', ['<span class="msgsuccess">ยินดีต้อนรับ !</span>']);

  const displayArea = document.getElementById('display-area');
  const sanitize = (str) => str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const entryElement = document.createElement('div');

  entryElement.classList.add('entry-class');

  entryElement.innerHTML = `
      <p><strong>ผู้เยี่ยมชมคนที่:</strong> ${newEntry.count}</p>
      <p><strong>ชื่อ-นามสกุล:</strong> ${sanitize(newEntry.fullname)}</p>
      <p><strong>เพศ:</strong> ${sanitize(newEntry.gender)}</p>
      <p><strong>อีเมล:</strong> ${sanitize(newEntry.email)}</p>
      <p><strong>ความพึงพอใจต่อเว็บไซต์:</strong> ${sanitize(newEntry.satisfaction)}</p>
      <p><strong>ข้อเสนอแนะ / ความคิดเห็น:</strong> ${sanitize(newEntry.description)}</p>
      <hr>
  `;
  displayArea.appendChild(entryElement);
  form.reset();
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
  active = (active + 1) % items.length; 
  loadShow();
}

prev.onclick = function () {
  active = (active - 1 + items.length) % items.length;
  loadShow();
}