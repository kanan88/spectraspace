const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          className="social-icon cursor-pointer"
          href="https://github.com/kanan88"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">
        &copy; {new Date().getFullYear()} Kanan Farzaliyev. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
