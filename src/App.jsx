import { useMemo, useState } from "react";

const categories = [
  "Все",
  "Киберпреступления",
  "Мошенничество",
  "Кража",
  "Вымогательство",
  "Хулиганство",
  "Наркопреступления",
];

const regions = [
  "Все регионы",
  "Ташкент",
  "Самарканд",
  "Бухара",
  "Андижан",
  "Фергана",
  "Наманган",
  "Хорезм",
  "Кашкадарья",
  "Сурхандарья",
  "Навои",
  "Джизак",
  "Сырдарья",
];

const news = [
  {
    id: 1,
    title: "Противодействие киберпреступности",
    category: "Киберпреступления",
    region: "Ташкент",
    date: "04.10.2026",
    icon: "💻",
    views: 12450,
    description:
      "Незаконный доступ к компьютерной информации и другие преступления в сфере информационных технологий.",
    details:
      "Незаконный несанкционированный доступ к компьютерной информации предусмотрен статьёй 278² УК Республики Узбекистан.",
    article:
      "Статья 278² УК Республики Узбекистан — незаконный несанкционированный доступ к компьютерной информации.",
    punishment:
      "Часть 1: штраф до 41 200 000 сумов (100 БРВ), лишение определённого права до 3 лет или исправительные работы до 1 года. Часть 2: штраф от 41 200 000 до 123 600 000 сумов (100–300 БРВ), исправительные работы от 1 до 2 лет, ограничение свободы от 1 до 3 лет либо лишение свободы до 3 лет.",
  },

  {
    id: 2,
    title: "Мошенничество",
    category: "Мошенничество",
    region: "Самарканд",
    date: "03.10.2026",
    icon: "💰",
    views: 18320,
    description:
      "Завладение чужим имуществом или правом на имущество путём обмана или злоупотребления доверием.",
    details:
      "Мошенничество предусмотрено статьёй 168 УК Республики Узбекистан.",
    article:
      "Статья 168 УК Республики Узбекистан — Мошенничество.",
    punishment:
      "Часть 1: штраф от 20 600 000 до 41 200 000 сумов (50–100 БРВ), исправительные работы до 2 лет, ограничение свободы от 1 до 3 лет либо лишение свободы до 3 лет. Часть 2: штраф от 41 200 000 до 123 600 000 сумов (100–300 БРВ), исправительные работы до 3 лет, ограничение свободы от 3 до 5 лет либо лишение свободы от 3 до 5 лет. Часть 3: штраф от 123 600 000 до 164 800 000 сумов (300–400 БРВ), исправительные работы от 2 до 3 лет либо лишение свободы от 5 до 8 лет. Часть 4: штраф от 164 800 000 до 247 200 000 сумов (400–600 БРВ) либо лишение свободы от 8 до 10 лет.",
  },

  {
    id: 3,
    title: "Кража",
    category: "Кража",
    region: "Бухара",
    date: "02.10.2026",
    icon: "🔐",
    views: 9870,
    description:
      "Тайное хищение чужого имущества.",
    details:
      "Кража предусмотрена статьёй 169 УК Республики Узбекистан.",
    article:
      "Статья 169 УК Республики Узбекистан — Кража.",
    punishment:
      "Часть 1: штраф до 20 600 000 сумов (50 БРВ), обязательные общественные работы до 360 часов, исправительные работы до 2 лет, ограничение свободы от 1 до 3 лет либо лишение свободы до 3 лет. Часть 2: штраф до 123 600 000 сумов (300 БРВ), исправительные работы от 2 до 3 лет, ограничение свободы от 3 до 5 лет либо лишение свободы от 3 до 5 лет. Часть 3: лишение свободы от 5 до 8 лет. Часть 4: лишение свободы от 8 до 15 лет.",
  },

  {
    id: 4,
    title: "Вымогательство",
    category: "Вымогательство",
    region: "Фергана",
    date: "01.10.2026",
    icon: "⚠️",
    views: 7650,
    description:
      "Требование передачи имущества или имущественных прав под угрозой насилия или распространения определённых сведений.",
    details:
      "Вымогательство предусмотрено статьёй 165 УК Республики Узбекистан.",
    article:
      "Статья 165 УК Республики Узбекистан — Вымогательство.",
    punishment:
      "Часть 1: ограничение свободы от 3 до 5 лет либо лишение свободы от 3 до 5 лет. Часть 2: лишение свободы от 5 до 10 лет. Часть 3: лишение свободы от 10 до 15 лет.",
  },

  {
    id: 5,
    title: "Хулиганство",
    category: "Хулиганство",
    region: "Наманган",
    date: "30.09.2026",
    icon: "🚨",
    views: 6340,
    description:
      "Умышленное грубое нарушение правил поведения в обществе.",
    details:
      "Хулиганство предусмотрено статьёй 277 УК Республики Узбекистан.",
    article:
      "Статья 277 УК Республики Узбекистан — Хулиганство.",
    punishment:
      "Часть 1: штраф от 20 600 000 до 41 200 000 сумов (50–100 БРВ), обязательные общественные работы до 300 часов или исправительные работы до 3 лет. Часть 2: обязательные общественные работы от 300 до 360 часов, ограничение свободы от 1 до 3 лет либо лишение свободы до 3 лет. Часть 3: ограничение свободы от 3 до 5 лет либо лишение свободы от 3 до 5 лет.",
  },

  {
    id: 6,
    title: "Незаконный оборот наркотических средств",
    category: "Наркопреступления",
    region: "Ташкент",
    date: "29.09.2026",
    icon: "🚔",
    views: 15320,
    description:
      "Незаконное изготовление, приобретение, хранение, перевозка или сбыт наркотических средств.",
    details:
      "Статья 273 УК Республики Узбекистан предусматривает ответственность за незаконные действия с наркотическими средствами с целью сбыта и их незаконный сбыт.",
    article:
      "Статья 273 УК Республики Узбекистан.",
    punishment:
      "Часть 1: штраф до 20 600 000 сумов (50 БРВ), обязательные общественные работы до 360 часов, исправительные работы до 3 лет, ограничение свободы от 1 до 3 лет либо лишение свободы до 3 лет. Часть 2: ограничение свободы от 3 до 5 лет либо лишение свободы от 3 до 5 лет. Часть 3: лишение свободы от 5 до 7 лет. Часть 4: лишение свободы от 7 до 10 лет. Часть 5: лишение свободы от 10 до 15 лет. Часть 6: лишение свободы от 15 до 20 лет.",
  },
];

const laws = [
  {
    article: "Статья 165",
    title: "Вымогательство",
    icon: "⚠️",
    text: "Требование имущества или имущественных прав под угрозой.",
  },
  {
    article: "Статья 168",
    title: "Мошенничество",
    icon: "💰",
    text: "Завладение имуществом путём обмана или злоупотребления доверием.",
  },
  {
    article: "Статья 169",
    title: "Кража",
    icon: "🔐",
    text: "Тайное хищение чужого имущества.",
  },
  {
    article: "Статья 273",
    title: "Наркопреступления",
    icon: "🚔",
    text: "Незаконный оборот наркотических средств.",
  },
  {
    article: "Статья 277",
    title: "Хулиганство",
    icon: "🚨",
    text: "Грубое нарушение общественного порядка.",
  },
  {
    article: "Статья 278²",
    title: "Киберпреступления",
    icon: "💻",
    text: "Незаконный доступ к компьютерной информации.",
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState("Все");
  const [region, setRegion] = useState("Все регионы");
  const [search, setSearch] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const filteredNews = useMemo(() => {
    const text = search.toLowerCase();

    return news.filter((item) => {
      const categoryMatch =
        category === "Все" || item.category === category;

      const regionMatch =
        region === "Все регионы" || item.region === region;

      const searchMatch =
        item.title.toLowerCase().includes(text) ||
        item.description.toLowerCase().includes(text) ||
        item.region.toLowerCase().includes(text);

      return categoryMatch && regionMatch && searchMatch;
    });
  }, [category, region, search]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const goTo = (newPage) => {
    setPage(newPage);
    setShowMobileMenu(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="container nav">

          <button
            className="logo"
            onClick={() => goTo("home")}
          >
            <span>Law</span>
            <b>Alert</b>
          </button>

          <nav className={showMobileMenu ? "mobile-open" : ""}>

            <button
              className={
                page === "home"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => goTo("home")}
            >
              Главная
            </button>

            <button
              className={
                page === "news"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => goTo("news")}
            >
              Новости
            </button>

            <button
              className={
                page === "laws"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => goTo("laws")}
            >
              Законодательство
            </button>

            <a
              className="nav-link"
              href="https://lex.uz/ru/acts/111457"
              target="_blank"
              rel="noreferrer"
            >
              Кодекс
            </a>

            <button
              className={
                page === "regions"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => goTo("regions")}
            >
              Регионы
            </button>

            <button
              className={
                page === "stats"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => goTo("stats")}
            >
              Статистика
            </button>

          </nav>

          <button
            className="favorites-button"
            onClick={() => goTo("favorites")}
          >
            ⭐ {favorites.length}
          </button>

          <button
            className="menu-button"
            onClick={() =>
              setShowMobileMenu(!showMobileMenu)
            }
          >
            ☰
          </button>

        </div>
      </header>

      {/* HOME */}
      {page === "home" && (
        <>
          <section className="hero">

            <div className="hero-grid"></div>
            <div className="hero-glow"></div>

            <div className="container hero-content">

              <div className="breaking">
                <span>●</span>
                СРОЧНО
                <b>
                  Последние правовые события Узбекистана
                </b>
              </div>

              <div className="badge">
                ⚖ ПРАВО • НОВОСТИ • БЕЗОПАСНОСТЬ
              </div>

              <h1>
                <span>Law</span>
                <b>Alert</b>
              </h1>

              <p>
                Главный информационный портал о
                криминальных новостях, законодательстве
                и безопасности Республики Узбекистан.
              </p>

              <div className="hero-buttons">

                <button
                  className="main-button"
                  onClick={() => goTo("news")}
                >
                  Смотреть новости →
                </button>

                <a
                  className="second-button"
                  href="https://lex.uz/ru/acts/111457"
                  target="_blank"
                  rel="noreferrer"
                >
                  ⚖ Открыть УК Узбекистана
                </a>

              </div>

              <div className="hero-statistics">

                <div>
                  <b>6+</b>
                  <span>Категорий</span>
                </div>

                <div>
                  <b>13</b>
                  <span>Регионов</span>
                </div>

                <div>
                  <b>24/7</b>
                  <span>Мониторинг</span>
                </div>

              </div>

            </div>
          </section>

          <section className="breaking-section">

            <div className="container">

              <div className="breaking-header">

                <div>
                  <span>СЕЙЧАС</span>
                  <h2>Последние события</h2>
                </div>

                <button onClick={() => goTo("news")}>
                  Все новости →
                </button>

              </div>

              <div className="breaking-list">

                {news.slice(0, 4).map((item) => (

                  <button
                    className="breaking-item"
                    key={item.id}
                    onClick={() =>
                      setSelectedNews(item)
                    }
                  >

                    <span className="breaking-icon">
                      {item.icon}
                    </span>

                    <div>
                      <small>{item.region}</small>
                      <h3>{item.title}</h3>
                    </div>

                    <b>→</b>

                  </button>

                ))}

              </div>

            </div>

          </section>

          <section className="section">

            <div className="container">

              <SectionTitle
                small="ПОПУЛЯРНОЕ"
                title="Главные материалы"
                button="Все новости →"
                onClick={() => goTo("news")}
              />

              <div className="cards">

                {news.slice(0, 3).map((item) => (

                  <NewsCard
                    key={item.id}
                    item={item}
                    favorite={favorites.includes(item.id)}
                    onFavorite={toggleFavorite}
                    onOpen={setSelectedNews}
                  />

                ))}

              </div>

            </div>

          </section>

          <section className="law-day">

            <div className="container">

              <div className="law-day-content">

                <div className="law-big-icon">
                  ⚖️
                </div>

                <div>

                  <span>ПРАВО ДНЯ</span>

                  <h2>
                    Статья 168 — Мошенничество
                  </h2>

                  <p>
                    Узнайте, что законодательство
                    Узбекистана предусматривает за
                    завладение чужим имуществом
                    путём обмана.
                  </p>

                  <button onClick={() => goTo("laws")}>
                    Читать статью →
                  </button>

                </div>

              </div>

            </div>

          </section>

          <section className="section">

            <div className="container">

              <SectionTitle
                small="ОБЗОР"
                title="LawAlert в цифрах"
              />

              <div className="stats-grid">

                <Stat
                  number="6"
                  text="Категорий преступлений"
                />

                <Stat
                  number="13"
                  text="Регионов Узбекистана"
                />

                <Stat
                  number="1 248"
                  text="Материалов"
                />

                <Stat
                  number="24/7"
                  text="Информационный мониторинг"
                />

              </div>

            </div>

          </section>
        </>
      )}

      {/* NEWS */}
      {page === "news" && (
        <main className="page">

          <div className="container">

            <PageHeading
              small="LAWALERT"
              title="Новости"
              text="Криминальные новости и правовая информация Узбекистана."
            />

            <SearchBox
              search={search}
              setSearch={setSearch}
            />

            <div className="filter-row">

              <div className="filters">

                {categories.map((item) => (

                  <button
                    key={item}
                    className={
                      category === item
                        ? "filter active"
                        : "filter"
                    }
                    onClick={() =>
                      setCategory(item)
                    }
                  >
                    {item}
                  </button>

                ))}

              </div>

              <select
                value={region}
                onChange={(e) =>
                  setRegion(e.target.value)
                }
              >
                {regions.map((item) => (
                  <option key={item}>
                    {item}
                  </option>
                ))}
              </select>

            </div>

            <div className="results-count">
              Найдено материалов:
              <b> {filteredNews.length}</b>
            </div>

            <div className="cards">

              {filteredNews.map((item) => (

                <NewsCard
                  key={item.id}
                  item={item}
                  favorite={favorites.includes(item.id)}
                  onFavorite={toggleFavorite}
                  onOpen={setSelectedNews}
                />

              ))}

            </div>

          </div>

        </main>
      )}

      {/* LAWS */}
      {page === "laws" && (
        <main className="page">

          <div className="container">

            <PageHeading
              small="ЗАКОНОДАТЕЛЬСТВО"
              title="Уголовный кодекс"
              text="Основные статьи законодательства Узбекистана."
            />

            <div className="laws-grid">

              {laws.map((law) => (

                <div
                  className="law-card"
                  key={law.article}
                >

                  <div className="law-card-top">

                    <div className="law-icon">
                      {law.icon}
                    </div>

                    <span>
                      {law.article}
                    </span>

                  </div>

                  <h2>{law.title}</h2>

                  <p>{law.text}</p>

                  <a
                    href="https://lex.uz/ru/acts/111457"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Открыть в LexUZ →
                  </a>

                </div>

              ))}

            </div>

          </div>

        </main>
      )}

      {/* REGIONS */}
      {page === "regions" && (
        <main className="page">

          <div className="container">

            <PageHeading
              small="УЗБЕКИСТАН"
              title="Новости по регионам"
              text="Выберите регион, чтобы посмотреть материалы."
            />

            <div className="regions-grid">

              {regions.slice(1).map(
                (item, index) => {

                  const count = news.filter(
                    (n) => n.region === item
                  ).length;

                  return (
                    <button
                      className="region-card"
                      key={item}
                      onClick={() => {
                        setRegion(item);
                        goTo("news");
                      }}
                    >

                      <div className="region-number">
                        {(index + 1)
                          .toString()
                          .padStart(2, "0")}
                      </div>

                      <div>
                        <h3>{item}</h3>

                        <span>
                          {count} материалов
                        </span>
                      </div>

                      <b>→</b>

                    </button>
                  );
                }
              )}

            </div>

          </div>

        </main>
      )}

      {/* STATISTICS */}
      {page === "stats" && (
        <main className="page">

          <div className="container">

            <PageHeading
              small="АНАЛИТИКА"
              title="Статистика"
              text="Обзор материалов LawAlert по категориям."
            />

            <div className="stats-large">

              <div className="big-stat">
                <span>ВСЕГО МАТЕРИАЛОВ</span>
                <strong>1 248</strong>
                <small>за текущий период</small>
              </div>

              <div className="big-stat">
                <span>РЕГИОНОВ</span>
                <strong>13</strong>
                <small>по стране</small>
              </div>

              <div className="big-stat">
                <span>КАТЕГОРИЙ</span>
                <strong>6</strong>
                <small>основных направлений</small>
              </div>

            </div>

            <div className="chart">

              <h2>
                Распределение материалов
              </h2>

              {categories.slice(1).map(
                (item, index) => {

                  const values = [
                    86,
                    72,
                    61,
                    48,
                    39,
                    31,
                  ];

                  const value = values[index];

                  return (
                    <div
                      className="chart-row"
                      key={item}
                    >

                      <div className="chart-name">
                        <span>{item}</span>
                        <b>{value}%</b>
                      </div>

                      <div className="chart-track">

                        <div
                          className="chart-fill"
                          style={{
                            width: `${value}%`,
                          }}
                        />

                      </div>

                    </div>
                  );
                }
              )}

            </div>

          </div>

        </main>
      )}

      {/* FAVORITES */}
      {page === "favorites" && (
        <main className="page">

          <div className="container">

            <PageHeading
              small="МОИ МАТЕРИАЛЫ"
              title="Избранное"
              text="Сохранённые новости и материалы."
            />

            {favorites.length === 0 ? (

              <div className="empty">

                <div>⭐</div>

                <h2>
                  Здесь пока ничего нет
                </h2>

                <p>
                  Нажмите ⭐ на новости,
                  чтобы добавить её в избранное.
                </p>

                <button
                  className="main-button"
                  onClick={() => goTo("news")}
                >
                  Перейти к новостям
                </button>

              </div>

            ) : (

              <div className="cards">

                {news
                  .filter((item) =>
                    favorites.includes(item.id)
                  )
                  .map((item) => (

                    <NewsCard
                      key={item.id}
                      item={item}
                      favorite={true}
                      onFavorite={toggleFavorite}
                      onOpen={setSelectedNews}
                    />

                  ))}

              </div>

            )}

          </div>

        </main>
      )}

      {/* FOOTER */}
      <footer className="footer">

        <div className="container footer-content">

          <div>

            <div className="footer-logo">
              <span>Law</span>
              <b>Alert</b>
            </div>

            <p>
              Криминальные новости,
              законодательство и безопасность
              Узбекистана.
            </p>

          </div>

          <div className="footer-menu">

            <button onClick={() => goTo("home")}>
              Главная
            </button>

            <button onClick={() => goTo("news")}>
              Новости
            </button>

            <button onClick={() => goTo("laws")}>
              Законодательство
            </button>

            <button onClick={() => goTo("regions")}>
              Регионы
            </button>

          </div>

          <div className="footer-links">

            <a
              href="https://gov.uz/ru/iiv/news"
              target="_blank"
              rel="noreferrer"
            >
              МВД Узбекистана
            </a>

            <a
              href="https://lex.uz/ru/acts/111457"
              target="_blank"
              rel="noreferrer"
            >
              LexUZ
            </a>

          </div>

        </div>

        <div className="container disclaimer">
          Информация носит справочный характер.
          Виновность лица устанавливается только судом.
        </div>

      </footer>

      {/* MODAL */}
      {selectedNews && (

        <div
          className="modal-bg"
          onClick={() =>
            setSelectedNews(null)
          }
        >

          <div
            className="modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close"
              onClick={() =>
                setSelectedNews(null)
              }
            >
              ×
            </button>

            <div className="modal-icon">
              {selectedNews.icon}
            </div>

            <span className="tag">
              {selectedNews.category}
            </span>

            <h2>
              {selectedNews.title}
            </h2>

            <div className="meta">

              📍 {selectedNews.region}
              <br />

              📅 {selectedNews.date}
              <br />

              👁{" "}
              {selectedNews.views.toLocaleString()}
              {" "}просмотров

            </div>

            <Info
              title="Что произошло?"
              text={selectedNews.details}
            />

            <Info
              title="Статья закона"
              text={selectedNews.article}
            />

            <Info
              title="Предусмотренная ответственность"
              text={selectedNews.punishment}
            />

            <a
              className="law-button"
              href="https://lex.uz/ru/acts/111457"
              target="_blank"
              rel="noreferrer"
            >
              Открыть статью в LexUZ →
            </a>

            <div className="warning">
              ⚠ Окончательная юридическая
              квалификация и ответственность
              определяются компетентными органами
              и судом.
            </div>

          </div>

        </div>

      )}

    </div>
  );
}

/* SECTION TITLE */

function SectionTitle({
  small,
  title,
  button,
  onClick,
}) {
  return (
    <div className="section-title">

      <div>
        <span>{small}</span>
        <h2>{title}</h2>
      </div>

      {button && (
        <button
          className="more-button"
          onClick={onClick}
        >
          {button}
        </button>
      )}

    </div>
  );
}

/* PAGE HEADING */

function PageHeading({
  small,
  title,
  text,
}) {
  return (
    <div className="page-heading">

      <span>{small}</span>

      <h1>{title}</h1>

      <p>{text}</p>

    </div>
  );
}

/* SEARCH */

function SearchBox({
  search,
  setSearch,
}) {
  return (
    <div className="search-box">

      <span>🔎</span>

      <input
        type="text"
        placeholder="Поиск новостей..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {search && (
        <button
          onClick={() => setSearch("")}
        >
          ×
        </button>
      )}

    </div>
  );
}

/* NEWS CARD */

function NewsCard({
  item,
  favorite,
  onFavorite,
  onOpen,
}) {
  return (
    <article className="card">

      <div className="card-top">

        <div className="card-icon">
          {item.icon}
        </div>

        <button
          className={
            favorite
              ? "favorite active"
              : "favorite"
          }
          onClick={() =>
            onFavorite(item.id)
          }
        >
          {favorite ? "★" : "☆"}
        </button>

      </div>

      <div className="card-tags">

        <span className="tag">
          {item.category}
        </span>

        <span className="views">
          👁 {item.views.toLocaleString()}
        </span>

      </div>

      <div className="date">
        {item.date} • 📍 {item.region}
      </div>

      <h3>{item.title}</h3>

      <p>{item.description}</p>

      <div className="card-bottom">

        <span>
          ⚖ Законодательство УЗ
        </span>

        <button
          onClick={() =>
            onOpen(item)
          }
        >
          Подробнее →
        </button>

      </div>

    </article>
  );
}

/* INFO */

function Info({
  title,
  text,
}) {
  return (
    <div className="info">

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}

/* STAT */

function Stat({
  number,
  text,
}) {
  return (
    <div className="stat-box">

      <strong>{number}</strong>

      <span>{text}</span>

    </div>
  );
}

export default App;