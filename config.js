/* =========================================================
   КодҚадам — баптаулар файлы
   Тек осы файлды өзгертесіз. Нұсқаулықтың 3 және 7-қадамдарын қараңыз.
   ========================================================= */
window.KODQADAM_CONFIG = {

  /* 1) Firebase баптаулары.
     Firebase console → ⚙ Project settings → General → Your apps → Web app →
     «SDK setup and configuration» → Config. Сол жердегі мәндерді осында қойыңыз. */
  firebase: {
    apiKey: "ОСЫ_ЖЕРГЕ_apiKey_ҚОЙЫҢЫЗ",
    authDomain: "ЖОБА-ID.firebaseapp.com",
    projectId: "ЖОБА-ID",
    storageBucket: "ЖОБА-ID.firebasestorage.app",
    messagingSenderId: "000000000000",
    appId: "1:000000000000:web:0000000000000000"
  },

  /* 2) reCAPTCHA Enterprise кілті (App Check). ЖИ жұмыс істеуі үшін керек.
     Google Cloud → Security → reCAPTCHA → кілттің ID-ін осында қойыңыз. */
  recaptchaSiteKey: "",

  /* 3) ЖИ (Gemini). Өшіру үшін ai: false деп жазыңыз. */
  ai: true,
  aiModel: "gemini-3.8-flash"
};
