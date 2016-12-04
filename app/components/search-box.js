import Ember from 'ember';
import GIS from 'npm:google-images';

//let GoogleClient = new GIS('counterpart-151201', 'AIzaSyCBu6SoO7plI5h1hjNSZR2--IULeA2WaCE'); 
let GoogleClient = new GIS('014619222381259111903:bk6r6vpbt24', 'AIzaSyAR-HsyOBy2IJxw4ACiPivV5Qnpve80SWM');

export default Ember.Component.extend({
    imageResults: [],
    actions:{
        search(query) {
            console.log("query is: " + query);
            //let googleImageSearchClient = require('GIS');
            //let client = new GIS('counterpart-151201', 'AIzaSyCBu6SoO7plI5h1hjNSZR2--IULeA2WaCE');
            GoogleClient.search(query).then((images) => {
                console.log(images);
                this.set('imageResults', images); 
            });
            //console.log(results);
            
            //GoogleClient.search(query).then(function (images) {
            //    return console.log(images);
                /*
                [{
                    "url": "http://steveangello.com/boss.jpg",
                    "type": "image/jpeg",
                    "width": 1024,
                    "height": 768,
                    "size": 102451,
                    "thumbnail": {
                        "url": "http://steveangello.com/thumbnail.jpg",
                        "width": 512,
                        "height": 512
                    }
                }]
                 */
            //});
            
        },
    }
});