var penthouse = require('penthouse');

penthouse({
    url: 'http://127.0.0.1:8080',
    cssString: '.foobar {color: red; }',
    width: 1600,
    timeout: 36000,
    height: 930
});
