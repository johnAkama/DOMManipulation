document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value;
  if (input.trim().length < 1) alert('Please input a value');

  const result = document.getElementById("result");

  // ✅ Use regex to keep only letters and numbers
  const cleaned = input.replace(/[^0-9a-z]/gi, "").toLowerCase();

  // ✅ Check palindrome using regex logic (reverse comparison)
  const isPalindrome = cleaned === cleaned.split("").reverse().join("");

  result.textContent = isPalindrome
    ? `${input} is a palindrome`
    : `${input} is not a palindrome`;
});