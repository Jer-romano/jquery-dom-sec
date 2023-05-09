let list = $("#movie-list tbody");
let ratingContainer = $("#movie-list");
let form = $("form");
form.on("submit", function(e) {
    e.preventDefault();
    let title = $("#title");
    let rating = $("#rating");
    let newMovie = $(`<tr class="movie-entry"> <td>${title.val()}</td> <td>${rating.val()}</td> <td><button>Remove</button></td> </tr>`);
    newMovie.appendTo(list);
    title.val("");
});

ratingContainer.on("click", ".movie-entry", function(e) {
    deleteRating(e.target);
});

function deleteRating(button) {
    button.parentNode.parentNode.remove();
}