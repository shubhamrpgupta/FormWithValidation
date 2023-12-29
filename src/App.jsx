import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form"



function App() {

  const { data, setData } = useState({});

  const { control, handleSubmit, formState: { errors }, reset } = useForm({})

  const submitting = (data) => {
    window.alert("Form Submitted")
    console.log(data)
  };




  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

        <div
          className="sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <img
            className="mx-auto h-10 w-auto"
            src="https://rytsensetech.com/images/logo%20copy.png"
            alt="Your Company"
          />
          <h2
            className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            Form with Validation in React
          </h2>
        </div>

        <div
          className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <form
            className="space-y-6"
            onSubmit={handleSubmit(submitting)}
            noValidate
            name="formName"
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <Controller
                  name="username"
                  control={control}
                  rules={{
                    required: "Name is required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Please use Alphabet Only"
                    }
                  }}
                  render={({ field }) => (
                    <input
                      id="name"
                      {...field}
                      name="name"
                      placeholder="Enter your Name"
                      type="text"
                      error={Boolean(errors?.username?.message)}
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 my-1.5"
                    />
                  )}
                />
                {(errors?.username?.message) &&
                  <span className="text-red-500 py-1.5 mx-1">{errors?.username?.message} </span>
                }
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                      message: "Please enter valid Email"
                    }
                  }}
                  render={({ field }) => (
                    <input
                      id="email"
                      {...field}
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      error={Boolean(errors?.email?.message)}
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 my-1.5"
                    />
                  )}
                />
                {(errors?.email?.message) &&
                  <span className="text-red-500 py-1.5 mx-1">{errors?.email?.message} </span>
                }
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <Controller
                  name="password"
                  rules={{
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                      message: "Please enter 8 characters"
                    }
                  }}
                  control={control}
                  render={({ field }) => (
                    <input
                      id="password"
                      {...field}
                      name="password"
                      error={Boolean(errors?.password?.message)}
                      type="password"
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  )}
                />
                {(errors?.password?.message) &&
                  <span className="text-red-500 py-1.5 mx-1">{errors?.password?.message} </span>
                }
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-3">

              <button
                type="reset"
                onClick={() => reset()}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Clear
              </button>

              <button
                type="submit"
                className="  flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>

            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
