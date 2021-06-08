function showSection(navButton) {
    console.log(navButton);
    let sections = $('section').toArray();
    $.each(sections, function() {
        let sectionId = $(this).attr('id');
        if (navButton == sectionId ) {
            $(this).show("slide", 800);
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

//function for the mobile nav buttons
function showSection(navMobile) {
    console.log(navMobile);
    let sections = $('section').toArray();
    $.each(sections, function() {
        let sectionId = $(this).attr('id');
        if (navMobile == 'home-mobile' ) {
            $('.mobile-img').show("blind", 800);
        } else if (navMobile == sectionId ) {
            $(this).show("blind", 800);
        }
    }) 
}

$('.nav-btn-mobile').click(function() {
    $('.mobile-img').hide("fold", 500);
    let navMobile = $(this).attr('name');
    let sections = $('section').toArray();
    $.each(sections, function() {
        let sectionId = $(this).attr('id');
        if (navMobile != sectionId) {
            $(this).hide("clip", 600);
        }
    }) 
   
    setTimeout(function() {
        showSection(navMobile);
    }, 700);
})

// $(document).ready(function() {

//     // function for the nav buttons
//     function showSection(navButton) {
//         console.log(navButton);
//         let sections = $('section').toArray();
//         $.each(sections, function() {
//             let sectionId = $(this).attr('id');
//             if (navButton == sectionId ) {
//                 $(this).show("slide", 800);
//             }
//         }) 
//     }
    
//     $('.nav-btn').click(function() {
//         let navButton = $(this).attr('name');
//         let sections = $('section').toArray();
//         $.each(sections, function() {
//             let sectionId = $(this).attr('id');
//             if (navButton != sectionId) {
//                 $(this).hide("blind", 600);
//             }
//         }) 
       
//         setTimeout(function() {
//             showSection(navButton);
//         }, 700);
//     })

//     //function for the mobile nav buttons
//     function showSection(navMobile) {
//         console.log(navMobile);
//         let sections = $('section').toArray();
//         $.each(sections, function() {
//             let sectionId = $(this).attr('id');
//             if (navMobile == 'home-mobile' ) {
//                 $('.mobile-img').show("blind", 800);
//             } else if (navMobile == sectionId ) {
//                 $(this).show("blind", 800);
//             }
//         }) 
//     }
    
//     $('.nav-btn-mobile').click(function() {
//         $('.mobile-img').hide("fold", 500);
//         let navMobile = $(this).attr('name');
//         let sections = $('section').toArray();
//         $.each(sections, function() {
//             let sectionId = $(this).attr('id');
//             if (navMobile != sectionId) {
//                 $(this).hide("clip", 600);
//             }
//         }) 
       
//         setTimeout(function() {
//             showSection(navMobile);
//         }, 700);
//     })
// })

