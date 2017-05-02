var metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    layouts     = require('metalsmith-layouts'),
    collections = require('metalsmith-collections'),
    handlebars  = require('handlebars');

metalsmith(__dirname)
    .metadata({
        site: {
            name: 'Electroniq',
            description: "Electroniq is astrophysicist (and retro music enthusiast) Tara Himmels' blog."
        }
    })
    .source('./src')
    .destination('./public')
    .use(collections({
        articles: {
            pattern: 'articles/**/*.md',
            sortBy: 'date',
            reverse: true
        }
    }))
    .use(markdown())
    .use(layouts({
        engine: 'handlebars',
        directory: './layouts',
        default: 'article.html',
        pattern: ["*/*/*html", "*/*html", "*html"]
    }))
    .build(function(err) {
        console.log(err ? err : '[DEV] Electroniq built!');
    });