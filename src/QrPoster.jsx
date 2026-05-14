import './QrPoster.css'

const qrImageSrc = '/images/frame.jpg'

function QrPoster() {
  return (
    <div className="qr-page">
      <header className="qr-header">
        <span className="qr-badge">LuCodes</span>
        <div className="qr-title-group">
          <p className="qr-eyebrow">Portefolio interactif</p>
          <h1 className="qr-title">Scanne &amp; découvre mes projets</h1>
        </div>
        <p className="qr-subtitle">
          Un aperçu de mes réalisations web &amp; mobile, mes compétences et mon parcours.
          Rendez-vous sur le site complet pour explorer, télécharger mon CV et collaborer.
        </p>
      </header>

      <main className="qr-content" role="presentation">
        <div className="qr-card">
          <img
            src={qrImageSrc}
            alt="QR code du portfolio de Luc Konou"
            className="qr-image"
            loading="lazy"
          />
          <div className="qr-instruction">
            <span>1</span>
            <p>Ouvre ton appareil photo ou un lecteur de QR code.</p>
          </div>
          <div className="qr-instruction">
            <span>2</span>
            <p>Scanne le code pour accéder au portfolio complet.</p>
          </div>
          <div className="qr-instruction">
            <span>3</span>
            <p>Découvre mes projets, compétences et contacte-moi.</p>
          </div>
        </div>

        <aside className="qr-side">
          <div className="qr-profile">
            <h2>Luc Konou</h2>
            <p>Développeur Web &amp; Mobile</p>
          </div>
          <ul className="qr-details">
            <li>
              <span aria-hidden>
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 3a2.5 2.5 0 1 1-2.5 2.5A2.5 2.5 0 0 1 12 5Zm0 14.2a7.2 7.2 0 0 1-4.5-1.6 4.3 4.3 0 0 1 9 0 7.2 7.2 0 0 1-4.5 1.6Z" />
                </svg>
              </span>
              <div>
                <strong>Portfolio :</strong>
                <p>lucodes.dev</p>
              </div>
            </li>
            <li>
              <span aria-hidden>
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M20.5 4h-17A1.5 1.5 0 0 0 2 5.5v13A1.5 1.5 0 0 0 3.5 20h17A1.5 1.5 0 0 0 22 18.5v-13A1.5 1.5 0 0 0 20.5 4Zm-.44 2-7.56 5.32L3.94 6ZM4 18v-9.4l7.66 5.41a1 1 0 0 0 1.16 0L20 8.6V18Z" />
                </svg>
              </span>
              <div>
                <strong>Email :</strong>
                <p>konouluc0@gmail.com</p>
              </div>
            </li>
            <li>
              <span aria-hidden>
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M12 2a7 7 0 0 0-7 7c0 3.92 3.17 8.54 5.29 11.09a2.25 2.25 0 0 0 3.42 0C15.83 17.54 19 12.92 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z" />
                </svg>
              </span>
              <div>
                <strong>Campus :</strong>
                <p>UCAO-UUT</p>
              </div>
            </li>
          </ul>
          <div className="qr-footer-note">
            <p>
              Scanne le QR pour accéder à la version toujours à jour de mon portfolio et découvrir mes
              nouveaux projets.
            </p>
          </div>
          <div className="qr-actions">
            <a href="/" className="qr-button" target="_blank" rel="noreferrer">
              Visiter le site
            </a>
          </div>
        </aside>
      </main>

      <footer className="qr-footer">
        <p>© {new Date().getFullYear()} Luc Konou — Portfolio interactif</p>
      </footer>
    </div>
  )
}

export default QrPoster
