const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (event) => {
  event.preventDefault();

  coupon.select();
  coupon.setSelectionRange(0, coupon.value.length);
  document.execCommand("copy");
  btn.textContent = "Copied";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 3000);
};

btn.addEventListener("click", copyText);
