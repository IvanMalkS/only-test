import { TimePeriod } from './types';

// мок-данные
export const timelineData: TimePeriod[] = [
  {
    id: 1,
    title: "Наука",
    dateRange: { start: 2015, end: 2022 },
    events: [
      { year: 2015, description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды", size: 'small'  },
      { year: 2016, description: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11", size: 'medium'  },
      { year: 2017, description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi", size: 'small'  },
      { year: 2019, description: "Команда Event Horizon Telescope получила первое изображение тени чёрной дыры", size: 'small'  },
      { year: 2021, description: "Вертолёт Ingenuity совершил первый в истории управляемый полёт на другой планете (Марс)", size: 'large'  },
      { year: 2022, description: "Запуск космического телескопа «Джеймс Уэбб» открыл новую эру в астрономии", size: 'large'  },
    ]
  },
  {
    id: 2,
    title: "Технологии",
    dateRange: { start: 2010, end: 2018 },
    events: [
      { year: 2010, description: "Выпущен первый iPad, определивший рынок планшетных компьютеров на годы вперёд", size: 'large' },
      { year: 2012, description: "Raspberry Pi, одноплатный компьютер размером с кредитную карту, поступил в продажу", size: 'small' },
      { year: 2015, description: "Apple Watch вышли на рынок, став самым популярным носимым устройством", size: 'large' },
      { year: 2017, description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi", size: 'large' },
    ]
  },
  {
    id: 3,
    title: "Кино",
    dateRange: { start: 2018, end: 2023 },
    events: [
      { year: 2018, description: "Фильм «Чёрная пантера» становится культурным феноменом и кассовым хитом", size: 'large' },
      { year: 2019, description: "«Паразиты» южнокорейского режиссёра Пон Чжун Хо выигрывают «Оскар» за лучший фильм", size: 'small' },
      { year: 2020, description: "Пандемия COVID-19 кардинально меняет киноиндустрию, приводя к росту стриминговых сервисов", size: 'large' },
      { year: 2022, description: "«Всё везде и сразу» удивляет критиков и зрителей, становясь главным фильмом года", size: 'large' },
      { year: 2023, description: "«Барбенгеймер» - одновременный выход фильмов «Барби» и «Оппенгеймер» создаёт уникальное культурное явление", size: 'small' },
    ]
  },
  {
    id: 4,
    title: "Космос",
    dateRange: { start: 2014, end: 2021 },
    events: [
      { year: 2014, description: "Космический аппарат «Розетта» успешно высадил спускаемый модуль «Филы» на комету Чурюмова — Герасименко", size: 'large' },
      { year: 2015, description: "Станция New Horizons совершила исторический пролёт мимо Плутона, прислав первые детальные снимки", size: 'large' },
      { year: 2020, description: "Первый пилотируемый полёт корабля Crew Dragon компании SpaceX к МКС", size: 'small' },
      { year: 2021, description: "Марсоход Perseverance успешно совершил посадку в кратере Езеро на Марсе", size: 'large' },
    ]
  },
  {
    id: 5,
    title: "Игры",
    dateRange: { start: 2013, end: 2020 },
    events: [
        { year: 2013, description: "Выход Grand Theft Auto V, ставшей одной из самых продаваемых игр в истории", size: 'large' },
        { year: 2016, description: "Релиз Pokémon Go вызывает глобальное помешательство на дополненной реальности", size: 'small' },
        { year: 2017, description: "Fortnite: Battle Royale выходит и становится мировым феноменом", size: 'large' },
        { year: 2020, description: "Выход Cyberpunk 2077 сопровождается одним из самых скандальных запусков в индустрии", size: 'large' },
    ]
  },
  {
    id: 6,
    title: "Спорт",
    dateRange: { start: 2016, end: 2022 },
    events: [
        { year: 2016, description: "Летние Олимпийские игры в Рио-де-Жанейро", size: 'small' },
        { year: 2018, description: "Чемпионат мира по футболу в России", size: 'large' },
        { year: 2021, description: "Перенесённые Летние Олимпийские игры в Токио проходят без зрителей", size: 'large' },
        { year: 2022, description: "Чемпионат мира по футболу в Катаре, впервые проведённый зимой", size: 'small' },
    ]
  }
];