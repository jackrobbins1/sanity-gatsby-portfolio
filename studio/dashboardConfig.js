export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '603fb0bc90141f6924f56959',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-q6wrhajd',
                  apiId: 'b9b26ca0-0cd2-450a-9d20-3c622de855f2'
                },
                {
                  buildHookId: '603fb0bd6bfd884cfa4594eb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ia2fgsd8',
                  apiId: '30982307-b15c-45be-874f-32c46a453e8d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jackrobbins1/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ia2fgsd8.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
