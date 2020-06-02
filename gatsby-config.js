'use strict';

const siteConfig = require('./config.js');
const postCssPlugins = require('./postcss-config.js');

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://panda-program.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    url: siteConfig.url,
    siteUrl,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    copyright: siteConfig.copyright,
    disqusShortname: siteConfig.disqusShortname,
    menu: siteConfig.menu,
    author: siteConfig.author
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'media'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'css',
        path: `${__dirname}/static/css`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [{
          serialize: ({ query: { site, allMarkdownRemark } }) => (
            allMarkdownRemark.edges.map((edge) => Object.assign({}, edge.node.frontmatter, {
              description: edge.node.frontmatter.description,
              date: edge.node.frontmatter.date,
              url: site.siteMetadata.site_url + edge.node.fields.slug,
              guid: site.siteMetadata.site_url + edge.node.fields.slug,
              custom_elements: [{ 'content:encoded': edge.node.html }]
            }))
          ),
          query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        template
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
          output: '/rss.xml',
          title: siteConfig.title
        }]
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-mermaid',
          'gatsby-remark-relative-images',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-katex',
            options: {
              strict: 'ignore'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              withWebp: true,
              ignoreFileExtensions: [],
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' }
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links',
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*.html': [
            'cache-control: public, max-age=0, must-revalidate;'
          ],
          '/static/*': [
            'cache-control: public, max-age=31536000, immutable;'
          ],
          '/icons/*': [
            'cache-control: public, max-age=31536000, immutable;'
          ],
          '/media/*': [
            'cache-control: public, max-age=31536000, immutable;'
          ],
          '/**/*.js': [
            'cache-control: public, max-age=31536000, immutable;'
          ],
          '/**/*.css': [
            'cache-control: public, max-age=31536000, immutable;'
          ],
          '/sw.js': [
            'cache-control: public, max-age=0, must-revalidate;'
          ],
        },
        allPageHeaders: [],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: (headers) => headers,
        generateMatchPathRewrites: true,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/index.js`,
      }
    },
    'gatsby-plugin-netlify-cache',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [siteConfig.googleAnalyticsId],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl: url
              }
            }
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404|/404.html|/dev-404-page/|/category|/categories|/tag|/tags|/page/[0-9]+)/" }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        output: '/sitemap.xml',
        serialize: ({ site, allSitePage }) => allSitePage.edges.map((edge) => ({
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: 'daily',
          priority: 0.7
        }))
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#38A89D',
        display: 'standalone',
        icon: 'static/photo.jpg'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        }
      }
    },
    'gatsby-plugin-flow',
    'gatsby-plugin-optimize-svgs',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: siteConfig.url,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
            sitemap: `${siteUrl}/sitemap.xml`,
            host: siteUrl
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'panda-program'
      }
    },
  ]
};
