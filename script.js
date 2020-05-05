const app = {

    books: [],

    initialize: function() {
        $(".popup").click(function() {
            app.fetchBooks();
        });

    },

    makeHTML: function() {
        var theHTML = '';
        for (var i = 0; i < app.books.length; i++) {
            theHTML += "<div class='books'>";
            theHTML += "<div class='left'>";
            theHTML += "<img class='bookCover' src='" + app.books[i].volumeInfo.imageLinks.thumbnail + "'>";
            theHTML += "</div>";
            theHTML += "<div class='right'>";
            theHTML += "<h3 class='bookTitle'>" + app.books[i].volumeInfo.title + "</h3>";
            theHTML += "<h5 class='author'>" + "By " + app.books[i].volumeInfo.authors + "</h5>";
            theHTML += "<p class='description'>" + app.books[i].volumeInfo.description + "</p>";
            theHTML += "</div>";
            theHTML += "</div>";
        }
        $('.modal-content').html(theHTML);
    },

    // imageAppend: function() {
    //     // const data = app.books[i];
    //     // const images = $(document.getElementsByTagName("button")).length;

    //     function myFunction() {
    //         document.getElementsByClassName("books")[0].innerHTML = data[1];
    //     }
    // },


    fetchBooks: function() {

        var myKey = 'AIzaSyBKsMtuOP_CVY-6aDMoBf8V3oPYBXzksNE';
        var myURL = 'https://www.googleapis.com/books/v1/users/105358489593807934540/bookshelves/3/volumes?key=';
        // var maxResults = '/maxResults=20';
        var url = myURL + myKey;
        // console.log(url);
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            // startIndex: 0,
            // maxResults: 20,
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


$(document).on('click', '.popup', function() {
    var myTargetModal = $(this).attr('href');
    $('#myModal').hide();
    $('.modal-content').hide();

    $('#myModal').fadeIn();
    $(myTargetModal).fadeIn();
    return false;
});

$("body").on("click", ".close", function() {
    $('#myModal').hide();
    $('.modal-content').hide();
});

$("body").on("click", ".mainBody", function() {
    $('#myModal').hide();
    $('.modal-content').hide();
});