import Navbar from "./Navbar";

const Signin = () => {
  return (
    <>
      <Navbar />
      <main className="Registration">
        <div className="container">
          <div className="row">
            <div className="col-4 mx-auto">
              <form>
                <div className="text-center">
                  <img
                    className="mb-4"
                    src=""
                    alt=""
                    width="72"
                    height="57"
                  />
                  <h1 className="h3 mb-3 fw-normal">Please register</h1>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingName"
                    placeholder="Name"
                  />
                  <label for="floatingName">Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="name@example.com"
                  />
                  <label for="floatingEmail">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="tel"
                    className="form-control"
                    id="floatingMobile"
                    placeholder="+91"
                    pattern="[0-9]{10}"
                    required
                  />
                  <label for="floatingMobile">Mobile No.</label>
                  <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="Whatsapp No" /> Whatsapp No. </label>
                </div>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingCity"
                    placeholder="City/Village"
                  />
                  <label for="floatingCity">City/Village</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingIdCard"
                    placeholder="ID Card No."
                  />
                  <label for="floatingIdCard">ID Card No.</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Create Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Register
                </button>
                <p> Already have an account?   Please Login.</p> 
                <p>Register Your Business @Business</p>
                  
          
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signin;