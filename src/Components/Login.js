import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  return (
    <div class="card mb-2" style={{maxWidth: 640 + 'px', margin: 150 + 'px'}}>
    <div class="row g-0">
      <div class="col-md-4">
        <img src="../Images/loginpic.png" class="img-fluid rounded-start" alt="login"/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title">Welcome Back!</h3>
          <img src="../Images/logo.png" alt="logo" style={{margin: 20 + 'px'}}/>
          {/* Email, Password input */}
          <div class="col g-2 align-items-center">
          <div class="col-auto" style={{margin: 10 + 'px'}}>
            <input type="email" class="form-control" placeholder="Email Address" aria-describedby="passwordHelpInline"/>
          </div>
          <div class="col-auto" style={{margin: 10 + 'px'}}>
            <input type="password" class="form-control" placeholder="Password" aria-describedby="passwordHelpInline"/>
          </div>
          <div class="d-grid gap-2" style={{margin: 10 + 'px'}}>
            <button class="btn btn-dark" type="button">Login</button>
          </div>
          </div>
                <a className="small text-muted" href="#!">Forgot password?</a>
                <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>
                <a className="small text-muted" href="#!">Terms of use. Privacy policy</a>
          </div>
      </div>
    </div>
  </div>
  );
}
