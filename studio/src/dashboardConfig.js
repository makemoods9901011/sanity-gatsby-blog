export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f5f91bf39d0b10fea0f03f7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-w6bwxbqn',
                  apiId: '33ddd828-e9eb-4bae-b66e-41446302ed82'
                },
                {
                  buildHookId: '5f5f91bf4b051d117c7518a3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7hz9k2bu',
                  apiId: 'd6b0cfbf-eb29-498e-91e8-0059f6f02dc5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/makemoods9901011/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7hz9k2bu.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
