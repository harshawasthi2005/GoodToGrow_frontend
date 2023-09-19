import styles from "../styles/Home.module.css";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log({ name, email, password });
    setLoading({
      loading: true,
    });
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/createuser", {
        name,
        email,
        password,
      })
      .then((response) => {
        console.log(response.data.success);
        setLoading(false);
        if (response.data.success) {
          router.push(
            {
              pathname: "/",
              query: { myBooleanParam: true },
            },
            "/"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <section className={`'vh-100' ${styles.gradientcustom}`}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">SignUp</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your details!
                      </p>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="Username"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        SignUp
                      </button>
                    </div>

                    <div>
                      <p className="mb-0">
                        Already have an account?{" "}
                        <Link href="/login" className="text-white-50 fw-bold">
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Signup;
