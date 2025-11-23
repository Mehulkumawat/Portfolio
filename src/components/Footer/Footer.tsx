const Footer = () => {
  return (
    <footer className="py-6 mt-10 text-sm text-gray-500 text-center border-t">
      <p>© {new Date().getFullYear()} Mehul Kumawat</p>
      <div className="mt-2 flex justify-center gap-4">
        <a
          href="https://github.com/Mehulkumawat"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black underline underline-offset-4"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mehul-kumawat-70b66b1ab/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black underline underline-offset-4"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
