VANTA.WAVES({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x0,
  shininess: 84.00
})

    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";


    // ✅ Firebase config from your project
// you have to add firebase api in api key
    const firebaseConfig = {
      apiKey: "",
      authDomain: "login-page-33e65.firebaseapp.com",
      projectId: "login-page-33e65",
      storageBucket: "login-page-33e65.appspot.com",
      messagingSenderId: "704911705760",
      appId: "1:704911705760:web:04dd1598bc525762c76bc5",
      measurementId: "G-VGRL5VCB9T"
    };

    // ✅ Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);


    

     
