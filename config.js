/* =========================================================
   КодҚадам — баптаулар файлы
   Тек осы файлды өзгертесіз. Нұсқаулықтың 3 және 7-қадамдарын қараңыз.
   ========================================================= */
window.KODQADAM_CONFIG = {

  /* 1) Firebase баптаулары.
     Firebase console → ⚙ Project settings → General → Your apps → Web app →
     «SDK setup and configuration» → Config. Сол жердегі мәндерді осында қойыңыз. */
  firebase: {
    apiKey: "AIzaSyB4xuJyO_YdscCEZCSOF13Qq-YnwFdg4tk",
    authDomain: "kodqadam.firebaseapp.com",
    projectId: "kodqadam",
    storageBucket: "kodqadam.firebasestorage.app",
    messagingSenderId: "482671258520",
    appId: "1:482671258520:web:4e8f196ec5d522c71259ed"
  },

  /* 2) reCAPTCHA Enterprise кілті (App Check). ЖИ жұмыс істеуі үшін керек.
     Google Cloud → Security → reCAPTCHA → кілттің ID-ін осында қойыңыз. */
  recaptchaSiteKey: "",

  /* 3) ЖИ (Gemini). Өшіру үшін ai: false деп жазыңыз. */
  ai: true,
  aiModel: "gemini-3.8-flash"
};
