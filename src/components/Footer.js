const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__text">
          <p
            className="footer__text__mail"
            data-copied-text="¡Texto para copiar!"
          >
            mansillakatherina@gmail.com
          </p>
          <span> | 2023</span>
        </div>
        <a
          className="footer__quote"
          href="https://adalab.es/"
          target="_blank"
          rel="noreferrer"
        >
          <p>
            'If you can't give me poetry, can't you give me poetical science?'
            Ada Lovelace
          </p>
        </a>
      </footer>
    </>
  );
};

export default Footer;
