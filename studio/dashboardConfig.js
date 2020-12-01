export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc6564e5f96f644ffb7478b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fp5g2mgw',
                  apiId: '58717f36-3abc-4fc8-8006-a76e024258f2'
                },
                {
                  buildHookId: '5fc6564e56a2f2703161b306',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-68i9git6',
                  apiId: '78aaee44-034d-41bc-be41-c6e053f9dd93'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/balajikummari/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-68i9git6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
