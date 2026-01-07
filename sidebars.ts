import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  fundamentalsSidebar: [
    {
      type: 'category',
      label: 'Fundamentals',
      items: [
        'fundamentals/intro',
        'fundamentals/syntax',
        'fundamentals/data-types',
        'fundamentals/exercises',
      ],
    },
  ],
  interviewsSidebar: [
    {
      type: 'category',
      label: 'Interview Prep',
      items: [
        'interviews/intro',
        'interviews/arrays',
        'interviews/strings',
        'interviews/exercises',
      ],
    },
  ],
};

export default sidebars;
