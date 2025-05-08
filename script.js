function initTabNav() {
  // Navegação por TABs
  const tabmenu = document.querySelectorAll(".js-tabmenu li");
  const tabcontent = document.querySelectorAll(".js-tabcontent section");

  //adicionando a class ativo ao primeiro item do tabcontext
  tabcontent[0].classList.add("ativo");

  //verificando se tabcontent e tabmenu existem
  if (tabcontent.length && tabmenu.length) {
    function activeTab(index) {
      tabcontent.forEach((content) => {
        content.classList.remove("ativo");
      });
      tabcontent[index].classList.add("ativo");
    }

    tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
      console.log(itemMenu, index);
    });
  }
}

function initAccordion() {
  //navegação por Accordion List
  const dt = document.querySelectorAll(".js-accordion dt");
  const activeClass = 'ativo';
  if (dt.length) {
    dt[0].classList.add("ativo");
    dt[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    dt.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initTabNav();
initAccordion();
