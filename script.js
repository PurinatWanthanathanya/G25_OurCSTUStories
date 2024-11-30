const form = document.getElementById('form');
const entries = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form values
  const fullname = document.getElementById('fullname').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const email = document.getElementById('email').value.trim();
  const satisfaction = document.getElementById('satisfaction').value;
  const description = document.getElementById('description').value;

  // Validation
  const isValid = true; // Initialize to true and set to false if any validation fails
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

  // If all validations pass, create a new entry and add it to the array
  if (isValid) {
    const newEntry = {
      fullname,
      gender,
      email,
      satisfaction,
      description,
    };
    entries.push(newEntry);

    // Display the entries in a more user-friendly way (e.g., in a table)
    const displayArea = document.getElementById('display-area');
    const entryElement = document.createElement('div');
    entryElement.innerHTML = `
      <p><strong>ชื่อ-นามสกุล:</strong> ${newEntry.fullname}</p>
      <p><strong>Gender:</strong> ${newEntry.gender}</p>
      <p><strong>เพศ:</strong> ${newEntry.email}</p>
      <p><strong>ความพึงพอใจต่อเว็บไซต์:</strong> ${newEntry.satisfaction}</p>
      <p><strong>ข้อเสนอแนะ / ความคิดเห็น:</strong> ${newEntry.description}</p>
    `;
    displayArea.appendChild(entryElement);

    // Clear the form
    form.reset();
  }
});