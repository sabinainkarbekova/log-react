
import './App.css';

function Topic() {
  return (
    <>
    <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100">
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
            <div className="toast-header">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkS69sLIzAkdoafkOeVAA4cUwlfxCArKDzPg&s" className="rounded me-2" alt="Meet Logo"/>
                <strong className="me-auto">MEET</strong>
                <small>2 мин назад</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button>
            </div>
            <div className="toast-body">
                Добро пожаловать на сайт "Meet" – платформу для конференций!
            </div>
        </div>
    </div>
    </>
  );
}

export default Topic;
