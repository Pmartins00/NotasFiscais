
	x = new Array();
	
	$(function () {
		
		$.ajax({
			url: "mvc?logica=Charts",
			async: false,
			data: 'chart='+1,
			type: 'POST',
			success: function(data){
				x = data;
			}
		});
		
		window.setTimeout(function() {}, 100);
			
        $('#graph1').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Tipos de ocorrencias mais Frequentes'
            },
            subtitle: {
                text: 'Cadastro de Ocorrencias'
            },
            xAxis: {
                categories: x.r0,
                title: {
                    text: ""
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Ocorrencias (quantidade)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' ocorrencias'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            
            credits: {
                enabled: false
            },
            series: [{
                name: 'Geral',
                data: x.r1
            },{
                name: 'Weg cestari Redutores e Motorredutores S/A',
                data: x.r2
            }, {
                name: 'Automotiva Cestari S/A',
                data: x.r3
            }]
        });
    });
	
	$(function () {
		
		$.ajax({
			url: "mvc?logica=Charts",
			async: false,
			data: 'chart='+2,
			type: 'POST',
			success: function(data){
				x = data;
			}
		});
		
		//alert(x.r0);
		//alert(x.r1);
		//alert(x.r2);
		
        $('#graph2').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'S.L.A'
            },
            subtitle: {
                text: 'Cadastro de Ocorrencias'
            },
            xAxis: {
                categories: x.r0
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Porcentagem (%)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Weg cestari Redutores e Motorredutores S/A',
                data: x.r1
    
            }, {
                name: 'Automotiva Cestari S/A',
                data: x.r2
    
            }]
        });
    });

	$(function () {
		
		$.ajax({
			url: "mvc?logica=Charts",
			async: false,
			data: 'chart='+3,
			type: 'POST',
			success: function(data){
				x = data;
			}
		});
		
		x1 = new Array();
		x2 = new Array();
		x3 = new Array();
		
		
		for (var i=0;i<x.r0.length;i++)
		{ 
			var str = x.r0[i];
			var res = str.split("/");
			
			var dia = res[0];
			var mes = res[1];
			var ano = res[2];
		
			x1[i] = [Date.UTC(ano, mes - 1, dia), parseFloat(x.r1[i])];
		}
		
		for (var i=0;i<x.r2.length;i++)
		{ 
			var str = x.r2[i];
			var res = str.split("/");
			
			var dia1 = parseInt(res[0]);
			var mes1 = parseInt(res[1]);
			var ano1 = parseInt(res[2]);
			
			x2[i] = [Date.UTC(ano1, mes1 - 1, dia1), parseFloat(x.r3[i])];
		}
		
		for (var i=0;i<x.r4.length;i++)
		{ 
			var str = x.r4[i];
			var res = str.split("/");
			
			var dia = parseInt(res[0]);
			var mes = parseInt(res[1]);
			var ano = parseInt(res[2]);
			
			x3[i] = [Date.UTC(ano, mes - 1, dia), parseFloat(x.r5[i])];
		}

        $('#graph3').highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Ultimas Ocorrencias'
            },
            subtitle: {
                text: 'Cadastro de Ocorrencias'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: { // don't display the dummy year
                    month: '%e. %B %Y',
                    year: '%b'
                }
            },
            yAxis: {
                title: {
                    text: 'Horas Contabilizadas (Hs)'
                },
                min: 0
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        Highcharts.dateFormat('%e. %B de %Y', this.x) +': '+ this.y +' Hs';
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Geral',
                data: x1
            },{
                name: 'Weg cestari Redutores e Motorredutores S/A',
                // Define the data points. All series have a dummy year
                // of 1970/71 in order to be compared on the same x axis. Note
                // that in JavaScript, months start at 0 for January, 1 for February etc.
                data: x2
            }, {
                name: 'Automotiva Cestari S/A',
                data: x3
            }]
        });
    });


