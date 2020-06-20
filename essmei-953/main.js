$('.show-filters').on('click', function() {
  // 1. when nav is expanded, collapse it
  // 2. change text of show filters to 'show filters'
  // 3. otherwise, if the nav is collapsed, expand it
  // 4. change the text to say 'hide filters'
  
  if ($('.filters-list').is(':visible')) {
    $('.filters-list').slideUp()
    $('.show-filters').text('Show filters')
  } else {
    $('.filters-list').slideDown()
    $('.show-filters').text('Hide filters')
  }
  
  // this will block the default behavior of the # href jumping to the top of the page
  return false
})

$('.filters-list a').on('click', function(){
  
  var filter = $(this).attr('data-filter')
  console.log(filter)
  
  // 1. hide all the products
  // 2. show the products with a particular filter
  $('.product').hide()
  $(filter).show()
  
// first we remove all the selected classes from our filters
  
  $('.filters-list a').removeClass('selected')
    // this will add a class name of selected to the current filter link that we've just clicked on
  $(this).addClass('selected')
  
  // this blocks the link from following the href
  return false 
  
})