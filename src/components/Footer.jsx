import Marquee from "../scrollEffects/Marquee";

const Footer = () => {
  return (
    <footer id="get-in-touch" className="bg-ink pt-10 text-bg">
      <div className="mx-6 py-15 md:flex md:items-start md:justify-between md:gap-10">
        <h2 className="mb-5 text-4xl sm:text-6xl md:mb-0">aniket.dev</h2>

        <div className="flex flex-col gap-2">
          <a
            href="mailto:aniketpadyal07@gmail.com"
            className="break-all text-xl hover:opacity-70"
          >
            aniketpadyal07@gmail.com
          </a>

          <ul className="flex gap-6 text-sm">
            <li>
              <a
                href="https://github.com/your-real-username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/your-real-username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
              >
                LinkedIn
              </a>
            </li>
          </ul>

          <p className="text-sm opacity-60">© 2026 aniket.dev</p>
        </div>
      </div>

      <Marquee
        text="Let's work together"
        className="text-[12vw] font-semibold uppercase leading-none mx-10"
      />
    </footer>
  );
};

export default Footer;