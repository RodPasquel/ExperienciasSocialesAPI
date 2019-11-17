const moviesMock = 
[
{"id":"1abc62de-e820-440e-a2da-df9009544ed7","title":"Ambush Trail","year":1993,"cover":"http://dummyimage.com/118x196.jpg/cc0000/ffffff","description":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.","duration":1960,"contentRating":"G","source":"http://pagesperso-orange.fr/tortor/id/nulla.aspx","tags":["Comedy|Crime|Drama","Comedy|Horror"]},
{"id":"d150c664-3167-497b-a8e4-913e52e6c6c6","title":"Breakfast at Tiffany's","year":1984,"cover":"http://dummyimage.com/125x218.png/ff4444/ffffff","description":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","duration":1896,"contentRating":"R","source":"http://hostgator.com/primis/in/faucibus/orci/luctus/et/ultrices.xml","tags":["Action|Crime|Drama|Thriller","Drama"]},
{"id":"3564eab5-ee1e-4495-a04f-c91532e4c875","title":"Dinner, The (Cena, La)","year":2011,"cover":"http://dummyimage.com/122x134.jpg/5fa2dd/ffffff","description":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","duration":2002,"contentRating":"R","source":"https://blogger.com/non/quam/nec/dui/luctus/rutrum/nulla.png","tags":["Crime|Thriller","Children|Drama","Comedy","Fantasy|Horror"]},
{"id":"b7e5df55-29d3-44c2-888e-169e599bbc7b","title":"House with Laughing Windows, The (Casa dalle finestre che ridono, La)","year":2012,"cover":"http://dummyimage.com/162x170.jpg/5fa2dd/ffffff","description":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","duration":1902,"contentRating":"G","source":"https://cafepress.com/in/lacus/curabitur.jpg","tags":["Comedy|Western","Action","Drama","Action|Comedy|Crime"]},
{"id":"db1f2423-6973-4f11-ae86-037ee3e91502","title":"Femme Fatale","year":1985,"cover":"http://dummyimage.com/184x200.png/ff4444/ffffff","description":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","duration":1954,"contentRating":"PG-13","source":"https://kickstarter.com/etiam/vel.jpg","tags":["Documentary","Drama","Comedy","Comedy|Drama|Romance","Action|Drama|Sci-Fi|Thriller"]},
{"id":"7e19c228-b0f0-4521-a3e9-b2fab5bf608e","title":"Three Little Words","year":1999,"cover":"http://dummyimage.com/129x184.jpg/cc0000/ffffff","description":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.","duration":2027,"contentRating":"PG-13","source":"https://cdbaby.com/id.aspx","tags":["Comedy|Musical","Documentary","Adventure|Comedy"]},
{"id":"76218f8e-4bf8-49b4-8b38-6b52b3dfdf25","title":"Burn","year":1992,"cover":"http://dummyimage.com/152x190.jpg/ff4444/ffffff","description":"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.","duration":1901,"contentRating":"G","source":"https://infoseek.co.jp/magna/bibendum/imperdiet/nullam/orci/pede.js","tags":["Adventure|Comedy|Sci-Fi","Comedy|Crime","Crime|Horror|Thriller","Horror"]},
{"id":"161b5558-fe24-4c6c-9451-ed65cb0b7f6f","title":"Never Back Down","year":1994,"cover":"http://dummyimage.com/178x137.bmp/5fa2dd/ffffff","description":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.","duration":1937,"contentRating":"PG","source":"https://indiatimes.com/integer/aliquet/massa/id/lobortis/convallis/tortor.jpg","tags":["Horror|Thriller","Documentary","Drama","Drama","Adventure|Comedy|Romance"]},
{"id":"dc3928c7-b505-4746-802c-e02640f40d04","title":"Gruffalo, The","year":2004,"cover":"http://dummyimage.com/167x115.jpg/5fa2dd/ffffff","description":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.","duration":1890,"contentRating":"NC-17","source":"http://uiuc.edu/elit/sodales/scelerisque/mauris.xml","tags":["Comedy|Fantasy|Romance","Fantasy|Horror","Drama"]},
{"id":"ef41ff21-c1d2-4002-8338-7fd3841d7244","title":"Hôtel des Invalides","year":2012,"cover":"http://dummyimage.com/170x129.png/5fa2dd/ffffff","description":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","duration":1888,"contentRating":"G","source":"http://youtu.be/faucibus/cursus/urna/ut/tellus/nulla/ut.html","tags":["Drama","Drama","Adventure|Children|Comedy","Comedy|Drama|Romance","Comedy|Drama"]}
];

function filteredMoviesMocks(tag) {
    return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MovieServiceMock {
    async getMovies() {
        return Promise.resolve(moviesMock);
    }

    async createMovie() {
        return Promise.resolve(moviesMock[0]);
    }
}

module.exports = {
    moviesMock,
    filteredMoviesMocks,
    MovieServiceMock
}