var metalsmith = require('metalsmith');

metalsmith(__dirname)
    .metadata({
        site: {
            name: 'Electroniq',
            description: "Electroniq is astrophysicist (and retro music enthusiast) Tara Himmels' blog."
        }
    })
    .source('./src')
    .destination('./public')
    .build(function(err) {
        console.log(err ? err : '[DEV] Electroniq built!');
    });