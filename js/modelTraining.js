	// add inputs with concept new york
	 app.inputs.create([{
	  "url": "http://quelles-dates.fr/wp-content/uploads/2015/10/soldes-new-york.jpg",
	  "concepts": [
	    { "id": "newyork", "value": true },
	    { "id": "paris", "value": false }
	  ]
	}, {
	  "url": "https://media.timeout.com/images/103444978/image.jpg",
	  "concepts": [
	    { "id": "newyork", "value": true },
	    { "id": "paris", "value": false }
	  ]
	}, {
	  "url": "https://www.choicehotels.com/cms/images/choice-hotels/demand-articles/know-before-you-go-new-york-city-manhattan/know-before-you-go-new-york-city-manhattan.jpg",
	  "concepts": [
	    { "id": "newyork", "value": true },
	    { "id": "paris", "value": false }
	  ]
	}, {
	  "url": "http://www.ahstatic.com/photos/2185_hodesti_00_p_1024x768.jpg",
	  "concepts": [
	    { "id": "newyork", "value": true },
	    { "id": "paris", "value": false }
	  ]
	}, {
	  "url": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Lower_Manhattan_from_Jersey_City_November_2014_panorama_3.jpg",
	  "concepts": [
	    { "id": "newyork", "value": true },
	    { "id": "paris", "value": false }
	  ]
	}, {
	  "url": "https://media.timeout.com/images/103678916/image.jpg",
	  "concepts": [
	    { "id": "newyork", "value": true },
	    { "id": "paris", "value": false }
	  ]
	}, {
	  "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flatiron_Building_3618433845_5745ebc1b9.jpg/199px-Flatiron_Building_3618433845_5745ebc1b9.jpg",
	  "concepts": [
	    { "id": "newyork", "value": true },
	    { "id": "paris", "value": false }
	  ]
	}, {
	  "url": "https://untappedcities-wpengine.netdna-ssl.com/wp-content/uploads/2015/03/Secrets-of-Flatiron-Building-Fuller-Building-NYC.jpg",
	  "concepts": [
	    { "id": "newyork", "value": true },
	    { "id": "paris", "value": false }
	  ]
	}, {
	  "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/NYC_-_Flatiron_building_-_Top_detail.jpg/270px-NYC_-_Flatiron_building_-_Top_detail.jpg",
	  "concepts": [
	    { "id": "newyork", "value": true },
	    { "id": "paris", "value": false }
	  ]
	}, {
	  "url": "http://www.destination360.com/north-america/us/new-york/nyc/images/s/flatiron-building.jpg",
	  "concepts": [
	    { "id": "newyork", "value": true },
	    { "id": "paris", "value": false }
	  ]
	}, {
	  "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Brooklyn_Bridge_Postdlf.jpg/310px-Brooklyn_Bridge_Postdlf.jpg",
	  "concepts": [
	    { "id": "newyork", "value": true },
	    { "id": "paris", "value": false }
	  ]
	}, {
	  "url": "http://cdn.history.com/sites/2/2015/06/HITH-10-things-you-may-not-know-about-the-brooklyn-bridge-E.jpeg",
	  "concepts": [
	    { "id": "newyork", "value": true },
	    { "id": "paris", "value": false }
	  ]
	}, {
	  "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Spiderweb_BB_jeh.jpg/168px-Spiderweb_BB_jeh.jpg",
	  "concepts": [
	    { "id": "newyork", "value": true },
	    { "id": "paris", "value": false }
	  ]
	}]).then(
	  createModelNY,
	  errorHandler
	);

	// once inputs are created, create model by giving name and list of concepts
	function createModelNY(inputs) {
	  app.models.create('newyork', ["newyork"]).then(
	    trainModel,
	    errorHandler
	  );
	}

	app.inputs.create([{
	  "url": "https://upload.wikimedia.org/wikipedia/en/4/42/Louvre_Pyramid.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/800px-Louvre_Museum_Wikimedia_Commons.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "http://parisbym.com/wp-content/uploads/2013/08/Pyramide-Louvre-Paris.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "http://www.applelanguages.be/be/images/rotating-top/paris-louvre5.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "https://upload.wikimedia.org/wikipedia/en/0/08/Rear-of-sacre-coeur-montmartre.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Basilique_Sacre_Coeur_-_Vue_de_la_Tour_Eiffel.jpg/271px-Basilique_Sacre_Coeur_-_Vue_de_la_Tour_Eiffel.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "http://assets.fodors.com/destinations/7002/basilica-of-sacrecoeur-montmartre-paris-france_main.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "http://img.timeinc.net/time/photoessays/2009/travel_guide_paris/paris_arc.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "http://resize.op6m.fr/remote/reservation.parisinfo.com%2FInfoliveImages%2Fculture_et_loisirs%2Fmonuments%2Farc_de_triomphe%2Farc_600_390.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "http://www.bvjhostelparis.com/wp-content/uploads/2016/09/arc-de-triomphe.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "http://www.lifefoc.com/photos/server3/arc_de_triomphe_paris.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "http://www.unjourdeplusaparis.com/files/2014/01/arc-de-triomphe-paris.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "http://www.ousebalader.com/photos/tour%20eiffel_1.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "http://www.parisinfo.com/var/otcp/sites/images/media/1.-photos/02.-sites-culturels-630-x-405/tour-eiffel-trocadero-630x405-c-thinkstock/37221-1-fre-FR/Tour-Eiffel-Trocadero-630x405-C-Thinkstock.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "http://resize.op6m.fr/remote/reservation.parisinfo.com%2FInfoliveImages%2Fcityvision%2Ftour_eiffel%2Foffice_du_tourisme_de_paris_tour_eiffel_2.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "http://www.restaurants-toureiffel.com/upload/photos/6642/t15.jpeg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}, {
	  "url": "http://www.frenchmomentsblog.com/wp-content/uploads/2011/03/Tour-Eiffel-French-Moments-02.jpg",
	  "concepts": [
	    { "id": "newyork", "value": false },
	    { "id": "paris", "value": true }
	  ]
	}]).then(
	  createModelParis,
	  errorHandler
	);

	function createModelParis(inputs) {
	  app.models.create('paris', ["paris"]).then(
	    trainModel,
	    errorHandler
	  );
	}

	// after model is created, you can now train the model
	function trainModel(model) {
	  model.train().then(
	    predictModel,
	    errorHandler
	  );
	}

	// after training the model, you can now use it to predict on other inputs
	function predictModel(model) {
	  model.predict(['https://only-apartments.storage.googleapis.com/web/imgs/city/New-York_Small.jpg', 'http://www.easyjet.com/en/holidays/shared/images/guides/france/paris.jpg']).then(
	    function(response) {
	      console.log(response);
	      document.getElementById('test').innerHTML = response;
	    }, errorHandler
	  );
	}

	function errorHandler(err) {
	  console.error(err);
	}