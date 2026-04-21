export type CourseId = 'mag' | 'asp' | 'doc'

export type CourseTab = {
  id: CourseId
  label: string
  image: string
  imageType: 'master' | 'aspirant' | 'doctor'
}

export type LinkableText =
  | string
  | {
      text: string
      href?: string
    }

export type LectureItem = {
  number: string
  href?: string
  title?: string
  lines?: LinkableText[]
  bullets?: LinkableText[]
  bulletTone?: 'body' | 'topics'
}

export type Course = {
  id: CourseId
  title: string
  lectures: LectureItem[]
}

export const email = 's.g.seletkov@gmail.com'

export const courseTabs: CourseTab[] = [
  {
    id: 'mag',
    label: 'Магистрантам',
    image: '/images/category-master.png',
    imageType: 'master'
  },
  {
    id: 'asp',
    label: 'Аспирантам',
    image: '/images/category-aspirant.png',
    imageType: 'aspirant'
  },
  {
    id: 'doc',
    label: 'Докторантам',
    image: '/images/category-doctor.png',
    imageType: 'doctor'
  }
]

export const courses: Course[] = [
  {
    id: 'mag',
    title: 'Лекции',
    lectures: [
      {
        number: 'Лекция 1',
        href: 'https://rutube.ru/video/f329806b8d4577da426a368c6ad37ba8/',
        lines: [
          'О дисциплине МДИ. Институт защит диссертаций и история его развития.',
          'О науке, её признаках и закономерностях.'
        ]
      },
      {
        number: 'Лекция 2',
        href: 'https://rutube.ru/video/ecd053910743a563d5e921969e147a1f/',
        lines: [
          'О начале науки. Признаки диссертационного исследования.',
          'Классификация отраслей науки'
        ]
      },
      {
        number: 'Лекция 3',
        href: 'https://rutube.ru/video/7b0fdb359a6c7ee530b7db29a07a279b/',
        lines: [
          'Соискатель, научный руководитель и консультант. Современная научная школа.',
          'Компоненты диссертационного исследования.'
        ]
      },
      {
        number: 'Лекция 4',
        href: 'https://rutube.ru/video/808bf88de4c572ffbc8318cee20c87c6/',
        lines: [
          'Объект, субъект и предмет ДИ. Формирование тематики диссертации.',
          'Паспорт научной специальности. Наименование диссертации.'
        ]
      },
      {
        number: 'Лекция 5',
        href: 'https://rutube.ru/video/9ccc154f175ae2ee6b3e4da3a691d5a7/',
        lines: [
          'Актуальность объекта и предмета (результатов) исследования.',
          'Проблема, цель, задачи в диссертации.'
        ]
      },
      {
        number: 'Лекция 6',
        href: 'https://rutube.ru/video/7b3550e65f40b2b818e3deb43fbca8ae/',
        lines: ['Формы и структуры диссертации. О методах диссертационного исследования.']
      },
      {
        number: 'Лекция 7',
        href: 'https://rutube.ru/video/7af7c65308128d0949d4ce549bf564b8/',
        lines: ['Информационный и эвристический поиск']
      },
      {
        number: 'Лекция 8',
        href: 'https://rutube.ru/video/442155f357f7d9e7d16ee1a2b7269653/',
        lines: ['Генерация и формулирование гипотез. Методы получения и обоснования.']
      },
      {
        number: 'Лекция 9',
        href: 'https://rutube.ru/video/92246cc22814563e179b158e5ab3ce77/',
        lines: [
          'Научный вывод и результат. Принципы методологической выдержанности.',
          'Заключение к диссертации.'
        ]
      },
      {
        number: 'Лекция 10',
        href: 'https://rutube.ru/video/98d090b47b05a82826d2405945334f28/',
        lines: [
          'Автореферат диссертации. Организация деятельности диссертанта.',
          'Презентация результатов. Подготовка к защите и защита.'
        ]
      }
    ]
  },
  {
    id: 'asp',
    title: 'Подготовка и защита кандидатской диссертации',
    lectures: [
      {
        number: 'Лекция 1',
        href: 'https://rutube.ru/video/140444838d2278d61fe239bd7c7710d6/',
        title:
          'С этого видео мы начинаем изложение образовательного курса: «Подготовка и защита кандидатской диссертации». Темы лекции:',
        bullets: [
          {
            text: 'познакомимся с историей диссертации,',
            href: 'https://example.com'
          },
          {
            text: 'нормативами к диссертации и соискателю ученой степени кандидата наук,',
            href: 'https://example.com'
          },
          {
            text: 'посмотрим, чем можно руководствоваться в трудах над диссертацией.',
            href: 'https://example.com'
          }
        ],
        bulletTone: 'body'
      },
      {
        number: 'Лекция 2',
        href: 'https://rutube.ru/video/e3be9af1b9e0b7b43db4ab2fcf961e35/',
        lines: [
          'Сначала мы поговорим о науке, дадим её определение. Рассмотрим признаки и функции научного исследования.',
          'Наш второй вопрос - признаки уже диссертационного исследования.'
        ]
      },
      {
        number: 'Лекция 3',
        href: 'https://rutube.ru/video/1338b90e5dc13e34dd1c6f229218b2b2/',
        lines: [
          'Классификация научных знаний и номенклатура научных специальностей.',
          'Поговорим о паспорте научных специальностей - очень важном документе для защиты.',
          'И подробнее остановимся на подготовке диссертации в качестве проекта.'
        ]
      },
      {
        number: 'Лекция 4',
        href: 'https://rutube.ru/video/33a7d377dd4a198603fff8128cc439ca/',
        lines: [
          '4.1. Критерии оценки диссертации',
          '4.2. Компоненты диссертации.',
          '4.3. Исследовательский метод.'
        ]
      },
      {
        number: 'Лекция 5',
        href: 'https://rutube.ru/video/fbe161c36ee653aaf561204e0a3e4249/',
        lines: ['Объект, предмет исследования, наименование диссертации']
      },
      {
        number: 'Лекция 6',
        href: 'https://rutube.ru/video/e86ac591670de30343a6503144d76ece/',
        lines: [
          '6.1. Методические рекомендации выбора объекта и предмета (темы) исследования.',
          '6.2. Введение к диссертации и общая характеристика работы.'
        ]
      },
      {
        number: 'Лекция 7',
        href: 'https://rutube.ru/video/1524b26a6562e16a9a636d76d4ed872f/',
        lines: [
          '7.1. Степень разработанности темы.',
          '7.3. Цель (проблема) и задачи (направления) исследования'
        ]
      },
      {
        number: 'Лекция 8',
        href: 'https://rutube.ru/video/61cbcac5dfb4ebc94da72855738bb05a/',
        lines: [
          '8.1. Формы и структуры диссертации.',
          '8.2. Методы диссертационного исследования.',
          '8.3. Методы поиска.',
          '8.4. Информационный поиск'
        ]
      },
      {
        number: 'Лекция 9',
        href: 'https://rutube.ru/video/77b2b0e036324071c57bf9405c083105/',
        lines: ['Эвристический поиск']
      },
      {
        number: 'Лекция 10',
        href: 'https://rutube.ru/video/eee890be17abf37daf0e0d2f40fea52c/',
        lines: [
          '10.1. Генерация и формулирование гипотез.',
          '10.2. Методические приемы достижения новизны.'
        ]
      },
      {
        number: 'Лекция 11',
        href: 'https://rutube.ru/video/44940a08ca55fc3a1d9da19d66c667ed/',
        lines: [
          '- Значение результатов для теории и практики.',
          '- Методы обоснования и апробация результатов.',
          '- Научный вывод и научный результат в диссертации.',
          '- Принципы методологического соответствия диссертации.',
          '- Заключение к диссертации.'
        ]
      },
      {
        number: 'Лекция 12',
        href: 'https://rutube.ru/video/85cb58917fd8f572fe2180363084800a/',
        lines: [
          '- Принципы методологического соответствия диссертации',
          '- Заключение к диссертации',
          '- Подготовка к защите и защита диссертации.',
          '- Презентация результатов',
          '- Процедура защиты',
          '- Доклад',
          '- Вопросы после доклада'
        ]
      }
    ]
  },
  {
    id: 'doc',
    title: 'Курс «Докторская диссертация»',
    lectures: [
      {
        number: 'Глава 1',
        title: 'АУДИТОРИЯ, ЦЕЛИ, ЗАДАЧИ, ТЕМАТИКА КУРСА, ОЖИДАЕМЫЕ РЕЗУЛЬТАТЫ',
        bullets: [
          {
            text: '1.1. Аудитория, цель, задачи.',
            href: 'https://rutube.ru/video/f14162b1f621c6c9f81a8eade7d9fe2b/'
          },
          {
            text: '1.2. Тематика курса и ожидаемые результаты.',
            href: 'https://rutube.ru/video/6716f0aae144fb4bbca701793286107e/'
          },
          {
            text: '1.3. Библиотека диссертанта.',
            href: 'https://rutube.ru/video/ab48669a16090042bcb2e8b786e4569c/'
          },
          {
            text: '1.4. Интернет-пространство диссертанта.',
            href: 'https://rutube.ru/video/ec657852011a991b118587767fa2d887/'
          },
          {
            text: '1.5. Организация деятельности.',
            href: 'https://rutube.ru/video/e61f54d0432e6a4f887b4f7d7fa7acd2/'
          }
        ],
        bulletTone: 'topics'
      },
      {
        number: 'Глава 2',
        title: 'ДИССЕРТАЦИЯ - НАУЧНО-КВАЛИФИКАЦИОННАЯ РАБОТА',
        bullets: [
          {
            text: '2.1. Признаки диссертационного исследования',
            href: 'https://rutube.ru/video/18e7d5d58de2793003b4386c790e0b24/'
          },
          {
            text: '2.2. Норма и правила',
            href: 'https://rutube.ru/video/891d15c1c99327979e5f47884c6378a2/'
          },
          {
            text: '2.3. Критерии оценки диссертационной работы',
            href: 'https://rutube.ru/video/f7c37231ef11d45446b6dd9e4a00d5fc/'
          },
          {
            text: '2.4. Научный консультант',
            href: 'https://rutube.ru/video/2a24da6c9084ae1f9b7c19aaead19f5d/'
          },
          {
            text: '2.5. Научная школа',
            href: 'https://rutube.ru/video/2659fc6f7a56f2c5e04461310928b3ef/'
          },
          {
            text: '2.6. Традиции научных школ',
            href: 'https://rutube.ru/video/932f914037df4e369bdf36197a3ac757/'
          },
          {
            text: '2.7. О традициях диссертационных советов',
            href: 'https://rutube.ru/video/1ab2d086a75bec1779f2c9a8234effab/'
          },
          {
            text: '2.8. Факторы успеха в подготовке и защите',
            href: 'https://rutube.ru/video/b6746d119f604178be41c371b6f558b6/'
          }
        ],
        bulletTone: 'topics'
      },
      {
        number: 'Глава 3',
        title: 'ОТ КАНДИДАТСКОЙ К ДОКТОРСКОЙ',
        bullets: [
          {
            text: '3.1. От кандидатской к докторской',
            href: 'https://rutube.ru/video/6f2a4d12ec84d416d3ff2dfa67b0b634/'
          },
          {
            text: '3.2. Классификация научных дисциплин и отраслей науки',
            href: 'https://rutube.ru/video/1200ccfd0c15d0327f660bd3e42f6a74/'
          },
          {
            text: '3.3. Паспорт научной специальности',
            href: 'https://rutube.ru/video/6bf09c70398ac9415ff6aec13dde631c/'
          },
          {
            text: '3.4. Компоненты диссертационной работы',
            href: 'https://rutube.ru/video/f5cf34035e5198eb5c02a4df0386316d/'
          },
          {
            text: '3.5. Объект и предмет исследования',
            href: 'https://rutube.ru/video/a6b0dfe70191166ea4abe5bc166de5fa/'
          },
          {
            text: '3.6. Методика выбора объекта и предмета исследования',
            href: 'https://rutube.ru/video/df07875a5dc1f8f438084afc1543d8f9/'
          },
          {
            text: '3.7. Выбор наименования диссертации',
            href: 'https://rutube.ru/video/7cb256c22f660b8b5c94034d639d54b5/'
          },
          {
            text: '3.8. Структура и оглавление диссертации',
            href: 'https://rutube.ru/video/129c79ad2b35f2dfc512ca481e736378/'
          }
        ],
        bulletTone: 'topics'
      },
      {
        number: 'Глава 4',
        title: 'ВВЕДЕНИЕ К ДИССЕРТАЦИИ И ОБЩАЯ ХАРАКТЕРИСТИКА РАБОТЫ В АВТОРЕФЕРАТЕ',
        bullets: [
          {
            text: '4.1. Введение диссертации и ОХР в автореферате',
            href: 'https://rutube.ru/video/4f29d476f36e1055663d3fbc673aa301/'
          },
          {
            text: '4.2. Актуальность темы исследования',
            href: 'https://rutube.ru/video/80000ac7d144c51ed55c97e26f363304/'
          },
          {
            text: '4.3. Степень разработанности темы',
            href: 'https://rutube.ru/video/fdeb89b6065d73be54d1de967d886636/'
          },
          {
            text: '4.4. Цель, задачи',
            href: 'https://rutube.ru/video/0626cee767ab1f0ab87e706b5cb9d531/'
          },
          {
            text: '4.5. Научная новизна. Информационный поиск',
            href: 'https://rutube.ru/video/04be4c5f25240fc2b19d43fc1290af34/'
          },
          {
            text: '4.6. Научная новизна. Эвристический поиск',
            href: 'https://rutube.ru/video/5b1fb09a02f61ed4fcd91ec19896177f/'
          },
          {
            text: '4.7. Научная новизна. Генерация и формулирование гипотез',
            href: 'https://rutube.ru/video/1a7d914e85bc4f22396f4c5d036f7448/'
          },
          {
            text: '4.8. Научная новизна. Методические приемы достижения новизны',
            href: 'https://rutube.ru/video/9284b3e4dd46aa33ee28873657005820/'
          },
          {
            text: '4.9. Методология и методы исследования',
            href: 'https://rutube.ru/video/37896d17efc75bcbf9ebb1143adc87b7/'
          },
          {
            text: '4.10. Положения, выносимые на защиту',
            href: 'https://rutube.ru/video/c7975f7df4ad89dc6990bb46e76082fd/'
          },
          {
            text: '4.11. Методы обоснования и апробация результатов',
            href: 'https://rutube.ru/video/4bc0c5b4ec1a7715ca253575dcc8200f/'
          },
          {
            text: '4.12. Принципы методологического соответствия',
            href: 'https://rutube.ru/video/bc2cb6cc209d43517d82f0c963302db2/'
          },
          {
            text: '4.13. Научный результат и научный вывод',
            href: 'https://rutube.ru/video/6fc9933812ea94dcd47352a2b719eb56/'
          },
          {
            text: '4.14. Значение результатов для теории и практики',
            href: 'https://rutube.ru/video/0066db2c4a9337d6585cdcd97de87775/'
          }
        ],
        bulletTone: 'topics'
      },
      {
        number: 'Глава 5',
        title: 'ПОДГОТОВКА К ЗАЩИТЕ, ДОКЛАД, ПРЕЗЕНТАЦИЯ, ВОПРОСЫ ПОСЛЕ ДОКЛАДА',
        bullets: [
          {
            text: '5.1. Подготовка к защите',
            href: 'https://rutube.ru/video/1125c1f156a5c03cac5b4e96fa31f5ca/'
          },
          {
            text: '5.2. Доклад о работе',
            href: 'https://rutube.ru/video/981388fff3ca597ef1ba33eecd61a80a/'
          },
          {
            text: '5.3. Презентация к докладу',
            href: 'https://rutube.ru/video/1696dd96dfc990245515fffcac09f16f/'
          },
          {
            text: '5.4. Вопросы после доклада',
            href: 'https://rutube.ru/video/e6355a25f400bd5874be7853269de478/'
          }
        ],
        bulletTone: 'topics'
      }
    ]
  }
]
