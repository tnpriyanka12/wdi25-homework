console.log('Loaded!');

$(document).ready( function() {

  $('#search_pod').on('click', function( e ){
    e.preventDefault();
    let query = $('#query').val();
    console.log(query);

    $.ajax('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
    .done(
      function( data ){
        console.log(data);


      $('<h3>').html(data.title).appendTo('#results');
      $('<h3>').html('Date: ').appendTo('#results');
      $('<p>').html(data.date).appendTo('#results');

      $('<h3>').html('Explanation: ').appendTo('#results');
      $('<p>').html(data.explanation).appendTo('#results');

      $(('<img>'), {
        src : data.url,
        height: '200px',
        width: '200px'
      }).appendTo('#results');

    })
    .fail (function(err){
      console.error(err);
    });

  })



  $('#search').on('click', function( e ){
    e.preventDefault();
    let query = $('#query').val();
    console.log(query);
    $('#results').empty();

    $.ajax('https://images-api.nasa.gov/search?q='+query)
    .done(
      function( data ){
      data.collection.items.forEach( function(e){
        // console.log(data.collection.items);
        // console.log('e issss ', e);
        // console.log('href isssss' , e.href);

        $.ajax(e.href)
        .done(
          function( d ){
          d.forEach( function(e){
            // $('<h3>').html(e.data.description_508).appendTo('#results');

            console.log('hiiiiiiiiii', e);
          $('<h3>').html('image').appendTo('#results');

                $(('<img>'), {
                  src : e,
                  height: '200px',
                  width: '200px'
                }).appendTo('#results');

          })
            })
            .fail (function(err){
              console.error(err);
            });

        // $('<h3>').html(data.title).appendTo('#results');
        // $('<h3>').html('Date: ').appendTo('#results');
      // let  search_items = data.items[0];
    })
      })
      .fail (function(err){
        console.error(err);
      });

      })


});
