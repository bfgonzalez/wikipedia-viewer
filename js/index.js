$("#search-btn").click(function() {

  var searchTerm = document.getElementById("input").value;
  var wikiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: wikiURL,
      async: false,
      dataType: "json",
      success: function(data) {
        console.log(data);
        $("#input").val("");
        $("#result-list").html("");
        for (i = 0; i < data[1].length; i ++) {
          $("#result-list").append('<a target="blank" href='+data[3][i]+">"+'<div class="results"><h2>'+data[1][i]+'</h2>'+'<p>'+data[2][i]+'</p></div></a>');
        }
      },
      error: function(errorMessage) {
        alert("Error");
      }
    });
  });

document.addEventListener("keyup", function(e) {
  event.preventDefault();
  if (e.keyCode === 13) {
    document.getElementById("search-btn").click();
  }
});