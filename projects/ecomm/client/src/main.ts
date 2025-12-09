// Using fetch instead of axios for browser compatibility
document.addEventListener("DOMContentLoaded", () => {
  const sign_up = document.querySelector(".S_btn.secondary") as HTMLButtonElement;
  const loginForm = document.querySelector(".main-container form") as HTMLFormElement;

  // ==================== LOGIN ====================
  if (loginForm) {
    loginForm.addEventListener("submit", async (e: Event) => {
      e.preventDefault();

      const mail = document.querySelector(".maillogin") as HTMLInputElement;
      const pass = document.querySelector(".passlogin") as HTMLInputElement;

      if (!mail.value || !pass.value) {
        alert("Please fill in all fields");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: mail.value, password: pass.value })
        });

        const data = await response.json();
        console.log("Login response:", data);

        if (!response.ok) {
          throw new Error(data.error || "Unable to login");
        }

        alert("Login successful!");
        window.location.href = "main.html";
      } catch (error: any) {
        console.error("Login error:", error.message);
        alert(error.message || "Login failed");
      }
    });
  }

  // ==================== SIGN UP PAGE SWITCH ====================
  if (!sign_up) {
    console.error("Sign up button not found");
    return;
  }

  sign_up.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    const container = document.querySelector(".main-container") as HTMLDivElement;

    if (!container) {
      throw new Error("container does not exist");
    }

    container.innerHTML = `
      <h1>Sign up to start</h1>
      <div class="container">
        <h2>Sign Up</h2>
        <form class="signup-form">
          <input type="email" placeholder="Email" class="mail">
          <input type="password" placeholder="Password" class="pass">
          
          <div class="btn-container">
            <button type="button" class="back-btn S_btn secondary">Back to Login</button>
            <button type="submit" class="S_btn primary">Sign Up</button>
          </div>
        </form>
      </div>
    `;

    // Add event listener for "Back to Login" button
    const backBtn = container.querySelector(".back-btn") as HTMLButtonElement;
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        location.reload();
      });
    }

    // Add event listener for sign up form submission
    const signupForm = container.querySelector(".signup-form") as HTMLFormElement;
    if (signupForm) {
      signupForm.addEventListener("submit", async (e: Event) => {
        e.preventDefault();

        const mail = container.querySelector(".mail") as HTMLInputElement;
        const pass = container.querySelector(".pass") as HTMLInputElement;

        if (!mail.value || !pass.value) {
          alert("Please fill in all fields");
          return;
        }

        if (pass.value.length < 8) {
          alert("Password must be at least 8 characters");
          return;
        }

        try {
          const response = await fetch("http://localhost:5000/api/user/add-user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: mail.value, password: pass.value })
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.error || "Sign up failed");
          }

          console.log("Response:", data);
          alert("Sign up successful!");
          location.reload();
        } catch (error: any) {
          console.error("Error:", error.message);
          alert(error.message || "Sign up failed");
        }
      });
    }
  });
});



