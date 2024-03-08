// Lấy ngày đếm từ thẻ data-waktu
function getCountdownDate() {
    let countDownDate = new Date(
      document.getElementById("tampilan-waktu").getAttribute("data-waktu")
    ).getTime();
  
    return countDownDate;
  }
  
  // Hàm cập nhật thời gian mỗi giây
  export function timer() {
  
    let x = getCountdownDate();
    let now = new Date().getTime();
    let distance = x - now;
  
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("hari").textContent = days; 
    document.getElementById("jam").textContent = hours;
    document.getElementById("menit").textContent = minutes;
    document.getElementById("detik").textContent = seconds;
  
    if (distance < 0) {
      clearInterval(timerInterval);
    }
  }
  
  // Gọi hàm timer mỗi 1s
  let timerInterval = setInterval(timer, 1000);