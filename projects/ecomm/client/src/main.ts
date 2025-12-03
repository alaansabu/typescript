import axios from "../node_modules/axios/index";


document.addEventListener("DOMContentLoaded", () => {
  const sign_up = document.querySelector(".S_btn") as HTMLButtonElement;

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
        <form>
          <input type="email" placeholder="Email" class="mail">
          <input type="password" placeholder="Password" class="pass">
          
          <div class="btn-container">
            <button type="button" class="S_btn secondary">Back to Login</button>
            <button type="submit" class="S_btn primary">Sign Up</button>
          </div>
        </form>
      </div>
    `;

    // Add event listener for "Back to Login" button
    const backBtn = container.querySelector(".S_btn.secondary") as HTMLButtonElement;
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        location.reload(); // Simple way to go back to login
      });
    }
  });

sign_up.addEventListener("click",(Event:MouseEvent)=>{


  axios.post('/api/user/')

})
});





