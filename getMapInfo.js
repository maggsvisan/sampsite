function initMap(data){
    
    var options={
        zoom:20,
        center:{lat:25.650576,lng:-100.288675}
    }

    var markers=[
            {   coords:{lat:25.650576,lng:-100.288675},
                iconImage:'/images/man.png',
                content:'<h1> Operador1 </h1>'
            },

            {   coords:{lat:25.650576,lng:-100.288675},
                iconImage:'/images/truck.png',
                content:'<h1> Camión1 </h1> <ul>list1</ul>'
            },

            {   coords:{lat:25.650576,lng:-100.288675},
                iconImage:'/images/truck.png',
                content:'<h1> Camión1 </h1> <ul>list1</ul>'
            },

            {  coords:{lat:25.650576,lng:-100.288675},
                iconImage:'/images/truck.png',
                content:'<h1> Camión1 </h1> <ul>list1</ul>'
            },


            {  coords:{lat:25.650576,lng:-100.288675},
                iconImage:'/images/truck.png',
                content:'<h1> Camión1 </h1> <ul>list1</ul>',
            },

            {  coords:{lat:25.650576,lng:-100.288675},
                iconImage:'/images/truck.png',
                content:'<h1> Camión1 </h1> <ul>list1</ul>'
            },

            {  coords:{lat:25.650576,lng:-100.288675},
                iconImage:'/images/truck.png',
                content:'<h1> Camión1 </h1> <ul>list1</ul>'
            }

        ];

   // console.log(markers);

   var value1;
   var value2;
   var type;

   // console.log(data);
    for(var k in data) {
        value1 = data[k].LAT;
        value2 = data[k].LON;
        type = data[k].ID;

        //aqui quedaria poner un if que dependiendo el ID que tengas es la sticker que te toca:)

        if (type < 7){
            markers[k]=
            {   
                //coords:{ lat: parseFloat(data[k].LAT), lon:parseFloat(data[k].LON)},
                coords:{lat: parseFloat(value1),lng: parseFloat(value2)},
                iconImage:'/images/truck.png',
                content:'<h1> Camión </h1> <ul>list1</ul>'
                
            };
        }

        else {

            markers[k]=
        {   
            //coords:{ lat: parseFloat(data[k].LAT), lon:parseFloat(data[k].LON)},
            coords:{lat: parseFloat(value1),lng: parseFloat(value2)},
            iconImage:'/images/man.png',
            content:'<h1> Operador </h1> <ul>list1</ul>'
            
        };
        }
        
       console.log(markers[k]);
        //Array of markers
    }


    console.log(markers);

    //new map
    var map= new google.maps.Map(document.getElementById('map'),options);

    //Loop throught markers
    for (var i=0; i<markers.length; i++){
        addMarker(markers[i]);
    }


    //Add marker function
    function addMarker(props){
        var marker= new google.maps.Marker({
        position: props.coords,
        map:map,
        icon:props.iconImage
        });

        if (props.iconImage){
            marker.setIcon(props.iconImage);
        }

        if (props.content){
            var infoWindow = new google.maps.InfoWindow({content:props.content
            });

        marker.addListener('click',function(){
        infoWindow.open(map,marker);
        });
        }

    }
};


function getMapData(){
    var response;
    fetch('/gpsReadings')
        .then(function(res) {
            console.log(res);
            return res.json();
        }).then(function(data) {
            console.log(data);
            initMap(data);
        });
};


