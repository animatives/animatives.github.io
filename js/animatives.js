function googleTranslateElementInit() {
    document.getElementById('google_translate_element').style.display = "inline-block"
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    
  }



  // Function to check if the user's language is not English
  function isNotEnglish() {
    // You can customize this condition based on your needs
    //return !(navigator.language.startsWith('enx') || navigator.userLanguage.startsWith('enx'));
    var userLang = navigator.language || navigator.userLanguage; 
    if(typeof userLang !== 'undefined' && userLang.startsWith('en')){
        return false;
    }
    return true
  }

  // Function to load Google Translate
  function loadGoogleTranslate() {
    var script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);
  }

  // Check if the user's language is not English and load Google Translate
  if (isNotEnglish()) {

    var element =  document.getElementById('google_translate_element');
    if (element) {
        // Exists.
        loadGoogleTranslate();
    }
    
  }