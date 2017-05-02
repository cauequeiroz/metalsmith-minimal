var metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    layouts     = require('metalsmith-layouts'),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    watch       = require('metalsmith-watch'),
    serve       = require('metalsmith-serve'),
    handlebars  = require('handlebars');

metalsmith(__dirname)
    .metadata({
        site: {
            name: 'Caue Queiroz',
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
    .use(permalinks({
        relative: false,
        pattern: ':title'
    }))
    .use(layouts({
        engine: 'handlebars',
        directory: './layouts',
        default: 'article.html',
        pattern: ["*/*/*html", "*/*html", "*html"],
        partials: {
            header: 'partials/header',
            footer: 'partials/footer'
        }
    }))
    // .use(serve({
    //     port: 8081,
    //     verbose: true
    // }))
    // .use(watch({
    //     paths: {
    //         '${source}/**/*': true,
    //         'layout/**/*': '**/*'
    //     }
    // }))
    .build(function(err) {
        console.log(err ? err : '[DEV] Electroniq built!');
    });