export type Locale = "eng" | "ua" | "rus";

type ProjectCopy = {
  category: string;
  description: string;
};

type ServiceCopy = {
  title: string;
  description: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

export type SiteContent = {
  documentTitle: string;
  description: string;
  nav: [string, string, string, string];
  heroTitle: string;
  heroDescription: string;
  heroServices: string;
  projectsCta: string;
  contactCta: string;
  heroPreviewAlt: string;
  heroPreviewType: string;
  heroPreviewLink: string;
  projectsTitle: string;
  projectsIntro: string;
  projectAction: string;
  projects: ProjectCopy[];
  servicesTitle: string;
  servicesIntro: string;
  services: ServiceCopy[];
  processTitle: string;
  processIntro: string;
  processSteps: [ProcessStep, ProcessStep, ProcessStep, ProcessStep];
  aboutTitle: string;
  aboutRole: string;
  about: string;
  aboutLocation: string;
  techTitle: string;
  contactTitle: string;
  contactIntro: string;
  contactTelegram: string;
  formTitle: string;
  formIntro: string;
  formLabels: [string, string, string, string];
  formPlaceholders: [string, string, string];
  send: string;
  footerRole: string;
  footerEmail: string;
  messages: [string, string, string, string];
  ui: {
    language: string;
    skipToContent: string;
    navigation: string;
    featuredProject: string;
    socialLinks: string;
    openMenu: string;
    closeMenu: string;
    projectLink: (name: string) => string;
  };
};

const english: SiteContent = {
  documentTitle: "Ivan — Independent Web Developer",
  description:
    "Websites, e-commerce, and custom digital products built around real business needs. Design and full-stack development by Ivan.",
  nav: ["Projects", "Services", "About", "Contact"],
  heroTitle: "Digital products built to move business forward.",
  heroDescription:
    "From a business website or online store to a custom web application, integrations, and automation — I take projects from the first brief to a working product.",
  heroServices: "Business websites · E-commerce · Web apps · Automation",
  projectsCta: "Explore projects",
  contactCta: "Discuss a project",
  heroPreviewAlt: "Velora e-commerce website preview",
  heroPreviewType: "E-commerce",
  heroPreviewLink: "View live site",
  projectsTitle: "Selected work",
  projectsIntro:
    "A selection of websites and digital products, each shaped around a clear task and a useful experience.",
  projectAction: "Open live project",
  projects: [
    {
      category: "E-commerce",
      description:
        "A Ukrainian storefront for curated home, care, and gift products. A considered catalog and product pages make browsing and buying straightforward.",
    },
    {
      category: "Legal services",
      description:
        "A multi-page website for a Kyiv legal practice, organizing business and personal services and giving visitors a clear path to a consultation.",
    },
    {
      category: "Education · Course website",
      description:
        "A website for a six-month full-stack development course, with a clear program overview and an interactive learning roadmap.",
    },
    {
      category: "Education · Local service",
      description:
        "A website for a mathematics tutor that explains the teaching approach and helps students and parents get in touch.",
    },
    {
      category: "Event · 72-hour game jam",
      description:
        "An event website bringing the game jam format, participation details, rules, and schedule into one clear experience.",
    },
  ],
  servicesTitle: "From a focused website to a custom system.",
  servicesIntro:
    "The right scope depends on the business problem. I can build the public-facing experience, the tools behind it, or connect both.",
  services: [
    {
      title: "Business websites",
      description:
        "A clear, responsive website that explains your offer, earns trust, and gives the right visitors a direct next step.",
    },
    {
      title: "E-commerce",
      description:
        "Online stores with considered product discovery, catalog pages, checkout flows, and the integrations your operations need.",
    },
    {
      title: "Web applications",
      description:
        "Client portals, dashboards, and internal tools built around the way your team and customers actually work.",
    },
    {
      title: "Automation and AI",
      description:
        "Practical workflows that reduce repetitive work by connecting business data, services, and AI features where they help.",
    },
    {
      title: "APIs and integrations",
      description:
        "Connect websites, CRMs, and external services so information moves reliably between the systems you use.",
    },
  ],
  processTitle: "A clear path from brief to launch.",
  processIntro:
    "You work directly with the developer building your product. Each stage has a clear goal and a chance to review the work.",
  processSteps: [
    {
      title: "Understand the task",
      description:
        "We clarify the business need, the people using the product, and what it should make easier or possible.",
    },
    {
      title: "Shape the solution",
      description:
        "I map the structure, key flows, and interface, then agree on a practical scope before development.",
    },
    {
      title: "Build and connect",
      description:
        "I develop the product, adapt it for mobile, and connect the data, APIs, or services it depends on.",
    },
    {
      title: "Review and launch",
      description:
        "We check the finished experience, resolve the remaining details, and prepare the project for release.",
    },
  ],
  aboutTitle: "One developer, from first brief to launch.",
  aboutRole: "Independent web developer",
  about:
    "I’m Ivan. I work directly with each client, so the person clarifying the problem is also the one designing and building the solution. My work ranges from business websites and online stores to full-stack applications, integrations, and automation.",
  aboutLocation: "Based in Ukraine · Working remotely",
  techTitle: "Tools I work with",
  contactTitle: "Have a project in mind? Let’s talk.",
  contactIntro:
    "Share what you need to build or improve. I’ll review the task and suggest a practical way to move forward.",
  contactTelegram: "Message me on Telegram",
  formTitle: "Send a project brief",
  formIntro: "A few details are enough to start the conversation.",
  formLabels: ["Name", "Telegram username", "Message", "Company"],
  formPlaceholders: [
    "Your name",
    "@username",
    "What does the project need to do?",
  ],
  send: "Send message",
  footerRole: "Independent web developer",
  footerEmail: "Email",
  messages: [
    "Please complete all fields before sending.",
    "Sending…",
    "Thank you — your message has been sent.",
    "The message could not be sent. Please try again in a little while.",
  ],
  ui: {
    language: "Choose site language",
    skipToContent: "Skip to content",
    navigation: "Main navigation",
    featuredProject: "Featured project",
    socialLinks: "Social links",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    projectLink: (name) => "Open " + name + " in a new tab",
  },
};

const ukrainian: SiteContent = {
  documentTitle: "Ivan — незалежний веброзробник",
  description:
    "Сайти, інтернет-магазини й цифрові продукти для реальних бізнес-задач. Проєктування та full-stack розробка від Івана.",
  nav: ["Проєкти", "Послуги", "Про мене", "Контакт"],
  heroTitle: "Цифрові продукти, що допомагають бізнесу рухатися вперед.",
  heroDescription:
    "Від сайту компанії чи інтернет-магазину до вебзастосунку, інтеграцій і автоматизації — веду проєкт від першого обговорення до готового продукту.",
  heroServices:
    "Сайти для бізнесу · E-commerce · Вебзастосунки · Автоматизація",
  projectsCta: "Переглянути проєкти",
  contactCta: "Обговорити проєкт",
  heroPreviewAlt: "Інтернет-магазин Velora",
  heroPreviewType: "Інтернет-магазин",
  heroPreviewLink: "Відкрити сайт",
  projectsTitle: "Вибрані проєкти",
  projectsIntro:
    "Добірка сайтів і цифрових продуктів, кожен із чітким завданням і продуманим досвідом для користувача.",
  projectAction: "Відкрити проєкт",
  projects: [
    {
      category: "Інтернет-магазин",
      description:
        "Український магазин добірних товарів для дому, догляду й подарунків. Продуманий каталог і сторінки товарів допомагають легко обирати й купувати.",
    },
    {
      category: "Юридичні послуги",
      description:
        "Багатосторінковий сайт юридичної практики в Києві: напрямки для бізнесу й приватних клієнтів та зрозумілий шлях до консультації.",
    },
    {
      category: "Освіта · Сайт навчальної програми",
      description:
        "Сайт шестимісячної програми з full-stack розробки з чітким оглядом навчання та інтерактивною картою курсу.",
    },
    {
      category: "Освіта · Локальна послуга",
      description:
        "Сайт викладача математики, що пояснює підхід до навчання та допомагає учням і батькам зв’язатися.",
    },
    {
      category: "Подія · Game jam на 72 години",
      description:
        "Сайт події, що збирає формат геймджему, умови участі, правила й розклад в одному зрозумілому просторі.",
    },
  ],
  servicesTitle: "Від сайту до індивідуальної системи.",
  servicesIntro:
    "Рішення залежить від бізнес-завдання. Можу створити клієнтський інтерфейс, внутрішні інструменти або поєднати їх між собою.",
  services: [
    {
      title: "Сайти для бізнесу",
      description:
        "Зрозумілий адаптивний сайт, який пояснює вашу пропозицію, викликає довіру та підказує відвідувачу наступний крок.",
    },
    {
      title: "Інтернет-магазини",
      description:
        "Магазини з каталогом, зручним пошуком товарів, оформленням замовлень і потрібними бізнесу інтеграціями.",
    },
    {
      title: "Вебзастосунки",
      description:
        "Кабінети клієнтів, дашборди й внутрішні інструменти, створені під роботу вашої команди та потреби користувачів.",
    },
    {
      title: "Автоматизація та AI",
      description:
        "Практичні сценарії, що прибирають повторювану роботу й поєднують бізнес-дані, сервіси та AI там, де це корисно.",
    },
    {
      title: "API та інтеграції",
      description:
        "Поєдную сайти, CRM та зовнішні сервіси, щоб дані надійно передавалися між системами, якими ви користуєтесь.",
    },
  ],
  processTitle: "Зрозумілий шлях від задачі до запуску.",
  processIntro:
    "Ви напряму працюєте з розробником, який створює продукт. На кожному етапі є чітка мета та змога переглянути результат.",
  processSteps: [
    {
      title: "З’ясовуємо задачу",
      description:
        "Уточнюємо потребу бізнесу, хто користуватиметься продуктом і що він має спростити або зробити можливим.",
    },
    {
      title: "Формуємо рішення",
      description:
        "Визначаю структуру, основні сценарії та інтерфейс, а перед розробкою узгоджуємо реалістичний обсяг.",
    },
    {
      title: "Розробляю й інтегрую",
      description:
        "Створюю продукт, адаптую його для мобільних пристроїв і підключаю потрібні дані, API та сервіси.",
    },
    {
      title: "Перевіряємо й запускаємо",
      description:
        "Переглядаємо готовий продукт, виправляємо деталі та готуємо проєкт до публікації.",
    },
  ],
  aboutTitle: "Один розробник — від першої розмови до запуску.",
  aboutRole: "Незалежний веброзробник",
  about:
    "Я Іван. Працюю з кожним клієнтом напряму: людина, яка з’ясовує задачу, також проєктує й розробляє рішення. Створюю сайти для бізнесу та інтернет-магазини, а також full-stack застосунки, інтеграції й автоматизацію.",
  aboutLocation: "Працюю з України · Віддалено",
  techTitle: "Інструменти в роботі",
  contactTitle: "Маєте проєкт? Обговорімо.",
  contactIntro:
    "Розкажіть, що потрібно створити або вдосконалити. Я розберу задачу й запропоную практичний наступний крок.",
  contactTelegram: "Написати в Telegram",
  formTitle: "Опишіть проєкт",
  formIntro: "Щоб почати розмову, достатньо кількох деталей.",
  formLabels: ["Ім’я", "Нік у Telegram", "Повідомлення", "Компанія"],
  formPlaceholders: ["Ваше ім’я", "@username", "Що має робити проєкт?"],
  send: "Надіслати повідомлення",
  footerRole: "Незалежний веброзробник",
  footerEmail: "Електронна пошта",
  messages: [
    "Будь ласка, заповніть усі поля перед надсиланням.",
    "Надсилаю…",
    "Дякую — повідомлення надіслано.",
    "Не вдалося надіслати повідомлення. Спробуйте трохи пізніше.",
  ],
  ui: {
    language: "Обрати мову сайту",
    skipToContent: "Перейти до вмісту",
    navigation: "Головна навігація",
    featuredProject: "Вибраний проєкт",
    socialLinks: "Посилання на соцмережі",
    openMenu: "Відкрити меню навігації",
    closeMenu: "Закрити меню навігації",
    projectLink: (name) => "Відкрити " + name + " в новій вкладці",
  },
};

const russian: SiteContent = {
  documentTitle: "Ivan — независимый веб-разработчик",
  description:
    "Сайты, интернет-магазины и цифровые продукты для реальных задач бизнеса. Проектирование и full-stack разработка от Ивана.",
  nav: ["Проекты", "Услуги", "Обо мне", "Контакт"],
  heroTitle: "Цифровые продукты, которые помогают бизнесу двигаться вперёд.",
  heroDescription:
    "От сайта компании или интернет-магазина до веб-приложения, интеграций и автоматизации — веду проект от первого обсуждения до готового продукта.",
  heroServices:
    "Сайты для бизнеса · E-commerce · Веб-приложения · Автоматизация",
  projectsCta: "Посмотреть проекты",
  contactCta: "Обсудить проект",
  heroPreviewAlt: "Интернет-магазин Velora",
  heroPreviewType: "Интернет-магазин",
  heroPreviewLink: "Открыть сайт",
  projectsTitle: "Избранные проекты",
  projectsIntro:
    "Подборка сайтов и цифровых продуктов, каждый с понятной задачей и продуманным опытом для пользователя.",
  projectAction: "Открыть проект",
  projects: [
    {
      category: "Интернет-магазин",
      description:
        "Украинский магазин отобранных товаров для дома, ухода и подарков. Продуманный каталог и карточки товаров помогают выбирать и покупать.",
    },
    {
      category: "Юридические услуги",
      description:
        "Многостраничный сайт юридической практики в Киеве: направления для бизнеса и частных клиентов и понятный путь к консультации.",
    },
    {
      category: "Образование · Сайт учебной программы",
      description:
        "Сайт шестимесячной программы по full-stack разработке с понятным обзором обучения и интерактивной картой курса.",
    },
    {
      category: "Образование · Локальная услуга",
      description:
        "Сайт преподавателя математики, который объясняет подход к занятиям и помогает ученикам и родителям связаться.",
    },
    {
      category: "Событие · Game jam на 72 часа",
      description:
        "Сайт события, объединяющий формат геймджема, условия участия, правила и расписание в одном понятном пространстве.",
    },
  ],
  servicesTitle: "От сайта до индивидуальной системы.",
  servicesIntro:
    "Решение зависит от задачи бизнеса. Я могу создать интерфейс для клиентов, внутренние инструменты или связать их между собой.",
  services: [
    {
      title: "Сайты для бизнеса",
      description:
        "Понятный адаптивный сайт, который рассказывает о вашем предложении, вызывает доверие и подсказывает посетителю следующий шаг.",
    },
    {
      title: "Интернет-магазины",
      description:
        "Магазины с каталогом, удобным поиском товаров, оформлением заказов и нужными бизнесу интеграциями.",
    },
    {
      title: "Веб-приложения",
      description:
        "Кабинеты клиентов, дашборды и внутренние инструменты для работы вашей команды и задач пользователей.",
    },
    {
      title: "Автоматизация и AI",
      description:
        "Практичные сценарии, которые сокращают повторяющуюся работу и связывают бизнес-данные, сервисы и AI там, где это полезно.",
    },
    {
      title: "API и интеграции",
      description:
        "Связываю сайты, CRM и внешние сервисы, чтобы данные надёжно передавались между нужными системами.",
    },
  ],
  processTitle: "Понятный путь от задачи до запуска.",
  processIntro:
    "Вы напрямую работаете с разработчиком, который создаёт продукт. На каждом этапе есть ясная цель и возможность посмотреть результат.",
  processSteps: [
    {
      title: "Разбираем задачу",
      description:
        "Уточняем потребность бизнеса, кто будет пользоваться продуктом и что он должен упростить или сделать возможным.",
    },
    {
      title: "Формируем решение",
      description:
        "Определяю структуру, ключевые сценарии и интерфейс, а до разработки согласуем реалистичный объём.",
    },
    {
      title: "Разрабатываю и связываю",
      description:
        "Создаю продукт, адаптирую его для мобильных устройств и подключаю нужные данные, API и сервисы.",
    },
    {
      title: "Проверяем и запускаем",
      description:
        "Проверяем готовый продукт, исправляем детали и готовим проект к публикации.",
    },
  ],
  aboutTitle: "Один разработчик — от первого разговора до запуска.",
  aboutRole: "Независимый веб-разработчик",
  about:
    "Я Иван. Работаю с каждым клиентом напрямую: человек, который разбирается в задаче, также проектирует и разрабатывает решение. Создаю сайты для бизнеса и интернет-магазины, а также full-stack приложения, интеграции и автоматизацию.",
  aboutLocation: "Работаю из Украины · Удалённо",
  techTitle: "Инструменты в работе",
  contactTitle: "Есть проект? Давайте обсудим.",
  contactIntro:
    "Расскажите, что нужно создать или улучшить. Я разберу задачу и предложу практичный следующий шаг.",
  contactTelegram: "Написать в Telegram",
  formTitle: "Опишите проект",
  formIntro: "Для начала разговора достаточно нескольких деталей.",
  formLabels: ["Имя", "Ник в Telegram", "Сообщение", "Компания"],
  formPlaceholders: ["Ваше имя", "@username", "Что должен делать проект?"],
  send: "Отправить сообщение",
  footerRole: "Независимый веб-разработчик",
  footerEmail: "Электронная почта",
  messages: [
    "Пожалуйста, заполните все поля перед отправкой.",
    "Отправляю…",
    "Спасибо — сообщение отправлено.",
    "Не удалось отправить сообщение. Попробуйте чуть позже.",
  ],
  ui: {
    language: "Выбрать язык сайта",
    skipToContent: "Перейти к содержимому",
    navigation: "Главная навигация",
    featuredProject: "Избранный проект",
    socialLinks: "Ссылки на соцсети",
    openMenu: "Открыть меню навигации",
    closeMenu: "Закрыть меню навигации",
    projectLink: (name) => "Открыть " + name + " в новой вкладке",
  },
};

export const content: Record<Locale, SiteContent> = {
  eng: english,
  ua: ukrainian,
  rus: russian,
};

export const labels: Record<Locale, string> = {
  eng: "ENG",
  ua: "UA",
  rus: "RUS",
};

export const routes: Record<Locale, string> = {
  eng: "/",
  ua: "/ua",
  rus: "/rus",
};
