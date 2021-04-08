function showSection(navButton) {
    console.log(navButton);
    let sections = $('section').toArray();
    $.each(sections, function() {
        let sectionId = $(this).attr('id');
        if (navButton == sectionId ) {
            var thing = $(this)
            console.log(thing)
            $(this).show("slide", 1000);
        }
    }) 
}

$('.nav-btn').click(function() {
    let navButton = $(this).attr('name');
    let sections = $('section').toArray();
    $.each(sections, function() {
        let sectionId = $(this).attr('id');
        if (navButton != sectionId) {
            $(this).hide("blind", 600);
        }
    }) 
   
    setTimeout(function() {
        showSection(navButton);
    }, 700);
})