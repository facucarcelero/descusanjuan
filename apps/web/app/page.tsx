export default function HomePage() {
  return (
    <main className="page">
      <header className="header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            D
          </span>
          <span className="brand-name">Descu San Juan</span>
        </div>
        <nav className="header-nav" aria-label="Acciones principales">
          <a className="button button-secondary" href="#beneficios">
            Ver beneficios
          </a>
          <a className="button button-primary" href="#ingresar">
            Ingresar
          </a>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">Beneficios para San Juan</p>
        <h1>Descubrí descuentos y ventajas en comercios de tu provincia</h1>
        <p className="lead">
          Descu San Juan conecta personas y comercios con beneficios reales, cupones y puntos en un
          solo lugar.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#beneficios">
            Explorar beneficios
          </a>
          <a className="button button-secondary" href="#comercios">
            Soy comercio
          </a>
        </div>
      </section>

      <section className="features" id="beneficios" aria-labelledby="beneficios-title">
        <h2 id="beneficios-title">¿Qué podés hacer?</h2>
        <ul className="feature-list">
          <li className="feature-card">
            <h3>Beneficios cercanos</h3>
            <p>Encontrá descuentos en comercios de San Juan según tus intereses.</p>
          </li>
          <li className="feature-card">
            <h3>Cupones y puntos</h3>
            <p>Canjeá cupones y acumulá puntos con cada compra participante.</p>
          </li>
          <li className="feature-card">
            <h3>Todo en un solo lugar</h3>
            <p>Accedé desde el celular o la computadora, sin complicaciones.</p>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>Plataforma en desarrollo · San Juan, Argentina</p>
      </footer>
    </main>
  );
}
