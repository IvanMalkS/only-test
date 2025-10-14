import { TimePeriod } from './types';

// Мок данные с figma
export const timelineData: TimePeriod[] = [
    {
      id: 1,
      title: "Наука",
      dateRange: { start: 2015, end: 2022 },
      events: [
        { year: 2015, description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды" },
        { year: 2016, description: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11" },
        { year: 2017, description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi" },
        { year: 2018, description: "Описание события 2018 года" },
        { year: 2021, description: "Описание события 2021 года" },
        { year: 2022, description: "Описание события 2022 года" },
      ]
    },
  ];