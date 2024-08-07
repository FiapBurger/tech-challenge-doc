import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tech-challenge-doc/__docusaurus/debug',
    component: ComponentCreator('/tech-challenge-doc/__docusaurus/debug', '126'),
    exact: true
  },
  {
    path: '/tech-challenge-doc/__docusaurus/debug/config',
    component: ComponentCreator('/tech-challenge-doc/__docusaurus/debug/config', '5b4'),
    exact: true
  },
  {
    path: '/tech-challenge-doc/__docusaurus/debug/content',
    component: ComponentCreator('/tech-challenge-doc/__docusaurus/debug/content', 'b04'),
    exact: true
  },
  {
    path: '/tech-challenge-doc/__docusaurus/debug/globalData',
    component: ComponentCreator('/tech-challenge-doc/__docusaurus/debug/globalData', '9a6'),
    exact: true
  },
  {
    path: '/tech-challenge-doc/__docusaurus/debug/metadata',
    component: ComponentCreator('/tech-challenge-doc/__docusaurus/debug/metadata', '97d'),
    exact: true
  },
  {
    path: '/tech-challenge-doc/__docusaurus/debug/registry',
    component: ComponentCreator('/tech-challenge-doc/__docusaurus/debug/registry', 'e82'),
    exact: true
  },
  {
    path: '/tech-challenge-doc/__docusaurus/debug/routes',
    component: ComponentCreator('/tech-challenge-doc/__docusaurus/debug/routes', '7ab'),
    exact: true
  },
  {
    path: '/tech-challenge-doc/markdown-page',
    component: ComponentCreator('/tech-challenge-doc/markdown-page', 'fe7'),
    exact: true
  },
  {
    path: '/tech-challenge-doc/docs',
    component: ComponentCreator('/tech-challenge-doc/docs', '320'),
    routes: [
      {
        path: '/tech-challenge-doc/docs/category/designer-tático',
        component: ComponentCreator('/tech-challenge-doc/docs/category/designer-tático', '20f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/category/domain-storytelling',
        component: ComponentCreator('/tech-challenge-doc/docs/category/domain-storytelling', '8a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/category/event-storm',
        component: ComponentCreator('/tech-challenge-doc/docs/category/event-storm', '53e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/context-map',
        component: ComponentCreator('/tech-challenge-doc/docs/context-map', '3d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/designer-tatico',
        component: ComponentCreator('/tech-challenge-doc/docs/designer-tatico', '9ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/designer-tatico/modelagem-dado',
        component: ComponentCreator('/tech-challenge-doc/docs/designer-tatico/modelagem-dado', '2b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/domain-storytelling/fluxo-pedido',
        component: ComponentCreator('/tech-challenge-doc/docs/domain-storytelling/fluxo-pedido', '748'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/domain-storytelling/gerente',
        component: ComponentCreator('/tech-challenge-doc/docs/domain-storytelling/gerente', '3dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/domain-storytelling/pedido-erro',
        component: ComponentCreator('/tech-challenge-doc/docs/domain-storytelling/pedido-erro', '43a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/event -storm/agragados',
        component: ComponentCreator('/tech-challenge-doc/docs/event -storm/agragados', '677'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/event -storm/big-picture',
        component: ComponentCreator('/tech-challenge-doc/docs/event -storm/big-picture', '316'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/event -storm/eventos-caoticos',
        component: ComponentCreator('/tech-challenge-doc/docs/event -storm/eventos-caoticos', '796'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/event -storm/eventos-ordenados',
        component: ComponentCreator('/tech-challenge-doc/docs/event -storm/eventos-ordenados', '386'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/intro',
        component: ComponentCreator('/tech-challenge-doc/docs/intro', '68a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/linguagem-ubiqua',
        component: ComponentCreator('/tech-challenge-doc/docs/linguagem-ubiqua', 'a20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tech-challenge-doc/docs/relatos-domain-experts',
        component: ComponentCreator('/tech-challenge-doc/docs/relatos-domain-experts', 'bf9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/tech-challenge-doc/',
    component: ComponentCreator('/tech-challenge-doc/', 'cb9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
