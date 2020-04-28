const app = {

    books: [],

    initialize: function() {
        $('.listBooks').click(function() {
            app.fetchBooks();
        });

    },

    makeHTML: function() {
        var theHTML = '';
        for (var i = 0; i < app.books.length; i++) {
            theHTML += "<div class='books'>";
            theHTML += "<h3>" + app.books[i].volumeInfo.title + "</h3>";
            theHTML += "<h5>" + app.books[i].volumeInfo.subtitle + "</h5>";
            theHTML += "<p>" + app.books[i].volumeInfo.description + "</p>";
            // theHTML += "<a href=" + app.books[i].items.selfLink + ">" + "Click here for more!" + "</a>";
            // theHTML += "<p class='links'>" + app.books[i].selfLink + "</p>";
            theHTML += "</div>";
        }
        $('.container').html(theHTML);
    },
    fetchBooks: function() {

        var myKey = '';
        var myURL = 'https://www.googleapis.com/books/v1/users/105358489593807934540/bookshelves/3/volumes?key=';
        var url = myURL + myKey;
        // console.log(url);
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            error: function(err) {
                console.log("Uh oh...");
                console.log(err);
            },
            success: function(data) {
                // console.log(data);
                app.books = data.items;
                app.makeHTML(data);
            }
        })
    },

}