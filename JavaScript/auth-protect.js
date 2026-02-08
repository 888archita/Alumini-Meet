// JavaScript/auth-protect.js

// Wait for Firebase to be ready + give time to check auth state
document.addEventListener('DOMContentLoaded', () => {
  
  // Small timeout helps prevent FOUC (flash of unauthenticated content)
  setTimeout(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        // Not logged in → send to login page
        window.location.replace('login.html');  // replace = no back-button history
      }
      // If logged in → do nothing, page stays visible
    });
  }, 600);

});