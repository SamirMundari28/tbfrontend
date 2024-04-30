import Navbar from "./Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <main class="Login">
        <div className="container">
          <div className="row">
            <div className="col-4 mx-auto">
              <form>
                <div className="text-center">
                  <img
                    class="mb-4"
                    src="image/travel.png"
                    alt=""
                    width="72"
                    height="57"
                  />
                  <h1 class="h3 mb-3 fw-normal">Login</h1>
                </div>
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">
                  Login
                </button>
                <p class="mt-5 mb-3 text-muted"> New hear? 
                please Register. </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;