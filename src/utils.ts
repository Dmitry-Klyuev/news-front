export const categoryNames = {
  index: 'Главная',
  fashion: 'Мода',
  technologies: 'Технологии',
  sport: 'Спорт',
  other: 'Other',
};
export const categoryIds = {
  index: 0,
  fashion: 3,
  technologies: 1,
  sport: 2,
  other: 5,
  // 'karpov': 6,
};

export const beautifyDate = (date: string): string => {
  return new Date(date).toLocaleDateString('ru-RU', {
    month: 'long',
    day: 'numeric',
  });
};
