/*
1. User can search for reviews.
		a. DONE with code to search and return tag matches - currently using console.log to test, will modify later
2. User can view a list of reviews.
		a. DONE with code for populating page with results
      i. need to implement system to check if a result is a dupe (multiple tags)
		b. Need to add ratings to restaurants and write code for converted ratings to stars(displayed)
3. User can add a review.
		a. Need to write code for creating and adding reviews
*/

var queryRest = '';
var queryImage = '';
var queryDesc = '';
var search = document.getElementById('submit-button');
var searchInput = document.getElementById('search-input');

search.addEventListener('click', searchRes);

// converts search input into array by calling intoArray(), then cycles through each restaurant's tags against the search array to return matches
function searchRes() {
	return matchTags(restaurant, intoArray(searchInput.value.toLowerCase()));
}

// converts search input to array
function intoArray(string) {
	return string.toString().toLowerCase().split(' ');
}

// testing with checkDupe, trying to implement dupe checking condition
var checkDupe = [];
function denyDupe(obj, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] = obj.name) {
      return true;
    }
  }
}

// cycles through all .tags against given array and logs any matches
function matchTags(obj, array) {
  for (var prop in obj) {
    for (var i = 0; i < obj[prop].tags.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (obj[prop].tags[i] === array[j]) {
          queryRest = obj[prop].name;
          queryImage = obj[prop].images[0];
          queryDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
          queryPop(queryRest, queryImage, queryDesc);
          checkDupe.push(obj[prop].name);
        }
      }
    }
  }
}

// queryPop will create and append media boxes per query result
function queryPop(qName, qImage, qDesc) {
  var landing = document.getElementById('landing');
  landing.setAttribute('class', 'hidden');

	var newMediaBox = document.createElement('div');
	var toQueryList = document.getElementById('query-list');
	newMediaBox.setAttribute('class', 'media');
	newMediaBox.setAttribute('id', 'rest-box');
	toQueryList.appendChild(newMediaBox);

	var newImageBox = document.createElement('div');
	var toRestBox = document.getElementById('rest-box');
	newImageBox.setAttribute('class', 'media-left');
	newImageBox.setAttribute('id', 'rest-thumb');
	toRestBox.appendChild(newImageBox);

	var newImageLink = document.createElement('a');
	var toImageBox = document.getElementById('rest-thumb');
	newImageLink.setAttribute('id', 'image-link');
	newImageLink.setAttribute('href', '#');
	toImageBox.appendChild(newImageLink);

	var newImage = document.createElement('img');
	var toImageLink = document.getElementById('image-link');
	newImage.setAttribute('class', 'media-object');
	newImage.setAttribute('src', qImage + '.jpg');
	newImage.setAttribute('alt', 'image');
	toImageLink.appendChild(newImage);

	var newMediaBody = document.createElement('div');
	newMediaBody.setAttribute('class', 'media-body');
	newMediaBody.setAttribute('id', 'rest-body');
	toRestBox.appendChild(newMediaBody);

	var newHeading = document.createElement('h4');
	var restName = document.createTextNode(qName);
	var toRestBody = document.getElementById('rest-body');
	newHeading.setAttribute('class', 'media-header');
	newHeading.setAttribute('id', 'rest-name');
	newHeading.appendChild(restName);
	toRestBody.appendChild(newHeading);

	var newRestDesc = document.createElement('p');
	var restDesc = document.createTextNode(qDesc);
	newRestDesc.setAttribute('class', 'description');
	newRestDesc.setAttribute('id', 'rest-desc');
	newRestDesc.appendChild(restDesc);
	toRestBody.appendChild(newRestDesc);

	// removing IDs for next loop
	document.getElementById('rest-desc').removeAttribute('id');
	document.getElementById('rest-name').removeAttribute('id');
	document.getElementById('rest-body').removeAttribute('id');
	document.getElementById('image-link').removeAttribute('id');
	document.getElementById('rest-thumb').removeAttribute('id');
	document.getElementById('rest-box').removeAttribute('id');
}

var restaurant = {
  /* add restaurant Mogi Tacos */
  mogitacos: {
		findStreet: function() {
			console.log(address[0]);
		},
    name: 'Mogi Tacos',
    number: '714-824-2817',
    address: ['1726 Some Street','Irvine','CA','92780'],
    hours: {
      monday: [],
      tuesday: ['00101600'],
      wednesday: ['00101600'],
      thursday: ['00101600'],
      friday: ['00101600'],
      saturday: ['00101600'],
      sunday: ['00101600']
    },
    tags: ['lunch','burritos','burrito','tacos','taco'],
    images: ['images/mogitacos/img001','images/mogitacos/img002','images/mogitacos/img003'],
    reviews: {
      id0001: {
        username: 'Fat Joe',
        date: '021016',
				rating: 10,
        review: 'They have the best tacos in the OC! Try the short rib tacos or the spicy pork wet burrito. You might have to take a nap after but it\'s worth it!'
      },
      id0002: {
        username: 'Sandra T',
        date: '011316',
				rating: 6,
        review: 'I\'ve been wanting to try this place for a long time. The boyfriend finally took me and... It was okay - overhyped for sure. The flavors were good but the meat was a little dry. I\'d be willing to give it another try.'
      },
      id0003: {
        username: 'Wendy Eats',
        date: '010216',
				rating: 8,
        review: 'Fantastic food. Place was packed when we walked in but the wait wasn\'t bad. Tom, who took our order, was really helpful! He explained the menu and gave us his recommendations. I got the spicy pork burrito and I couldn\'t even finish it! I\'m going to have to make a few trips to try all of the other stuff!'
      }
    }
  },
  /* add restaurant Mama's Taqueria */
  santana: {
    name: 'Santana',
    number: '714-623-2674',
    address: ['100 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['00111500'],
      tuesday: ['00111500'],
      wednesday: ['00111500'],
      thursday: ['00111500'],
      friday: ['00111500'],
      saturday: ['00111500'],
      sunday: []
    },
    tags: ['lunch','burritos','burrito','tacos','taco'],
    images: ['images/santana/img001','images/santana/img002','images/santana/img003'],
    reviews: {
      id0001: {
        username: 'ocEats',
        date: '022316',
				rating: 8,
        review: 'They have the best burritos in the OC! Try the lengua tacos or the carnitas wet burrito. You might have to take a nap after but it\'s worth it!'
      },
      id0002: {
        username: 'I hate vegetarians',
        date: '020116',
				rating: 6,
        review: 'I\'ve been wanting to try this place for a long time. The boyfriend finally took me and... It was okay - overhyped for sure. The flavors were good but the meat was a little dry. I\'d be willing to give it another try.'
      },
      id0003: {
        username: 'sweetguy2201',
        date: '010216',
				rating: 8,
        review: 'Fantastic food. Place was packed when we walked in but the wait wasn\'t bad. Tom, who took our order, was really helpful! He explained the menu and gave us his recommendations. I got the carne asada burrito and I couldn\'t even finish it! I\'m going to have to make a few trips to try all of the other stuff!'
      }
    }
  },
  /* add restaurant Kate's Korner */
  jupitercafe: {
    name: 'Jupiter Cafe',
    number: '714-112-2482',
    address: ['23 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['00061400'],
      tuesday: ['00061400'],
      wednesday: ['00061400'],
      thursday: ['00061400'],
      friday: ['00061400'],
      saturday: [],
      sunday: []
    },
    tags: ['lunch','burritos','burrito'],
    images: ['images/jupitercafe/img001','images/jupitercafe/img002','images/jupitercafe/img003'],
    reviews: {
      id0001: {
        username: 'Salty Chicken',
        date: '021316',
				rating: 8,
        review: 'Yo, the breakfast burritos here are the size of your head! I\'d trade my first-born for a burrito and a cherry coke any day. ANY.'
      },
      id0002: {
        username: 'Andy Min',
        date: '020216',
				rating: 8,
        review: 'The reviewer below me is an idiot. How are you gonna go and eat a tray of hash browns on a low carb diet. Seriously though, get the breakfast burrito. It can be your breakfast, lunch and dinner.'
      },
      id0003: {
        username: 'Paleo Princess',
        date: '012716',
				rating: 6,
        review: 'If you order the burrito without the tortilla, they\'ll put everything in a big to-go box for you breakfast platter style. Good if you\'re low carbing.'
      }
    }
  },
  /* add restaurant Pete's Burger Bar */
  burgerbar: {
    name: 'Burger Bar',
    number: '714-712-2235',
    address: ['2223 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['00101400'],
      tuesday: ['00101400'],
      wednesday: ['00101400'],
      thursday: ['00101400','17002300'],
      friday: ['00101400','17002300'],
      saturday: ['00102300'],
      sunday: ['00102300']
    },
    tags: ['lunch','dinner','burgers','burger'],
    images: ['images/burgerbar/img001','images/burgerbar/img002','images/burgerbar/img003'],
    reviews: {
      id0001: {
        username: 'Get Money Eat Bacon',
        date: '022616',
				rating: 10,
        review: 'Pastrami burger, add fried egg, add avocado. You\'re welcome.'
      },
      id0002: {
        username: 'Matt B',
        date: '021616',
				rating: 10,
        review: 'The pastrami burger is ridiculous. If that\'s too much, get a classic burger. It comes with avocado, bacon and cheese. Seriously, if this isn\'t the best burger you\'ve ever had, go back to Average Burgers.'
      },
      id0003: {
        username: 'Janet M',
        date: '012716',
				rating: 8,
        review: 'Forget the burgers, get the greek fries. Double fried and topped with a HEFTY amount of gyro, some kinda cheese, onions and tomatoes. Best fries ever.'
      }
    }
  },
  /* add restaurant Average Burgers */
  averageburgers: {
    name: 'Average Burgers',
    number: '714-732-0033',
    address: ['1736 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['00101600'],
      tuesday: ['00101600'],
      wednesday: ['00101600'],
      thursday: ['00101600'],
      friday: ['00101600'],
      saturday: ['00101600'],
      sunday: []
    },
    tags: ['lunch','burgers','burger'],
    images: ['images/averageburgers/img001','images/averageburgers/img002','images/averageburgers/img003'],
    reviews: {
      id0001: {
        username: 'Rose',
        date: '021816',
				rating: 2,
        review: 'They really live up to their name. Go to Pete\'s down the street. They make much better burgers.'
      },
      id0002: {
        username: 'Joe Crusher',
        date: '012716',
				rating: 6,
        review: 'Cheap and fast. Not the best but sometimes... you just want an average burger.'
      },
      id0003: {
        username: 'Princess',
        date: '011216',
				rating: 10,
        review: 'So my boyfriend of ten years took me here for our anniversary. I was skeptical at first, but after walking in and being greeted by the acne-faced boy at the counter, all of my worries were laid to rest. My boyfriend got the special "Average Burger" and I just got a cheeseburger. I wanted the "Average Burger" too but my boyfriend said it\'d be better if we got different things so we would have more variety. The food was okay but the service was top-notch. They gave us table markers and brought the food to our table as soon as it was prepared. I think we\'ll come back again for special occasions.'
      }
    }
  },
  /* add restaurant County */
  county: {
    name: 'County',
    number: '714-723-1123',
    address: ['736 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['17002300'],
      tuesday: ['17002300'],
      wednesday: ['17002300'],
      thursday: ['17002300'],
      friday: ['10001400','17002300'],
      saturday: ['10001400','17002300'],
      sunday: ['10001400','17002300']
    },
    tags: ['lunch','dinner'],
    images: ['images/county/img001','images/county/img002','images/county/img003'],
    reviews: {
      id0001: {
        username: 'codeMonkey',
        date: '021816',
				rating: 10,
        review: 'Fantastic food. Get the chicken and waffles. You won\'t regret it! Crunchy on the outside and fluffy in the middle. Chicken is well seasoned and moist. Guy below me is on crack.'
      },
      id0002: {
        username: 'i luv buffets',
        date: '021416',
				rating: 4,
        review: 'I guess this is the new thing. Charge an arm and a leg for a plate with a tiny piece of meat, some sauce puddles and a few sprigs of crap I think they found in some guy\'s backyard. Sorry but I\'m sticking to Hometown Buffet.'
      },
      id0003: {
        username: 'I thought this was Tinder',
        date: '021216',
				rating: 8,
        review: 'They just opened but I think they\'re here to stay. Had dinner with the family. Service was good, entrees came out on time, and most importantly, food was fantastic.'
      }
    }
  },
  /* add restaurant Stone and Marble */
  stoneandmarble: {
    name: 'Stone and Marble',
    number: '714-591-1134',
    address: ['93 Some Street','Irvine','CA','92780'],
    hours: {
      monday: [],
      tuesday: ['17002400'],
      wednesday: ['17002400'],
      thursday: ['17002400'],
      friday: ['17002400'],
      saturday: ['17002400'],
      sunday: ['17002400']
    },
    tags: ['dinner','steaks','steak'],
    images: ['images/stoneandmarble/img001','images/stoneandmarble/img002','images/stoneandmarble/img003'],
    reviews: {
      id0001: {
        username: 'Adam23',
        date: '021116',
				rating: 10,
        review: 'Fine dining at it\'s best. Elegant yet inviting - never pretentious. Impeccable service and incomparable food. We opted for the wagyu steak (real/imported, $160, 8oz). Tasted like butter, a reflection of how perfectly marbled it was. Make sure you save room for dessert. You won\'t regret it.'
      },
      id0002: {
        username: 'Joyce Y',
        date: '012816',
				rating: 8,
        review: 'The decor is nice and homey, slightly pretentious, but not enough to feel intimidated. They bring out all their cuts on a platter to show you difference in marbling. They even let us take a picture with the platter! John got the Japanese wagyu and I got the lamb chops. Instant regret.'
      },
      id0003: {
        username: 'LadysMan7263',
        date: '122715',
				rating: 10,
        review: 'THE place to bring a date. They will be impressed with how expensive your steak is.'
      }
    }
  }
};
