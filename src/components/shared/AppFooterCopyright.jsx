function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <a
          href="https://github.com/itiwariarun"
          target="__blank"
          className="hover:underline hover:text-cyan-600 dark:hover:text-cyan-300 ml-1 duration-500"
        >
          React Portfolio Coded with 💌 by
        </a>
        <a
          href="https://frontend-dev-arun.vercel.app/"
          target="__blank"
          className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-cyan-600 dark:hover:text-cyan-300 ml-1 duration-500"
        >
          Arun
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
