import './App.css';

function Subscribe() {
  return (
    <div className="subscription-section" id="premium">
        <h2>Подписка</h2>
        <div className="subscription-container">
            <div className="subscription-card">
                <h3>Премиум</h3>
                <p>Для профессионалов</p>
                <div className="price">2499 тг/мес</div>
                <a href="log.html" class="subscribe-btn">Оформить</a>
            </div>

            <div className="subscription-card">
                <h3>Студент</h3>
                <p>40% скидка для учащихся</p>
                <div className="price"> 1499 тг/мес</div>
                <a href="log.html" class="subscribe-btn">Оформить</a>
            </div>
        </div>
    </div>
  );
}

export default Subscribe;
