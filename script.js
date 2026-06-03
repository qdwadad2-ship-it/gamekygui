










// ==== Popup Thể Loại ====
const hotCateBtn = document.querySelector("[data-open-hot-cate]");
const hotCateModal = document.getElementById("hotCateModal");
const hotCateClose = document.querySelector("[data-close-hot-cate]");

// mở popup
if (hotCateBtn) {
  hotCateBtn.addEventListener("click", () => {
    hotCateModal.classList.add("show");
  });
}

// đóng popup
if (hotCateClose) {
  hotCateClose.addEventListener("click", () => {
    hotCateModal.classList.remove("show");
  });
}

hotCateModal?.addEventListener("click", (e) => {
  if (e.target === hotCateModal) {
    hotCateModal.classList.remove("show");
  }
});












  // 1. Click vào dòng top-game => click thẻ .box tương ứng (cả trong modal + ngoài)
  document.querySelectorAll('.top-game-item[data-target-game]').forEach(function (item) {
    item.addEventListener('click', function () {
      const key = item.getAttribute('data-target-game');
      const box = document.querySelector('.box[data-game="' + key + '"]');
      if (box) {
        box.click();
      }
    });
  });

  // 2. Xử lý mở popup "Xem thêm"
  const modal = document.getElementById('topListModal');
  const modalTitle = document.getElementById('topListModalTitle');
  const modalIcon = modal.querySelector('.top-list-icon');

  document.querySelectorAll('.top-see-more').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const listKey = btn.getAttribute('data-list');   // favorite | newest | ...
      const title = btn.getAttribute('data-title') || 'Danh sách';

      modalTitle.textContent = title;

      // Đổi icon tuỳ theo list (tuỳ thích)
      if (listKey === 'favorite') modalIcon.textContent = '💛';
      else if (listKey === 'newest') modalIcon.textContent = '🆕';
      else modalIcon.textContent = '📋';

      // Hiện đúng list trong modal
      modal.querySelectorAll('.top-game-list--modal').forEach(function (ul) {
        if (ul.getAttribute('data-list') === listKey) {
          ul.style.display = 'block';
        } else {
          ul.style.display = 'none';
        }
      });

      modal.classList.add('is-open');
    });
  });

  // 3. Đóng modal
  const closeBtn = modal.querySelector('.top-list-close');
  closeBtn.addEventListener('click', function () {
    modal.classList.remove('is-open');
  });

  // Click nền tối cũng đóng
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('is-open');
    }
  });











// Variables
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".menu");

// Menu Toggle
menu.onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("move");
  bell.classList.remove("active");
};

// Notification toggle
let bell = document.querySelector(".notification");
document.querySelector("#bell-icon").onclick = () => {
  bell.classList.toggle("active");
};

// Swipe Function
// Swipe Function
// Swipe Function
var swiper = new Swiper(".trending-content", {
  allowTouchMove: true,
  grabCursor: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  /* ====== MẶC ĐỊNH (MOBILE) ====== */
  slidesPerView: 'auto',      // đọc width từ CSS (78vw)
  centeredSlides: true,       // slide active luôn ở giữa
  centeredSlidesBounds: true, // slide đầu & cuối vẫn canh giữa đúng
  spaceBetween: 12,           // khoảng cách giữa các card

  /* ====== BREAKPOINT CHO TABLET / PC ====== */
  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 25,
    },
  },
});






// ScrollBar OnScroll Function
window.onscroll = function () {
  mufunction();
};

function mufunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-bar").style.width = scrolled + "%";
}

