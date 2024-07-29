AOS.init();

function openTab(tabName) {
    let i, tabContent, tabLinks;
    
    tabContent = document.getElementsByClassName("service-tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("active");
    }
  
    tabLinks = document.getElementsByClassName("service-tab");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
    }
  
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
  }

function openTechnologyTab(tabName) {
    let j, tabTechnologyContent, tabTechnologyLinks;
    
    tabTechnologyContent = document.getElementsByClassName("technology-tab-content");
    for (j = 0; j < tabTechnologyContent.length; j++) {
      tabTechnologyContent[j].classList.remove("active");
    }
  
    tabTechnologyLinks = document.getElementsByClassName("technology-tab");
    for (j = 0; j < tabTechnologyLinks.length; j++) {
      tabTechnologyLinks[j].classList.remove("active");
    }
  
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
  }

  function openProcessTab(tabName) {
    let j, tabTechnologyContent, tabTechnologyLinks;
    
    tabTechnologyContent = document.getElementsByClassName("process-tab-content");
    for (j = 0; j < tabTechnologyContent.length; j++) {
      tabTechnologyContent[j].classList.remove("active");
    }
  
    tabTechnologyLinks = document.getElementsByClassName("process-tab");
    for (j = 0; j < tabTechnologyLinks.length; j++) {
      tabTechnologyLinks[j].classList.remove("active");
    }
  
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
  }