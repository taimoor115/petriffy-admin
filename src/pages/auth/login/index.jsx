import React, { useState } from "react";
import { Formik, Form } from "formik";
import InputField from "../../../components/form-components/input-box";
import { loginSchema } from "../../../schema/auth.schema";
import { Button, Heading } from "../../../common";
import { LogoSvg } from "../../../assets/svgs";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

  const inputFields = [
    { name: "email", type: "email", label: "Email", placeholder: "Email" },
    {
      name: "password",
      type: isPasswordVisible ? "text" : "password",
      label: "Password",
      placeholder: "Password",
      showPasswordToggle: true,
      onTogglePasswordVisibility: togglePasswordVisibility,
      isPasswordVisible,
    },
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="flex-col justify-between hidden p-12 text-white md:flex md:w-1/2 bg-custom_primary">
        <div className="flex flex-col gap-8">
          <LogoSvg />
          <div className="mt-16">
            <h1 className="mb-4 text-5xl font-bold">
              Hello <br /> Petriffy Admin!👋
            </h1>
            <p className="mt-6 text-lg">
              Welcome to a platform where you can manage group chats, connect
              with doctors, and share insightful blogs. Engage with users and
              streamline communication—all from a single, powerful admin
              interface!
            </p>
          </div>
        </div>
        <div className="text-sm opacity-70">
          © 2025 Petriffy. All rights reserved.
        </div>
      </aside>

      <main className="flex flex-col items-center justify-center w-full p-8 md:w-1/2">
        <div className="w-full max-w-md">
          <Heading heading="Petriffy 👋" className="mb-8" />
          <section className="mb-8">
            <h2 className="text-2xl font-bold">Welcome Back Petriffy Admin!</h2>
            <p className="mt-4 text-sm text-gray-600">
              Log in now to gain access to all the powerful admin features of
              Petriffy!
              <br /> It's quick and easy—get started today!
            </p>
          </section>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values) => console.log(values)}
          >
            {() => (
              <Form className="space-y-5">
                {inputFields.map((field) => (
                  <InputField key={field.name} {...field} />
                ))}
                <Button
                  type="submit"
                  className="w-full py-3 text-white rounded bg-custom_primary hover:bg-gray-800"
                >
                  Login Now
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </main>
    </div>
  );
};

export default Login;
