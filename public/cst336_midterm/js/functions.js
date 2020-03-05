$(document).ready(function(){
    $("#queryButton").on("click",findBook);
   function findBook(){
       /*$("#cover-img").html("");
          $("#title").html("");
          $("#author").html("");
          $("#publish-year").html("");
          $("#publisher").html("");
          $("#isbn-print").html("");
          $("#pages").html("");*/
          var isbn=$("#isbn").val();
       //generate an AJAX call
       $.ajax({
        url: "https://openlibrary.org/api/books?bibkeys=ISBN:"+isbn+"&format=json&jscmd=data",
        type: "GET",
        dataType: "json",
        success: function(data) {
            var cover=data["ISBN:"+isbn]["cover"]["medium"];
          //put the right data in the right elements
          $("#cover-img").append('<img src="'+cover+'">');
          $("#title").append('Title: '+data["ISBN:"+isbn]["title"]);
          $("#author").append('Author: '+data["ISBN:"+isbn]["authors"][0]["name"]);
          $("#publish-year").append('Publish: '+data["ISBN:"+isbn]["publish_date"]);
          $("#publisher").append('Publisher: '+data["ISBN:"+isbn]["publishers"][0]["name"]);
          $("#isbn-print").append('ISBN: '+isbn);
          $("#pages").append('Pages: '+data["ISBN:"+isbn]["number_of_pages"]);
        },
        error:function(error){
            alert(error)
        },
      });
   }
});