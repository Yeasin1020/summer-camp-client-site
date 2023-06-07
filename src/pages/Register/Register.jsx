import React from "react";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-10 mb-10 flex mx-auto justify-center items-center">
      <Card color="transparent" shadow={false}>
       <div className="text-center">
	   <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
	   </div>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input type="text" size="lg" label="Name" />
            <Input type="email" size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
            <Input type="confirm password" size="lg" label="Confirm Password" />
            <Input type="photoUrl" size="lg" label="PhotoUrl" />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?
            <Link
			to='/logIn'
              href="#"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              LogIn
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
