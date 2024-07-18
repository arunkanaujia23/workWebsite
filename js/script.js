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
    let j, tabProcessContent, tabProcessLinks;
    tabProcessContent = document.getElementsByClassName("process-tab-content");
    tabProcessLinks = document.getElementsByClassName("process-tab");
  
    // Remove active class from all tab content and tab links
    for (j = 0; j < tabProcessContent.length; j++) {
      tabProcessContent[j].classList.remove("active");
    }
    for (j = 0; j < tabProcessLinks.length; j++) {
      tabProcessLinks[j].classList.remove("active");
      tabProcessLinks[j].classList.remove("visited");
    }
  
    // Add active class to the clicked tab link
    event.currentTarget.classList.add("active");
  
    // Add visited class to the previously active tab links
    let previousActiveTabIndex = Array.from(tabProcessLinks).findIndex(tab => tab.classList.contains("active"));
    if (previousActiveTabIndex !== -1) {
      for (let i = 0; i < previousActiveTabIndex; i++) {
        tabProcessLinks[i].classList.add("visited");
      }
    }
  
    // Show the content for the clicked tab
    document.getElementById(tabName).classList.add("active");
  }