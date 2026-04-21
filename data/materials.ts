export type MaterialCard = {
  title: string
  icon?: 'book' | 'presentation'
  pdfPath?: string
  href?: string
}

export type MaterialSection = {
  title: string
  items: MaterialCard[]
}

export const materialSections: MaterialSection[] = [
  {
    title: 'Учебные пособия, монографии, учебники',
    items: [
      {
        title: 'Селетков С.Г. Конструктор ВКР и написание публикации/ Учебное пособие',
        pdfPath: '/docs/constructor-vkr.pdf'
      },
      {
        title: 'Селетков С.Г. Соискателю ученой степени. – 3-е изд., 2002',
        pdfPath: '/docs/degree-seeker-2002.pdf'
      },
      {
        title: 'Селетков С.Г. Теоретические положения диссертационного исследования/ моног. – 2011',
        pdfPath: '/docs/theoretical-provisions-2011.pdf'
      },
      {
        title: 'Селетков С.Г. Дидактическая система методологической подготовки диссертантов/ моног – 2016',
        pdfPath: '/docs/didactics-2016.pdf'
      },
      {
        title: 'Селетков С.Г. Методология диссертационного исследования / учебник – 2020',
        href: 'https://urait.ru/book/metodologiya-dissertacionnogo-issledovaniya-588419'
      },
      {
        title: 'Селетков С.Г. Подготовка и защита кандидатской диссертации / учебник - 2025',
        pdfPath: '/docs/candidate-defense-2025.pdf'
      }
    ]
  },
  {
    title: 'Научно-методическое консультирование по подготовке общей характеристики работы автореферата',
    items: [
      {
        title: 'Селетков С.Г. Конструктор ВКР и написание публикации/ Учебное пособие',
        icon: 'presentation',
        href: 'https://rutube.ru/video/0998062cfb2facc453647f9e259f378c/'
      }
    ]
  }
]
