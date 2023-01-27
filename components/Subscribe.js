import React from "react";

function Subscribe() {
  return (
    <form>
      <div className="mb-3">
        <label
          htmlFor="email"
          className="block mb-2 text-xl font-bold text-gray-900 dark:text-white"
        >
          Subscribe to Newsletter
        </label>
        <label className="block mb-2 text-sm text-gray-900 dark:text-white pb-2">
          <p>
            Do you want to get notified when a new post is added to Codr? Sign
            up for our newsletter and you&#39;ll be among the first to find out
            about new posts.
          </p>
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
          placeholder="name@codr.live"
          required
        />
      </div>
      <div className="flex items-start mb-3">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-violet-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-violet-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm text-gray-900 dark:text-gray-300"
        >
          <p>By subscribing, you agree with Codr&#39;s Terms of Service.</p>
        </label>
      </div>
      <button
        type="submit"
        className="text-white float-right bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
      >
        Submit
      </button>
    </form>
  );
}

export default Subscribe;
