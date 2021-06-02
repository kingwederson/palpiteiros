anychart.onDocumentReady(function () {

    // create a data set
    var data = anychart.data.set([
      ["1ª", 67.34, 54.81, 56.35, 50.03, 0, 52.79, 36.65, 48.85, 44.45, 39.55, 60.25],
      ["2ª", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);

    // map the data
    var serieWederson = data.mapAs({x: 0, value: 1});
    var seriePepe = data.mapAs({x: 0, value: 2});
    var serieSilas = data.mapAs({x: 0, value: 3});
    var serieWallace = data.mapAs({x: 0, value: 4});
    var serieMateus = data.mapAs({x: 0, value: 5});
    var serieBruno = data.mapAs({x: 0, value: 6});
    var serieRomario = data.mapAs({x: 0, value: 7});
    var serieJVB = data.mapAs({x: 0, value: 8});
    var serieTiago = data.mapAs({x: 0, value: 9});
    var serieEdu = data.mapAs({x: 0, value: 10});
    var serieRodrigo = data.mapAs({x: 0, value: 11});

    // create a chart
    var chart = anychart.line();

    // set the interactivity mode
    chart.interactivity().hoverMode("single");
    chart.background().fill("#bdb76b");

    // create the all the series, set the data and name

    //WEDERSON
    var serieWederson = chart.line(serieWederson);
    serieWederson.name("Maccabi Gan");
    // configure the visual settings of the first series
    serieWederson.normal().stroke("darkblue", 2);
    serieWederson.hovered().stroke("darkblue", 2);
    serieWederson.selected().stroke("darkblue", 4);

    //PEDRO  
    var seriePepe = chart.line(seriePepe);
    seriePepe.name("Pepe da Gama");
    // configure the visual settings of the second series
    seriePepe.normal().stroke("white", 2);
    seriePepe.hovered().stroke("white", 2);
    seriePepe.selected().stroke("White", 4);

    //SILAS  
    var serieSilas = chart.line(serieSilas);
    serieSilas.name("Silão FC");
    // configure the visual settings of the second series
    serieSilas.normal().stroke("gold", 2);
    serieSilas.hovered().stroke("gold", 2);
    serieSilas.selected().stroke("gold", 4);

    //Wallace
    var serieWallace = chart.line(serieWallace);
    serieWallace.name("System Of Ball");
    // configure the visual settings of the second series
    serieWallace.normal().stroke("yellow", 2);
    serieWallace.hovered().stroke("yellow", 2);
    serieWallace.selected().stroke("yellow", 4);
    
    //Mateus
    var serieMateus = chart.line(serieMateus);
    serieMateus.name("FC Inter da Gama");
    // configure the visual settings of the second series
    serieMateus.normal().stroke("red", 2);
    serieMateus.hovered().stroke("red", 2);
    serieMateus.selected().stroke("red", 4);
        
    //BNLopes
    var serieBruno = chart.line(serieBruno);
    serieBruno.name("Fora Ceni fdp");
    // configure the visual settings of the second series
    serieBruno.normal().stroke("darkred", 2);
    serieBruno.hovered().stroke("darkred", 2);
    serieBruno.selected().stroke("darkred", 4);
         
    //Romario
    var serieRomario = chart.line(serieRomario);
    serieRomario.name("Los Hermanos");
    // configure the visual settings of the second series
    serieRomario.normal().stroke("skyblue", 2);
    serieRomario.hovered().stroke("skyblue", 2);
    serieRomario.selected().stroke("skyblue", 4);
             
    //JVB
    var serieJVB = chart.line(serieJVB);
    serieJVB.name("Brasilia Packers");
    // configure the visual settings of the second series
    serieJVB.normal().stroke("green", 2);
    serieJVB.hovered().stroke("green", 2);
    serieJVB.selected().stroke("green", 4);
             
    //Tiago Silva
    var serieTiago = chart.line(serieTiago);
    serieTiago.name("Fora Ceni fdp");
    // configure the visual settings of the second series
    serieTiago.normal().stroke("purple", 2);
    serieTiago.hovered().stroke("purple", 2);
    serieTiago.selected().stroke("purple", 4);
                 
    //Edu
    var serieEdu = chart.line(serieEdu);
    serieEdu.name("Edu FC");
    // configure the visual settings of the second series
    serieEdu.normal().stroke("orangered", 2);
    serieEdu.hovered().stroke("orangered", 2);
    serieEdu.selected().stroke("orangered", 4);
                   
    //Rodrigo
    var serieRodrigo = chart.line(serieRodrigo);
    serieRodrigo.name("Palmitokm");
    // configure the visual settings of the second series
    serieRodrigo.normal().stroke("white", 2);
    serieRodrigo.hovered().stroke("white", 2);
    serieRodrigo.selected().stroke("white", 4);
    
    // set the chart title
    chart.title("Pontuação por rodada");

    // set the titles of the axes
    chart.xAxis().title("Rodada");
    chart.yAxis().title("Pontuação");

    // set the container id
    chart.container("graficorodadas");

    // initiate drawing the chart
    chart.draw();
});