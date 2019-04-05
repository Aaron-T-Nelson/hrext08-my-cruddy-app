/*
var chart = c3.generate({
   
    data: 

    	{    	
	    	labels: true,

	    	colors: {
	    		sleep: '#D81159',
				eat: '#8F2D56',
				code: '#218380',
				relax: '#FBB13C',
				other: '#726DA8'
	    	},
	        
	        columns: [
	  	           ['Dragon Well',1],
            ['Dong Ding Oolong', 6],
            ['4 Seasons of Spring', 6],
            ['Hojicha', 5],
            ['Oolong', 10],
            ['Kukicha', 7],
            ['Osmanthus', 1],
            ['Tie Guan Yin', 2],
            ['Boba', 4]
	        ],


	        type : 'pie',
		},

     	
     	pie: {
        	label: {
            	format: function (value, ratio, id) {
               		return d3.format('')(value) + ' hours';
            }
        },	




        onclick: function (d, i) { console.log("onclick", d, i); },

        onmouseover: function (d, i) { console.log("onmouseover", d, i); },

        onmouseout: function (d, i) { console.log("onmouseout", d, i);}
    	}
});

*/
var chart = c3.generate({
    data: {
        columns: [
            ['Dragon Well',1],
            ['Dong Ding Oolong', 6],
            ['4 Seasons of Spring', 6],
            ['Hojicha', 5],
            ['Oolong', 10],
            ['Kukicha', 7],
            ['Osmanthus', 1],
            ['Tie Guan Yin', 2],
            ['Boba', 4]

        ],
        type: 'bar',
        groups: [
            ['Dragon Well', 2.5],
            ['Dong Ding Oolong', 15],
            ['4 Seasons of Spring', 15],
            ['Hojicha', 12.5],
            ['Oolong', 25],
            ['Kukicha', 17.5],
            ['Osmanthus', 2.5],
            ['Tie Guan Yin', 5],
            ['Boba', 10]
        ]
    },
   /* grid: {
        y: {
            lines: [{value:0}]
        }
    }*/
});

setTimeout(function () {
    chart.columns([[
             ['Dragon Well',1],
            ['Dong Ding Oolong', 6],
            ['4 Seasons of Spring', 6],
            ['Hojicha', 5],
            ['Oolong', 10],
            ['Kukicha', 7],
            ['Osmanthus', 1],
            ['Tie Guan Yin', 2],
            ['Boba', 4]]])
}, 0);

// setTimeout(function () {
//     chart.load({
//         columns: [
//        ['Dragon Well',1],
//             ['Dong Ding Oolong', 6],
//             ['4 Seasons of Spring', 6],
//             ['Hojicha', 5],
//             ['Oolong', 10],
//             ['Kukicha', 7],
//             ['Osmanthus', 1],
//             ['Tie Guan Yin', 2],
//             ['Boba', 4]
//         ]
//     });
// }, 1000);


