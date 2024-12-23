import { ReactNode } from "react";

import ChromaticIcon from '@/../public/icons/chromatic.svg';
import CssIcon from '@/../public/icons/css.svg';
import CypressIcon from '@/../public/icons/cypress.svg';
import DjangoIcon from '@/../public/icons/django.svg';

export interface Experience {
  number: string;
  date: string;
  title: string;
  description: string;
  description_large: string[];
  technologies: ReactNode[];
}

export const experience: Experience[] = [
  {
    number: '01',
    date: '2022 - Actualidad',
    title: 'Dspot Team',
    description: 'I was part of more than 10 projects that included landing pages with advanced animations and optimized SEO, as well as complex applications designed to manage large volumes of data. Thanks to the use of modern tools like Next.js, I developed innovative technical solutions and unique visual experiences.',
    description_large: [
      'I was part of more than 10 projects that included landing pages with advanced animations and optimized SEO, as well as complex applications designed to manage large volumes of data. Thanks to the use of modern tools like Next.js, I developed innovative technical solutions and unique visual experiences.',
      'I was part of more than 10 projects that included landing pages with advanced animations and optimized SEO, as well as complex applications designed to manage large volumes of data. Thanks to the use of modern tools like Next.js, I developed innovative technical solutions and unique visual experiences.'
    ],
    technologies: [
      <CssIcon key="css1" />,
      <DjangoIcon key="django1" />,
      <CypressIcon key="cypress1" />,
      <ChromaticIcon key="chromatic1" />,
      <CssIcon key="css2" />,
      <DjangoIcon key="django2" />,
      <CypressIcon key="cypress2" />,
      <CssIcon key="css" />,
      <DjangoIcon key="django" />,
      <CypressIcon key="cypress" />,
      <ChromaticIcon key="chromatic" />
    ]
  },
  {
    number: '02',
    date: '2020 - 2022',
    title: 'Datazucar',
    description: 'I contributed to the design and development of critical business solutions for economic planning and management, used by over 60% of the companies in the country. My work included creating advanced interfaces with Ext JS, developing robust backend systems with Django, and implementing improvements that optimized operational efficiency and system performance.',
    description_large: [
      'I contributed to the design and development of critical business solutions for economic planning and management, used by over 60% of the companies in the country. My work included creating advanced interfaces with Ext JS, developing robust backend systems with Django, and implementing improvements that optimized operational efficiency and system performance.',
      'I contributed to the design and development of critical business solutions for economic planning and management, used by over 60% of the companies in the country. My work included creating advanced interfaces with Ext JS, developing robust backend systems with Django, and implementing improvements that optimized operational efficiency and system performance.',
    ],
    technologies: [
      <CssIcon key="css1" />,
      <DjangoIcon key="django1" />,
      <CypressIcon key="cypress1" />,
      <ChromaticIcon key="chromatic1" />,]
  },
]