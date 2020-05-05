const app = {

    books: [],

    initialize: function() {
        $(".popup").click(function() {
            app.fetchBooks();
        });

    },

    makeHTML: function() {
        var myTargetModal = $(this).attr('#firstBox');
        var theHTML = '';
        for (var i = 0; i < 1; i++) {
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
        // $(myTargetModal).html(theHTML);
        $(document).on('click', myTargetModal, function() {
            $('#firstBox').html(theHTML);
        });
    },

    makeHTMLTwo: function() {
        var myTargetModal = $(this).attr('#secondBox');
        var theHTML = '';
        for (var i = 1; i < 4; i++) {
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
        // $(myTargetModal).html(theHTML);
        $(document).on('click', myTargetModal, function() {
            $('#secondBox').html(theHTML);
        });
    },

    makeHTMLThree: function() {
        var myTargetModal = $(this).attr('#thirdBox');
        var theHTML = '';
        for (var i = 4; i < 5; i++) {
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
        // $(myTargetModal).html(theHTML);
        $(document).on('click', myTargetModal, function() {
            $('#thirdBox').html(theHTML);
        });
    },

    makeHTMLFour: function() {
        var myTargetModal = $(this).attr('#fourthBox');
        var theHTML = '';
        for (var i = 5; i < 6; i++) {
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
        // $(myTargetModal).html(theHTML);
        $(document).on('click', myTargetModal, function() {
            $('#fourthBox').html(theHTML);
        });
    },

    makeHTMLFive: function() {
        var myTargetModal = $(this).attr('#fifthBox');
        var theHTML = '';
        for (var i = 6; i < 9; i++) {
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
        // $(myTargetModal).html(theHTML);
        $(document).on('click', myTargetModal, function() {
            $('#fifthBox').html(theHTML);
        });
    },

    modal: function() {
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
    },

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
                app.makeHTMLTwo(data);
                app.makeHTMLThree(data);
                app.makeHTMLFour(data);
                app.makeHTMLFive(data);
                app.modal(data);
            }
        })
    },

}


// popup modal

// $(document).on('click', '.popup', function() {
//     var myTargetModal = $(this).attr('href');
//     $('#myModal').hide();
//     $('.modal-content').hide();

//     $('#myModal').fadeIn();
//     $(myTargetModal).fadeIn();
//     return false;
// });

// $("body").on("click", ".close", function() {
//     $('#myModal').hide();
//     $('.modal-content').hide();
// });

// $("body").on("click", ".mainBody", function() {
//     $('#myModal').hide();
//     $('.modal-content').hide();
// });



// smooth scroll 

document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        // Initiate parallax
        var p = new Parallax();
        // p.init();
    }
});