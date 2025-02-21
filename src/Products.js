
import './App.css';

function Products() {
  return (
    <>
    <div className="products-section" id="products">
        <h2>Наши продукты</h2>
        <div className="products-container">
            <div className="product-card">
                <img src="https://pruffme.com/domains/landing/dist/assets/images/products_webinar_benefit_1.webp" alt="Запись"/>
                <h3>Автоматическая запись</h3>
                <p>Записывайте сессии автоматически.</p>
            </div>

            <div className="product-card">
                <img src="https://pruffme.com/domains/landing/dist/assets/images/products_webinar_benefit_2.webp" alt="Групповые комнаты"/>
                <h3>Групповые комнаты</h3>
                <p>Создавайте отдельные группы.</p>
            </div>

            <div className="product-card">
                <img src="https://pruffme.com/domains/landing/dist/assets/images/products_webinar_benefit_3.webp" alt="Контроль присутствия"/>
                <h3>Контроль присутствия</h3>
                <p>Следите за активностью участников.</p>
            </div>

            <div className="product-card">
                <img src="https://pruffme.com/domains/landing/dist/assets/images/products_webinar_benefit_4.webp" alt="Реакции"/>
                <h3>Реакции</h3>
                <p>Позволяйте участникам реагировать в реальном времени.</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default Products;
