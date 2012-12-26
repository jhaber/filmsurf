$(document).ready(function() {
    var searchBox = $('#search');

    $('.form-search').submit(function(event) {
        event.preventDefault();
    });

    searchBox.fadeIn(1000, function() {
        searchBox.focus();
    });

    searchBox.keyup(function(event) {
        if (event.keyCode == 13) {
            var query = searchBox.val();

            var resultsContainer = $('#container-results');
            resultsContainer.html('');
            $.ajax({
                url: 'http://filmsurf-backend.herokuapp.com/search',
                type: 'GET',
                data: { q: query },
                success: function(results) {
                    appendResults(results.results, resultsContainer);
                }
            });
        }
    });
});

function appendResults(results, container) {
    $.each(results, function(index, result) {
        if (result.poster_path) {
            var div = '<div class="span2"><img src="http://cf2.imgobject.com/t/p/w154' +
                result.poster_path + '" id="' + result.id + '" alt="' + result.title + '"/></div>';
            container.append(div);
        }
    });
}
