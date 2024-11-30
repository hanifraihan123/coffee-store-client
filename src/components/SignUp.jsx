import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";


const SignUp = () => {
    const {signUpUser} = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        const lastSignInTime = result.user.metadata.lastSignInTime;
        const loginInfo = {email,lastSignInTime}

        fetch(`http://localhost:5000/users`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log('Sign up info updated in DB', data)
        })
      })
      .catch((error) => {
        console.log(error);
      });
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col space-x-2">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignUp;