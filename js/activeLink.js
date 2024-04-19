const activePage = window.location.pathname;
// console.log(activePage);

const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    // console.log(`${activePage}`);
    link.classList.add("act");
  }
});
