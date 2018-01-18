$(document).ready(function() {



    var $carrousel = $('#galerie'),

        $img = $('#galerie img'),

        indexImg = $img.length - 1,

        i = 0,

        $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)


    $img.css('display', 'none'); // on cache les images

    $currentImg.css('display', 'block'); // on affiche seulement l'image courante


    $carrousel.append('<div class="controls"> <img src="images/play.png" class="prev"/> <img src="images/play.png" class="next"/> </div>');


    $('.next').click(function() {
        console.log(i);
        console.log('indexImg:' + indexImg);

        i++;


        if (i > indexImg) { i = 0 }


        $img.css('display', 'none');

        $currentImg = $img.eq(i); // on définit la nouvelle image

        $currentImg.css('display', 'block'); // puis on l'affiche





    });


    $('.prev').click(function() {

        console.log(i);
        console.log('indexImg:' + indexImg);

        i--;

        if (i < 0) { i = indexImg }


        $img.css('display', 'none');

        $currentImg = $img.eq(i);

        $currentImg.css('display', 'block');


    });

    $('.li1').click(function() {


         console.log(i);
        console.log('indexImg:' + indexImg);

        i++;


        if (i > indexImg) { i = 0 }


        $img.css('display', 'none');

        $currentImg = $img.eq(i); // on définit la nouvelle image

        $currentImg.css('display', 'block'); // puis on l'affiche



    });
    $('.li2').click(function() {


        console.log(i);
        console.log('indexImg:' + indexImg);

        i++;


        if (i > indexImg) { i = 0 }


        $img.css('display', 'none');

        $currentImg = $img.eq(i); // on définit la nouvelle image

        $currentImg.css('display', 'block'); // puis on l'affiche



    });

    $('.li3').click(function() {


        console.log(i);
        console.log('indexImg:' + indexImg);

        i++;


        if (i > indexImg) { i = 0 }


        $img.css('display', 'none');

        $currentImg = $img.eq(i); // on définit la nouvelle image

        $currentImg.css('display', 'block'); // puis on l'affiche




    });
    $('.li4').click(function() {


       console.log(i);
        console.log('indexImg:' + indexImg);

        i++;


        if (i > indexImg) { i = 0 }


        $img.css('display', 'none');

        $currentImg = $img.eq(i); // on définit la nouvelle image

        $currentImg.css('display', 'block'); // puis on l'affiche




    });

    function slideImg() {

        setTimeout(function() {

            $("#galerie ul").animate({ marginLeft: -350 }, 800, function() {
                $(this).css({ marginLeft: 0 }).find("li:last").after($(this).find("li:first"));
            })
        }, 3500);

        
    }

});
