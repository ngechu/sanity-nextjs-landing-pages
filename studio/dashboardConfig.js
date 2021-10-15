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
                  buildHookId: '6169e34544705c00bfdeefa4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-arze2ni7',
                  apiId: 'b065e043-1560-453b-81ce-ef9f9b16fa09'
                },
                {
                  buildHookId: '6169e345117afe00c40a3e03',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-711p3fxv',
                  apiId: '56fe0afa-1b16-4472-a171-cb8e33f351ab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ngechu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-711p3fxv.netlify.app', category: 'apps'}
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
