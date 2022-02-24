//Global variables

const menuToggleIcon = document.getElementById("menu-toggle-icon");
const navMobile = document.getElementById("nav");
const headerElement = document.getElementById("header");
// const menuToggleIcon = document.getElementById("menu-toggle-icon");

//네비게이션 토글
const toggleMenu = () => {
  navMobile.classList.toggle("active");
  headerElement.classList.toggle("active");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// 스크롤 시 헤더의 border-bottom 생기게하기
const headerScrolleEvent = () => {
  if (this.scrollY >= 30) {
    headerElement.classList.add("active-scroll");
  } else {
    headerElement.classList.remove("active-scroll");
  }
};

window.addEventListener("scroll", headerScrolleEvent);
