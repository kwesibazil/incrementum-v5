<!--Main container -->
<div class="container-fluid bg-light h-100 d-flex justify-content-center">
  <div class="container-md row bg-light h-75  w-100 align-self-center">

    <div class="col col-sm-5 d-none d-sm-block bg-orange shadow-sm p-5 ">
      <div class="text-white fs-1 text-center">
        <!---Logo goes here-->
      </div>
    </div>

    <div class="col col-sm h-100 shadow-sm p-5 bg-body rounded">
      <div>
        <h3 class="fs-1 text-center">Log In</h3>
        <form id="login-form" method="POST" class="needs-validation" >

          <div class="mb-3">
            <label for="Email" class="form-label">Email address</label>
            <input name="email" id="login-email"  type="email" class="form-control" required>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input name="password" id="login-Password" type="password"  class="form-control" required>
          </div>

          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="rememberMe">
            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
          </div>

          <button id="submit-btn" type="submit" class="btn btn-orange" name="submit">Log In</button>
        </form>
      </div>
    </div><!--FORM CONTAINER ENDS HERE-->

  </div><!--ROW ENDS-->
</div><!--CONTAINER FLUID ENDS HERE-->
