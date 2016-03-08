// each restaurant is created as an object within the object restaurant
var restaurant = {
  // add restaurant Mogi Tacos
  mogitacos: {
		reference: 'mogitacos',
    name: 'Mogi Tacos',
    number: '714-824-2817',
    address: ['1726 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['Closed'],
      tuesday: ['10:00 am - 4:00 pm'],
      wednesday: ['10:00 am - 4:00 pm'],
      thursday: ['10:00 am - 4:00 pm'],
      friday: ['10:00 am - 4:00 pm'],
      saturday: ['10:00 am - 4:00 pm'],
      sunday: ['10:00 am - 4:00 pm']
    },
    good: 'mexican, burritos, tacos',
    tags: ['mogi','lunch','burritos','burrito','tacos','taco','food'],
    images: ['images/mogitacos/img001.jpg','images/mogitacos/img002.jpg','images/mogitacos/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
			{
      	username: 'Fat Joe',
        date: '2/10/2016',
				rating: 5,
        review: 'They have the best tacos in the OC! Try the short rib tacos or the spicy pork wet burrito. You might have to take a nap after but it\'s worth it!',
        useful: 3,
        funny: 3,
        cool: 3,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      },
      {
        username: 'Sandra T',
        date: '2/13/2016',
				rating: 3,
        review: 'I\'ve been wanting to try this place for a long time. The boyfriend finally took me and... It was okay - overhyped for sure. The flavors were good but the meat was a little dry. I\'d be willing to give it another try.',
        useful: 0,
        funny: 0,
        cool: 0,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      },
      {
        username: 'Wendy Eats',
        date: '3/2/2016',
				rating: 4,
        review: 'Fantastic food. Place was packed when we walked in but the wait wasn\'t bad. Tom, who took our order, was really helpful! He explained the menu and gave us his recommendations. I got the spicy pork burrito and I couldn\'t even finish it! I\'m going to have to make a few trips to try all of the other stuff!',
        useful: 0,
        funny: 1,
        cool: 1,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      }
    ]
  },
	// add restaurant Santana
  santana: {
		reference: 'santana',
    name: 'Santana',
    number: '714-623-2674',
    address: ['100 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['11:00 am - 3:00 pm'],
      tuesday: ['11:00 am - 3:00 pm'],
      wednesday: ['11:00 am - 3:00 pm'],
      thursday: ['11:00 am - 3:00 pm'],
      friday: ['11:00 am - 3:00 pm'],
      saturday: ['11:00 am - 3:00 pm'],
      sunday: ['Closed']
    },
    good: 'mexican, burritos, tacos',
    tags: ['santana','lunch','burritos','burrito','tacos','taco','food'],
    images: ['images/santana/img001.jpg','images/santana/img002.jpg','images/santana/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'ocEats',
        date: '1/23/2016',
				rating: 4,
        review: 'They have the best burritos in the OC! Try the lengua tacos or the carnitas wet burrito. You might have to take a nap after but it\'s worth it!',
        useful: 1,
        funny: 1,
        cool: 2,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      },
      {
        username: 'I hate vegetarians',
        date: '2/1/2016',
				rating: 3,
        review: 'I\'ve been wanting to try this place for a long time. The boyfriend finally took me and... It was okay - overhyped for sure. The flavors were good but the meat was a little dry. I\'d be willing to give it another try.',
        useful: 2,
        funny: 0,
        cool: 0,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      },
      {
        username: 'sweetguy2201',
        date: '2/2/2016',
				rating: 4,
        review: 'Fantastic food. Place was packed when we walked in but the wait wasn\'t bad. Tom, who took our order, was really helpful! He explained the menu and gave us his recommendations. I got the carne asada burrito and I couldn\'t even finish it! I\'m going to have to make a few trips to try all of the other stuff!',
        useful: 0,
        funny: 0,
        cool: 1,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      }
    ]
  },
  // add restaurant Jupiter Cafe
  jupitercafe: {
		reference: 'jupitercafe',
    name: 'Jupiter Cafe',
    number: '714-112-2482',
    address: ['23 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['6:00 am - 2:00 pm'],
      tuesday: ['6:00 am - 2:00 pm'],
      wednesday: ['6:00 am - 2:00 pm'],
      thursday: ['6:00 am - 2:00 pm'],
      friday: ['6:00 am - 2:00 pm'],
      saturday: ['Closed'],
      sunday: ['Closed']
    },
    good: 'american, brunch',
    tags: ['jupiter','cafe','lunch','burritos','burrito','food'],
    images: ['images/jupitercafe/img001.jpg','images/jupitercafe/img002.jpg','images/jupitercafe/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'Salty Chicken',
        date: '1/13/2016',
				rating: 4,
        review: 'Yo, the breakfast burritos here are the size of your head! I\'d trade my first-born for a burrito and a cherry coke any day. ANY.',
        useful: 0,
        funny: 1,
        cool: 0,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      },
      {
        username: 'Paleo Princess',
        date: '2/27/2016',
        rating: 3,
        review: 'If you order the burrito without the tortilla, they\'ll put everything in a big to-go box for you breakfast platter style. Good if you\'re low carbing.',
        useful: 2,
        funny: 0,
        cool: 0,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      },
      {
        username: 'Andy Min',
        date: '2/2/2016',
				rating: 4,
        review: 'The reviewer below me is an idiot. How are you gonna go and eat a tray of hash browns on a low carb diet. Seriously though, get the breakfast burrito. It can be your breakfast, lunch and dinner.',
        useful: 1,
        funny: 4,
        cool: 0,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      }
    ]
  },
	// add restaurant Burger Bar
  burgerbar: {
		reference: 'burgerbar',
    name: 'Burger Bar',
    number: '714-712-2235',
    address: ['2223 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['10:00 am - 2:00 pm'],
      tuesday: ['10:00 am - 2:00 pm'],
      wednesday: ['10:00 am - 2:00 pm'],
      thursday: ['10:00 am - 11:00 pm'],
      friday: ['10:00 am - 11:00 pm'],
      saturday: ['10:00 am - 2:00 pm'],
      sunday: ['10:00 am - 2:00 pm']
    },
    good: 'burgers',
    tags: ['burger','bar','lunch','dinner','burgers','food'],
    images: ['images/burgerbar/img001.jpg','images/burgerbar/img002.jpg','images/burgerbar/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'Get Money Eat Bacon',
        date: '1/26/2016',
				rating: 5,
        review: 'Pastrami burger, add fried egg, add avocado. You\'re welcome.',
        useful: 0,
        funny: 2,
        cool: 6,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      },
      {
        username: 'Matt B',
        date: '2/16/2016',
				rating: 5,
        review: 'The pastrami burger is ridiculous. If that\'s too much, get a classic burger. It comes with avocado, bacon and cheese. Seriously, if this isn\'t the best burger you\'ve ever had, go back to Average Burgers.',
        useful: 3,
        funny: 3,
        cool: 3,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      },
      {
        username: 'Janet M',
        date: '2/27/2016',
				rating: 4,
        review: 'Forget the burgers, get the greek fries. Double fried and topped with a HEFTY amount of gyro, some kinda cheese, onions and tomatoes. Best fries ever.',
        useful: 0,
        funny: 3,
        cool: 0,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      }
    ]
  },
	// add restaurant Average Burgers
  averageburgers: {
		reference: 'averageburgers',
    name: 'Average Burgers',
    number: '714-732-0033',
    address: ['1736 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['10:00 am - 4:00 pm'],
      tuesday: ['10:00 am - 4:00 pm'],
      wednesday: ['10:00 am - 4:00 pm'],
      thursday: ['10:00 am - 4:00 pm'],
      friday: ['10:00 am - 4:00 pm'],
      saturday: ['10:00 am - 4:00 pm'],
      sunday: ['Closed']
    },
    good: 'burgers',
    tags: ['average','burgers','lunch','burger','food'],
    images: ['images/averageburgers/img001.jpg','images/averageburgers/img002.jpg','images/averageburgers/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'Rose',
        date: '1/18/2016',
				rating: 1,
        review: 'They really live up to their name. Go to Pete\'s down the street. They make much better burgers.',
        useful: 5,
        funny: 0,
        cool: 0,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      },
      {
        username: 'Joe Crusher',
        date: '1/27/2016',
				rating: 2,
        review: 'Cheap and fast. Not the best but sometimes... you just want an average burger.',
        useful: 0,
        funny: 1,
        cool: 0,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      },
      {
        username: 'Princess',
        date: '2/12/2016',
				rating: 4,
        review: 'So my boyfriend of ten years took me here for our anniversary. I was skeptical at first, but after walking in and being greeted by the acne-faced boy at the counter, all of my worries were laid to rest. My boyfriend got the special "Average Burger" and I just got a cheeseburger. I wanted the "Average Burger" too but my boyfriend said it\'d be better if we got different things so we would have more variety. The food was okay but the service was top-notch. They gave us table markers and brought the food to our table as soon as it was prepared. I think we\'ll come back again for special occasions.',
        useful: 1,
        funny: 0,
        cool: 0,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      }
    ]
  },
	// add restaurant County
  county: {
		reference: 'county',
    name: 'County',
    number: '714-723-1123',
    address: ['736 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['5:00 pm - 11:00 pm'],
      tuesday: ['5:00 pm - 11:00 pm'],
      wednesday: ['5:00 pm - 11:00 pm'],
      thursday: ['5:00 pm - 11:00 pm'],
      friday: ['5:00 pm - 11:00 pm'],
      saturday: ['10:00 am - 11:00 pm'],
      sunday: ['10:00 am - 11:00 pm']
    },
    good: 'American, modern, trendy',
    tags: ['county','lunch','dinner','food'],
    images: ['images/county/img001.jpg','images/county/img002.jpg','images/county/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'i luv buffets',
        date: '1/14/2016',
				rating: 2,
        review: 'I guess this is the new thing. Charge an arm and a leg for a plate with a tiny piece of meat, some sauce puddles and a few sprigs of crap I think they found in some guy\'s backyard. Sorry but I\'m sticking to Hometown Buffet.',
        useful: 0,
        funny: 1,
        cool: 0,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      },
      {
        username: 'codeMonkey',
        date: '2/18/2016',
				rating: 5,
        review: 'Fantastic food. Get the chicken and waffles. You won\'t regret it! Crunchy on the outside and fluffy in the middle. Chicken is well seasoned and moist. Guy below me is on crack.',
        useful: 0,
        funny: 5,
        cool: 1,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      },
      {
        username: 'I thought this was Tinder',
        date: '2/23/2016',
				rating: 4,
        review: 'They just opened but I think they\'re here to stay. Had dinner with the family. Service was good, entrees came out on time, and most importantly, food was fantastic.',
        useful: 1,
        funny: 3,
        cool: 1,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      }
    ]
  },
	// add restaurant Stone and Marble
  stoneandmarble: {
		reference: 'stoneandmarble',
    name: 'Stone and Marble',
    number: '714-591-1134',
    address: ['93 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['Closed'],
      tuesday: ['5:00 pm - 12:00 am'],
      wednesday: ['5:00 pm - 12:00 am'],
      thursday: ['5:00 pm - 12:00 am'],
      friday: ['5:00 pm - 12:00 am'],
      saturday: ['5:00 pm - 12:00 am'],
      sunday: ['5:00 pm - 12:00 am']
    },
    good: 'American, steak, upscale',
    tags: ['stone','marble','dinner','steaks','steak','food'],
    images: ['images/stoneandmarble/img001.jpg','images/stoneandmarble/img002.jpg','images/stoneandmarble/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'Adam L',
        date: '1/11/2016',
				rating: 5,
        review: 'Fine dining at it\'s best. Elegant yet inviting - never pretentious. Impeccable service and incomparable food. We opted for the wagyu steak (real/imported, $160, 8oz). Tasted like butter, a reflection of how perfectly marbled it was. Make sure you save room for dessert. You won\'t regret it.',
        useful: 2,
        funny: 1,
        cool: 1,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      },
      {
        username: 'Joyce Y',
        date: '1/28/2016',
				rating: 4,
        review: 'The decor is nice and homey, slightly pretentious, but not enough to feel intimidated. They bring out all their cuts on a platter to show you difference in marbling. They even let us take a picture with the platter! John got the Japanese wagyu and I got the lamb chops. Instant regret.',
        useful: 4,
        funny: 3,
        cool: 2,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      },
      {
        username: 'LadysMan7263',
        date: '2/27/2016',
				rating: 5,
        review: 'THE place to bring a date. They will be impressed with how expensive your steak is.',
        useful: 0,
        funny: 3,
        cool: 0,
        plusUseful: 0,
        plusFunny: 0,
        plusCool: 0
      }
    ]
  }
};

// variables for sorting search results
var saveQuery = [];
var sorted = [];
var removed = [];

// create search header
function searchHeader(search) {
  var landing = document.getElementById('landing');
  landing.setAttribute('class', 'hidden');

  // panel
  var newElem = document.createElement('div');
  var parent = document.getElementById('query-list');
  newElem.setAttribute('class', 'panel');
  newElem.className += ' panel-default text-center';
  newElem.setAttribute('id', 'search-panel');
  parent.appendChild(newElem);

  // panel heading
  newElem = document.createElement('div');
  parent = document.getElementById('search-panel');
  newElem.setAttribute('class', 'panel-heading');
  newElem.setAttribute('id', 'search-heading');
  parent.appendChild(newElem);

  newElem = document.createElement('i');
  parent = document.getElementById('search-heading');
  var newText = document.createTextNode('showing results for: ' + search);
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  // panel body
  newElem = document.createElement('div');
  parent = document.getElementById('search-panel');
  newElem.setAttribute('class', 'panel-body');
  newElem.setAttribute('id', 'search-body');
  parent.appendChild(newElem);

  newElem = document.createElement('span');
  parent = document.getElementById('search-body');
  newElem.setAttribute('id', 'sort');
  parent.appendChild(newElem);

  // sort alpha asc
  newElem = document.createElement('button');
  parent = document.getElementById('sort');
  newElem.setAttribute('class', 'btn');
  newElem.className += ' btn-default spacing';
  newElem.setAttribute('type', 'submit');
  newElem.setAttribute('id', 'alpha-asc');
  newElem.setAttribute('data-sort', 0);
  parent.appendChild(newElem);

  newElem.addEventListener('click', arrangeAZ);

  newElem = document.createElement('i');
  parent = document.getElementById('alpha-asc');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-sort-alpha-asc fa-2x';
  parent.appendChild(newElem);

  // sort alpha desc
  newElem = document.createElement('button');
  parent = document.getElementById('sort');
  newElem.setAttribute('class', 'btn');
  newElem.className += ' btn-default spacing';
  newElem.setAttribute('type', 'submit');
  newElem.setAttribute('id', 'alpha-desc');
  newElem.setAttribute('data-sort', 0);
  parent.appendChild(newElem);

  newElem.addEventListener('click', arrangeZA);

  newElem = document.createElement('i');
  parent = document.getElementById('alpha-desc');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-sort-alpha-desc fa-2x';
  parent.appendChild(newElem);

  // sort high
  newElem = document.createElement('button');
  parent = document.getElementById('sort');
  newElem.setAttribute('class', 'btn');
  newElem.className += ' btn-default spacing';
  newElem.setAttribute('type', 'submit');
  newElem.setAttribute('id', 'high');
  newElem.setAttribute('data-sort', 0);
  parent.appendChild(newElem);

  newElem.addEventListener('click', arrangeHigh);

  newElem = document.createElement('i');
  parent = document.getElementById('high');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-sort-amount-desc fa-2x';
  parent.appendChild(newElem);

  // sort low
  newElem = document.createElement('button');
  parent = document.getElementById('sort');
  newElem.setAttribute('class', 'btn');
  newElem.className += ' btn-default spacing';
  newElem.setAttribute('type', 'submit');
  newElem.setAttribute('id', 'low');
  newElem.setAttribute('data-sort', 0);
  parent.appendChild(newElem);

  newElem.addEventListener('click', arrangeLow);

  newElem = document.createElement('i');
  parent = document.getElementById('low');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-sort-amount-asc fa-2x';
  parent.appendChild(newElem);

  // add location button
  newElem = document.createElement('button');
  parent = document.getElementById('sort');
  newText = document.createTextNode('Add location');
  newElem.setAttribute('class', 'btn');
  newElem.className += ' btn-default spacing';
  newElem.setAttribute('type', 'submit');
  newElem.setAttribute('id', 'add-location');
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  newElem.addEventListener('click', addForm);
}

// convert search input to array
function intoArray(string) {
	return string.toString().split(' ');
}

// modified from findStars() to sort queries
// will combine later
function avgRating(reference) {
  var ratings = [];
  var average = ''
  for (var prop in restaurant) {
    if (restaurant[prop].reference === reference) {
      // determine unique restaurant, push ratings into array
      for (var i = restaurant[prop].reviews.length - 1; i >= 0; i--) {
        ratings.push(restaurant[prop].reviews[i].rating);
      }
    }
  }
  // calculate average of array
  return avgArray(ratings);
}

// loop through each restaurant's tags against search array
// call function populate for all matches
function matchTags(obj, array) {
	var dupe = [];
  var reference = '';
  var name = '';
  var rating = '';
  var image = '';
  var good = '';
  var count = '';
  var desc = '';
  saveQuery = [];
	// dupe array used to check for duplicate entries (multiple tag matches)
  for (var prop in obj) {
    // loop through each restaurant
    for (var i = 0; i < obj[prop].tags.length; i++) {
      // loop through each restaurant's tags
      for (var j = 0; j < array.length; j++) {
        // loop all search array values against each restaurant tag
        if (obj[prop].tags[i] === array[j]
					&& obj[prop].name !== dupe[dupe.length - 1]) {
					// check to see if tag value === search array value
					// && check if current iteration is the same as the last iteration (duplicate)
					// prevent 'lunch tacos' search returning the same restaurant twice ('tacos' and 'lunch' tag)
					reference = obj[prop].reference;
          name = obj[prop].name;
          rating = avgRating(reference);
          image = obj[prop].images[0];
          good = obj[prop].good;
          count = obj[prop].reviews.length;
          desc = obj[prop].description;
          // push into saveQuery for sorting manipulation
          saveQuery.push([reference, name, rating, image, good, count, desc]);
          populate(reference, name, image, good, count, desc);
					// push matching restaurant to dupe array before repeating loop
          dupe.push(obj[prop].name);
        }
      }
    }
  }
}

// populate function will create and append media boxes per query result
function populate(reference, name, image, good, count, desc) {
	var newElem = document.createElement('div');
	var parent = document.getElementById('query-list');
	newElem.setAttribute('class', 'panel');
  newElem.className += ' panel-default';
	newElem.setAttribute('id', 'result-panel');
	parent.appendChild(newElem);

  newElem = document.createElement('div');
	parent = document.getElementById('result-panel');
	newElem.setAttribute('class', 'panel-body');
	newElem.setAttribute('id', 'result-body');
	parent.appendChild(newElem);

  newElem = document.createElement('div');
	parent = document.getElementById('result-body');
	newElem.setAttribute('class', 'media');
	newElem.setAttribute('id', 'rest-box');
	parent.appendChild(newElem);

	newElem = document.createElement('div');
	parent = document.getElementById('rest-box');
	newElem.setAttribute('class', 'media-left');
	newElem.setAttribute('id', 'rest-thumb');
	parent.appendChild(newElem);

	newElem = document.createElement('a');
	parent = document.getElementById('rest-thumb');
	newElem.setAttribute('id', 'image-link');
	newElem.setAttribute('href', '#');
	parent.appendChild(newElem);

  // add event listener to each search result
  // click to call initRestaurant() for this restaurant
  newElem.addEventListener('click', function(e) {
    sendRef(reference);
    initRestaurant();
  })

	newElem = document.createElement('img');
	parent = document.getElementById('image-link');
	newElem.setAttribute('class', 'media-object');
	newElem.setAttribute('src', image);
	newElem.setAttribute('alt', 'image');
	parent.appendChild(newElem);

	newElem = document.createElement('div');
	parent = document.getElementById('rest-box');
	newElem.setAttribute('class', 'media-body');
	newElem.setAttribute('id', 'rest-body');
	parent.appendChild(newElem);

	newElem = document.createElement('h4');
	newText = document.createTextNode(name);
	parent = document.getElementById('rest-body');
	newElem.setAttribute('class', 'media-header');
  newElem.className += ' inline';
	newElem.setAttribute('id', 'rest-name');
	newElem.appendChild(newText);
	parent.appendChild(newElem);

  // user can also click on restaurant name
  newElem.addEventListener('click', function(e) {
    sendRef(reference);
    initRestaurant();
  })

  // convert and display ratings to stars
  findStars(reference, 'rest-body');

  newElem = document.createElement('p');
  newText = document.createTextNode(good);
  parent = document.getElementById('rest-body');
  newElem.setAttribute('id', 'tags');
  newElem.appendChild(newText);
  var newBreak = document.createElement('br');
  newElem.appendChild(newBreak);
  newText = document.createTextNode('Reviews: ' + count);
  newElem.appendChild(newText);
  parent.appendChild(newElem);

	newElem = document.createElement('p');
	newText = document.createTextNode(desc);
	parent = document.getElementById('rest-body');
	newElem.setAttribute('class', 'description');
	newElem.appendChild(newText);
	parent.appendChild(newElem);

	// remove IDs for next iteration
	document.getElementById('rest-name').removeAttribute('id');
	document.getElementById('rest-body').removeAttribute('id');
	document.getElementById('rest-thumb').removeAttribute('id');
	document.getElementById('rest-box').removeAttribute('id');
	document.getElementById('image-link').removeAttribute('id');
	document.getElementById('result-panel').removeAttribute('id');
	document.getElementById('result-body').removeAttribute('id');
}

// splice out lowest rating into sorted array
function minRating(array) {
  var cut = 0;
  var lowest = 6;
  var alpha = 'zzz'
  for (var i = 0; i < array.length; i++) {
    // loop through array, splice out lowest rating
    // if ratings are equal, sort by alpha
    if (array[i][2] === lowest && array[i][0] < alpha) {
      lowest = array[i][2];
      alpha = array[i][0];
      cut = i;
    } else if (array[i][2] < lowest) {
      lowest = array[i][2];
      alpha = array[i][0];
      cut = i;
      }
    }
  removed = array.splice(cut, 1);
  sorted = sorted.concat(removed);
}

// loop splice function until array length = 0
function sortLow(array) {
  sorted = [];
  removed = [];
  // run loop (splice lowest rating) until length = 0
  while (array.length > 0) {
    minRating(array);
  }
  saveQuery = sorted;
}

// splice out lowest alpha into sorted array
function minAlpha(array) {
  var cut = 0;
  var lowest = 'zzz'
  for (var i = 0; i < array.length; i++) {
    // loop through array, splice out lowest alpha
    if (array[i][0] < lowest) {
      console.log('changing lowest to ' + array[i][0] + ' from ' + lowest);
      lowest = array[i][0];
      cut = i;
    }
  }
  removed = array.splice(cut, 1);
  sorted = sorted.concat(removed);
}

// loop splice function until array length = 0
function sortAlpha(array) {
  sorted = [];
  removed = [];
  // run loop (splice lowest alpha) until length = 0
  while (array.length > 0) {
    minAlpha(array);
  }
  saveQuery = sorted;
}

// arrange search results AZ
function arrangeAZ() {
  clearPage();
  searchHeader(searchInput.value);
  sortAlpha(saveQuery);
  // sort saveQuery and loop array through populate function
  for (var i = 0; i < saveQuery.length; i++) {
    populate(saveQuery[i][0], saveQuery[i][1], saveQuery[i][3],
      saveQuery[i][4], saveQuery[i][5], saveQuery[i][6]);
  }
  document.getElementById('alpha-asc').setAttribute('data-sort', 1);
  document.getElementById('alpha-desc').setAttribute('data-sort', 0);
  document.getElementById('low').setAttribute('data-sort', 0);
  document.getElementById('high').setAttribute('data-sort', 0);
}

// arrange search results ZA
function arrangeZA() {
  clearPage();
  searchHeader(searchInput.value);
  sortAlpha(saveQuery);
  // sort saveQuery and loop backwards (minAlpha sorts AZ)
  for (var i = saveQuery.length - 1; i > -1; i--) {
    populate(saveQuery[i][0], saveQuery[i][1], saveQuery[i][3],
      saveQuery[i][4], saveQuery[i][5], saveQuery[i][6]);
  }
  document.getElementById('alpha-asc').setAttribute('data-sort', 0);
  document.getElementById('alpha-desc').setAttribute('data-sort', 1);
  document.getElementById('low').setAttribute('data-sort', 0);
  document.getElementById('high').setAttribute('data-sort', 0);
}

// arrange search results low to high rating
function arrangeLow() {
  clearPage();
  searchHeader(searchInput.value);
  sortLow(saveQuery);
  // sort saveQuery and loop array through populate function
  for (var i = 0; i < saveQuery.length; i++) {
    populate(saveQuery[i][0], saveQuery[i][1], saveQuery[i][3],
      saveQuery[i][4], saveQuery[i][5], saveQuery[i][6]);
  }
  document.getElementById('alpha-asc').setAttribute('data-sort', 0);
  document.getElementById('alpha-desc').setAttribute('data-sort', 0);
  document.getElementById('low').setAttribute('data-sort', 1);
  document.getElementById('high').setAttribute('data-sort', 0);
}

// arrange search results high to low rating
function arrangeHigh() {
  clearPage();
  searchHeader(searchInput.value);
  sortLow(saveQuery);
  // sort saveQuery and loop backwards (minRating sorts low to high)
  for (var i = saveQuery.length - 1; i > -1; i--) {
    populate(saveQuery[i][0], saveQuery[i][1], saveQuery[i][3],
      saveQuery[i][4], saveQuery[i][5], saveQuery[i][6]);
  }
  document.getElementById('alpha-asc').setAttribute('data-sort', 0);
  document.getElementById('alpha-desc').setAttribute('data-sort', 0);
  document.getElementById('low').setAttribute('data-sort', 0);
  document.getElementById('high').setAttribute('data-sort', 1);
}

// clear current results and/or restaurant content
// remove parent div containers
// create empty query container and restaurant container
function clearPage() {
	var toAnchor = document.getElementById('anchor');
	var toQueryList = document.getElementById('query-list');
  var toRestaurant = document.getElementById('restaurant-content');
	toAnchor.removeChild(toQueryList);
  toAnchor.removeChild(toRestaurant);
	// remove current ontainers, create new containers
	var newElem = document.createElement('div');
	newElem.setAttribute('class', 'col-md-12');
	newElem.setAttribute('id', 'query-list');
	toAnchor.appendChild(newElem);
  newElem = document.createElement('div');
  newElem.setAttribute('class', 'col-md-12');
  newElem.setAttribute('id', 'restaurant-content');
  toAnchor.appendChild(newElem);
}

// clear review section
function clearReviews() {
  // remove list of reviews
  var toContent = document.getElementById('restaurant-content');
  var toReviewBox = document.getElementById('review-box');
  var toList = document.getElementById('review-list');
	toContent.removeChild(toReviewBox);
  toContent.removeChild(toList);
}

// remove form after submitting
// not currently using, leaving code to preserve
function clearForm() {
  var toReviewBox = document.getElementById('review-list');
  var toForm = document.getElementById('review-form');
  toReviewBox.removeChild(toForm);
}

// convert search input into an array by calling function intoArray;
// loop through each restaurant's tags against the search array;
// return any matches and appends them via function populate;
function searchFood() {
	clearPage();
  searchHeader(searchInput.value);
	return matchTags(restaurant, intoArray(searchInput.value.toLowerCase()));
}

// search event listener
var search = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');
search.addEventListener('click', searchFood);

// variables for generating restaurant page
// assign values in initRestaurant(), use in showRestaurant() and showReviews()
var storeRef = '';
var name = '';
var good = '';
var tags = '';
var street = '';
var city = '';
var telephone = '';
var picOne = '';
var picTwo = '';
var picThree = '';
var mon = '';
var tue = '';
var wed = '';
var thu = '';
var fri = '';
var sat = '';
var sunday = '';
var reviewer = '';
var date = '';
var rate = '';
var review = '';
var useful = 0;
var funny = 0;
var cool = 0;
var thisReview = '';

// set up restaurant page (info, photos) and create container for reviews
function showRestaurant() {
	var anchor = document.getElementById('anchor');
	var query = document.getElementById('query-list');
	// set query-list to hidden
	query.setAttribute('class', 'hidden');

	// create skeleton for review section
  var newElem = document.createElement('div');
	var parent = document.getElementById('restaurant-content');
	newElem.setAttribute('class', 'row');
	newElem.setAttribute('id', 'rest-row');
	parent.appendChild(newElem);

  newElem = document.createElement('div');
	parent = document.getElementById('rest-row');
	newElem.setAttribute('class', 'panel');
  newElem.className += ' panel-default';
	newElem.setAttribute('id', 'rest-panel');
	parent.appendChild(newElem);

  newElem = document.createElement('div');
	parent = document.getElementById('rest-panel');
	newElem.setAttribute('class', 'panel-body');
	newElem.setAttribute('id', 'rest-header');
	parent.appendChild(newElem);

  newElem = document.createElement('div');
	parent = document.getElementById('rest-header');
	newElem.setAttribute('class', 'col-md-3');
	newElem.setAttribute('id', 'rest-heading');
	parent.appendChild(newElem);

	newElem = document.createElement('h4');
	parent = document.getElementById('rest-heading');
  var newText = document.createTextNode(name);
	newElem.setAttribute('class', 'media-heading');
	newElem.setAttribute('id', 'rest-name');
  newElem.appendChild(newText)
	parent.appendChild(newElem);

  // note: making button to write reviews here for now
  findStars (storeRef, 'rest-heading');

	newElem = document.createElement('p');
  newText = document.createTextNode('tags: ');
	newElem.appendChild(newText);
	newText = document.createTextNode(good);
	newElem.appendChild(newText);
	parent.appendChild(newElem);

	newElem = document.createElement('p');
	newText = document.createTextNode(street);
	parent = document.getElementById('rest-heading');
	newElem.appendChild(newText);
	parent.appendChild(newElem);

	var newBreak = document.createElement('br');
  newElem.appendChild(newBreak);
	newText = document.createTextNode(city);
	newElem.appendChild(newText);

	newBreak = document.createElement('br');
  newElem.appendChild(newBreak);
	newText = document.createTextNode(telephone);
	newElem.appendChild(newText);

  // write review button
  newElem = document.createElement('button');
  newText = document.createTextNode('Write a Review');
  parent = document.getElementById('rest-heading');
  newElem.setAttribute('type', 'submit');
  newElem.setAttribute('class', 'btn');
  newElem.className += ' btn-default';
  newElem.setAttribute('id', 'write-review');
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  // show review form
  var write = document.getElementById('write-review')
  write.addEventListener('click', writeReview);

	newElem = document.createElement('div');
	parent = document.getElementById('rest-header');
	newElem.setAttribute('class', 'col-md-9');
	newElem.setAttribute('id', 'rest-img');
	parent.appendChild(newElem);

	newElem = document.createElement('img');
	parent = document.getElementById('rest-img');
	newElem.setAttribute('class', 'img-thumbnail');
  newElem.className += ' review-img float-right';
	newElem.setAttribute('src', picThree);
	newElem.setAttribute('alt', 'image');
	parent.appendChild(newElem);

  newElem = document.createElement('img');
  newElem.setAttribute('class', 'img-thumbnail');
  newElem.className += ' review-img float-right';
  newElem.setAttribute('src', picTwo);
  newElem.setAttribute('alt', 'image');
  parent.appendChild(newElem);

  newElem = document.createElement('img');
  newElem.setAttribute('class', 'img-thumbnail');
  newElem.className += ' review-img float-right';
  newElem.setAttribute('src', picOne);
  newElem.setAttribute('alt', 'image');
  parent.appendChild(newElem);

	newElem = document.createElement('div');
	parent = document.getElementById('restaurant-content');
	newElem.setAttribute('class', 'reviews');
	newElem.setAttribute('id', 'review-box');
	parent.appendChild(newElem);

	newElem = document.createElement('div');
	parent = document.getElementById('review-box');
	newElem.setAttribute('class', 'col-md-3');
  newElem.className += ' col-xs-4 float-right';
	newElem.setAttribute('id', 'hours-box');
	parent.appendChild(newElem);

  newElem = document.createElement('div');
	parent = document.getElementById('hours-box');
	newElem.setAttribute('class', 'panel');
  newElem.className += ' panel-default';
	newElem.setAttribute('id', 'hours-panel');
	parent.appendChild(newElem);

  newElem = document.createElement('div');
	parent = document.getElementById('hours-panel');
	newElem.setAttribute('class', 'panel-body');
	newElem.setAttribute('id', 'hours-body');
	parent.appendChild(newElem);

	newElem = document.createElement('p');
	parent = document.getElementById('hours-body');
  newText = document.createTextNode('Mon: ')
	newElem.appendChild(newText);
	newText = document.createTextNode(mon);
  newElem.appendChild(newText);
	parent.appendChild(newElem);

	newElem = document.createElement('p');
  newText = document.createTextNode('Tue: ')
  newElem.appendChild(newText);
	newText = document.createTextNode(tue);
	newElem.appendChild(newText);
	parent.appendChild(newElem);

	newElem = document.createElement('p');
  newText = document.createTextNode('Wed: ')
  newElem.appendChild(newText);
	newText = document.createTextNode(wed);
	newElem.appendChild(newText);
	parent.appendChild(newElem);

  newElem = document.createElement('p');
  newText = document.createTextNode('Thu: ')
  newElem.appendChild(newText);
  newText = document.createTextNode(thu);
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  newElem = document.createElement('p');
  newText = document.createTextNode('Fri: ')
  newElem.appendChild(newText);
  newText = document.createTextNode(fri);
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  newElem = document.createElement('p');
  newText = document.createTextNode('Sat: ')
  newElem.appendChild(newText);
  newText = document.createTextNode(sat);
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  newElem = document.createElement('p');
  newText = document.createTextNode('Sun: ')
  newElem.appendChild(newText);
  newText = document.createTextNode(sunday);
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  newElem = document.createElement('div');
  parent = document.getElementById('restaurant-content');
  newElem.setAttribute('class', 'col-md-9');
  newElem.className += ' col-xs-8 float-left';
  newElem.setAttribute('id', 'review-list');
  parent.appendChild(newElem);
}

// loop function for every entry in object review
// create separate div container for each review
function showReviews(reviewer, date, review, ref) {
	var newElem = document.createElement('div');
	var parent = document.getElementById('review-list');
	newElem.setAttribute('class', 'row');
	newElem.setAttribute('id', 'review-row');
	parent.appendChild(newElem);

	newElem = document.createElement('div');
	parent = document.getElementById('review-row');
	newElem.setAttribute('class', 'panel');
  newElem.className += ' panel-default';
	newElem.setAttribute('id', 'review-panel');
	parent.appendChild(newElem);

  newElem = document.createElement('div');
	parent = document.getElementById('review-panel');
	newElem.setAttribute('class', 'panel-body');
	newElem.setAttribute('id', 'review-body');
	parent.appendChild(newElem);

  // add individual reviewer rating
  calcStars(rate, 'review-body');

	newElem = document.createElement('p');
	var newText = document.createTextNode(reviewer);
	parent = document.getElementById('review-body');
	newElem.appendChild(newText);
  var newBreak = document.createElement('br');
  newElem.appendChild(newBreak);
  newText = document.createTextNode(date);
	newElem.appendChild(newText);
  parent.appendChild(newElem);

	newElem = document.createElement('p');
  newText = document.createTextNode(review);
	newElem.appendChild(newText);
  parent.appendChild(newElem);

  // add useful badge
  newElem = document.createElement('button');
  newText = document.createTextNode('useful');
  parent = document.getElementById('review-body');
  newElem.setAttribute('class', 'btn');
  newElem.className += ' btn-default useful-badge inline';
  newElem.setAttribute('type', 'button');
  newElem.setAttribute('data-useful', ref.useful);
  newElem.setAttribute('data-clicked', ref.plusUseful);
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  // add useful badge event listener
  newElem.addEventListener('click', function(e) {
    if (event.currentTarget.getAttribute('data-clicked') == 0) {
      // check if user has already upvoted badge
      // add +1 to badge score and displayed data attribute
      ref.useful += 1;
      ref.plusUseful = 1;
      event.currentTarget.setAttribute('data-useful', ref.useful);
      event.currentTarget.setAttribute('data-clicked', 1);
    } else if (event.currentTarget.getAttribute('data-clicked') == 1) {
      // retract user upvote
      ref.useful -= 1;
      ref.plusUseful = 0;
      event.currentTarget.setAttribute('data-useful', ref.useful);
      event.currentTarget.setAttribute('data-clicked', 0);
    }
  })

  // add funny badge
  newElem = document.createElement('button');
  newText = document.createTextNode('funny');
  parent = document.getElementById('review-body');
  newElem.setAttribute('class', 'btn');
  newElem.className += ' btn-default funny-badge inline';
  newElem.setAttribute('type', 'button');
  newElem.setAttribute('data-funny', ref.funny);
  newElem.setAttribute('data-clicked', ref.plusFunny);
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  // add funny badge event listener
  newElem.addEventListener('click', function(e) {
    if (event.currentTarget.getAttribute('data-clicked') == 0) {
      // check if user has already upvoted badge
      // add +1 to badge score and displayed data attribute
      ref.funny += 1;
      ref.plusFunny = 1;
      event.currentTarget.setAttribute('data-funny', ref.funny);
      event.currentTarget.setAttribute('data-clicked', 1);
    } else if (event.currentTarget.getAttribute('data-clicked') == 1) {
      // retract user upvate
      ref.funny -= 1;
      ref.plusFunny = 0;
      event.currentTarget.setAttribute('data-funny', ref.funny);
      event.currentTarget.setAttribute('data-clicked', 0);
    }
  })

  // add cool badge
  newElem = document.createElement('button');
  newText = document.createTextNode('cool');
  parent = document.getElementById('review-body');
  newElem.setAttribute('class', 'btn');
  newElem.className += ' btn-default cool-badge inline';
  newElem.setAttribute('type', 'button');
  newElem.setAttribute('data-cool', ref.cool);
  newElem.setAttribute('data-clicked', ref.plusCool);
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  // add cool badge event listener
  newElem.addEventListener('click', function(e) {
    if (event.currentTarget.getAttribute('data-clicked') == 0) {
      // check if user has already upvoted badge
      // add +1 to badge score and displayed data attribute
      ref.cool += 1;
      ref.plusCool = 1;
      event.currentTarget.setAttribute('data-cool', ref.cool);
      event.currentTarget.setAttribute('data-clicked', 1);
    } else if (event.currentTarget.getAttribute('data-clicked') == 1) {
      // retract user upvote
      ref.cool -= 1;
      ref.plusCool = 0;
      event.currentTarget.setAttribute('data-cool', ref.cool);
      event.currentTarget.setAttribute('data-clicked', 0);
    }
  })

	// remove IDs for next iteration
	document.getElementById('review-row').removeAttribute('id');
	document.getElementById('review-panel').removeAttribute('id');
	document.getElementById('review-body').removeAttribute('id');
}

// store reference ID to be used in initRestaurant()
function sendRef(reference) {
  storeRef = reference;
}

// match variable storeRef to unique restaurant
// call showRestaurant() and showReviews()
function initRestaurant() {
  clearPage();
	for (var prop in restaurant) {
		// loop through each restaurant
		if (restaurant[prop].reference === storeRef) {
			// match reference from search result
      // pass matching restaurant details to variables
      name = restaurant[prop].name;
      good = restaurant[prop].good;
      street = restaurant[prop].address[0];
      city = restaurant[prop].address[1] + ', ' + restaurant[prop].address[2] + ' ' + restaurant[prop].address[3];
      telephone = restaurant[prop].number;
      picOne = restaurant[prop].images[0];
      picTwo = restaurant[prop].images[1];
      picThree = restaurant[prop].images[2];
      // join hours for restaurants that close between lunch and dinner
      mon = restaurant[prop].hours.monday.join(', ');
      tue = restaurant[prop].hours.tuesday.join(', ');
      wed = restaurant[prop].hours.wednesday.join(', ');
      thu = restaurant[prop].hours.thursday.join(', ');
      fri = restaurant[prop].hours.friday.join(', ');
      sat = restaurant[prop].hours.saturday.join(', ');
      sunday = restaurant[prop].hours.sunday.join(', ');
      // set up restaurant html structure
      showRestaurant();
      // loop through reviews backwards to show most recent reviews first
      for (var i = restaurant[prop].reviews.length - 1; i >= 0; i--) {
        reviewer = restaurant[prop].reviews[i].username;
        date = restaurant[prop].reviews[i].date;
        rate = restaurant[prop].reviews[i].rating;
        review = restaurant[prop].reviews[i].review;
        useful = restaurant[prop].reviews[i].useful;
        funny = restaurant[prop].reviews[i].funny;
        cool = restaurant[prop].reviews[i].cool;
        thisReview = restaurant[prop].reviews[i];
        // call showReviews() for each review
        showReviews(reviewer, date, review, thisReview);
      }
		}
	}
}

// variables for passing current date to review array
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

// create review form when corresponding button is clicked
function writeReview() {
  clearReviews();
  saveFill = 0;
  var parent = document.getElementById('restaurant-content');
  var newElem = document.createElement('div');
  newElem.setAttribute('class', 'row');
  newElem.setAttribute('id', 'add-row');
  parent.appendChild(newElem);

  newElem = document.createElement('div');
  parent = document.getElementById('add-row');
  newElem.setAttribute('class', 'col-md-6');
  newElem.setAttribute('id', 'form-col');
  parent.appendChild(newElem);

  newElem = document.createElement('div');
  parent = document.getElementById('form-col');
  newElem.setAttribute('class', 'panel');
  newElem.className += ' panel-default';
  newElem.setAttribute('id', 'add-panel');
  parent.appendChild(newElem);

  newElem = document.createElement('div');
  parent = document.getElementById('add-panel');
  newElem.setAttribute('class', 'panel-body');
  newElem.setAttribute('id', 'add-body');
  parent.appendChild(newElem);

  newElem = document.createElement('form');
  parent = document.getElementById('add-body');
  newElem.setAttribute('id', 'write-form');
  newElem.setAttribute('onSubmit', 'return false');
  parent.appendChild(newElem);

  newElem = document.createElement('div');
  parent = document.getElementById('write-form');
  newElem.setAttribute('class', 'form-group');
  newElem.setAttribute('id', 'form-parent')
  parent.appendChild(newElem);

  newElem = document.createElement('label');
  parent = document.getElementById('form-parent');
  var newText = document.createTextNode('Name');
  newElem.setAttribute('for', 'username');
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  newElem = document.createElement('input');
  newElem.setAttribute('type', 'text');
  newElem.setAttribute('class', 'form-control');
  newElem.setAttribute('id', 'username');
  parent.appendChild(newElem);

  newElem = document.createElement('label');
  parent = document.getElementById('write-form')
  newText = document.createTextNode('Rating');
  newElem.setAttribute('for', 'rating');
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  var newBreak = document.createElement('br');
  parent.appendChild(newBreak);
  // add star icons
  newElem = document.createElement('span');
  newElem.setAttribute('id', 'rating');
  parent.appendChild(newElem);
  // star 1
  newElem = document.createElement('i');
  parent = document.getElementById('rating');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-star-o fa-3x';
  newElem.setAttribute('data-count', 1);
  parent.appendChild(newElem);
  // star 2
  newElem = document.createElement('i');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-star-o fa-3x';
  newElem.setAttribute('data-count', 2);
  parent.appendChild(newElem);
  // star 3
  newElem = document.createElement('i');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-star-o fa-3x';
  newElem.setAttribute('data-count', 3);
  parent.appendChild(newElem);
  // star 4
  newElem = document.createElement('i');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-star-o fa-3x';
  newElem.setAttribute('data-count', 4);
  parent.appendChild(newElem);
  // star 5
  newElem = document.createElement('i');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-star-o fa-3x';
  newElem.setAttribute('data-count', 5);
  parent.appendChild(newElem);

  newBreak = document.createElement('br');
  parent = document.getElementById('write-form')
  parent.appendChild(newBreak);

  stars = document.querySelectorAll('[data-count]');
  shiftStar();

  newElem = document.createElement('div');
  newElem.setAttribute('class', 'form-group');
  newElem.setAttribute('id', 'add-review');
  parent.appendChild(newElem);

  newElem = document.createElement('label');
  parent = document.getElementById('add-review');
  newText = document.createTextNode('Review');
  newElem.setAttribute('for', 'review');
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  newElem = document.createElement('textarea');
  newElem.setAttribute('class', 'form-control');
  newElem.setAttribute('id', 'review');
  newElem.setAttribute('rows', '6');
  parent.appendChild(newElem);

  newElem = document.createElement('div');
  parent = document.getElementById('write-form');
  newElem.setAttribute('class', 'form-group');
  newElem.setAttribute('id', 'add-button');
  parent.appendChild(newElem);

  newElem = document.createElement('button');
  newText = document.createTextNode('Submit');
  newElem.setAttribute('type', 'submit');
  newElem.setAttribute('class', 'btn');
  newElem.className += ' btn-default';
  newElem.setAttribute('id' ,'submit-button');
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  // event listener to push review
  var submit = document.getElementById('submit-button');
  submit.addEventListener('click', submitReview);

  newElem = document.createElement('div');
  parent = document.getElementById('add-row');
  newElem.setAttribute('class', 'col-md-6');
  newElem.setAttribute('id', 'write-img');
  parent.appendChild(newElem);

  newElem = document.createElement('img');
  parent = document.getElementById('write-img');
  newElem.setAttribute('src', 'images/write.jpg');
  newElem.setAttribute('class', 'img-responsive');
  newElem.setAttribute('alt', 'image');
  parent.appendChild(newElem);
}

// clear review form after pushing to review array
// create updated list of reviews
function updateReviews() {
  clearPage();
  for (var prop in restaurant) {
    // loop through each restaurant
    if (restaurant[prop].reference === storeRef) {
      // match reference from search result
      // loop through reviews backwards to show most recent reviews first
      for (var i = restaurant[prop].reviews.length - 1; i >= 0; i--) {
        reviewer = restaurant[prop].reviews[i].username;
        date = restaurant[prop].reviews[i].date;
        review = restaurant[prop].reviews[i].review;
        // call showReviews() for each review
        initRestaurant();
      }
    }
  }
}

// push new review object into review array
function submitReview() {
  // pull values from review form and assign to variables
  var newReview = {};
  var addReviewer = document.getElementById('username');
  var addReview = document.getElementById('review');
  newReview.username = addReviewer.value;
  newReview.date = month + '/' + day + '/' + year;
  newReview.rating = parseInt(saveFill);
  newReview.review = addReview.value;
  newReview.useful = 0;
  newReview.funny = 0;
  newReview.cool = 0;
  newReview.plusUseful = 0;
  newReview.plusFunny = 0;
  newReview.plusCool = 0;
  if (newReview.review === '') {
    newReview.review = 'I forgot to write a review...';
  }
  if (newReview.username === '') {
    newReview.username = 'Anonymous';
  }
  if (newReview.rating === 0) {
    newReview.rating = 1;
  }
  if (starsClicked === false) {
    newReview.rating = 1;
  }
  // match reference (assigned when clicking on restaurant)
  // push new review into targeted restaurant's review array
  for (var prop in restaurant) {
    if (restaurant[prop].reference === storeRef) {
      restaurant[prop].reviews.push(newReview);
    }
  }
  updateReviews();
}

// add star to span id = 'stars'
function giveStar(number) {
  for (var i = 0; i < number; i++){
    var newElem = document.createElement('i');
    var parent = document.getElementById('stars');
    newElem.setAttribute('class', 'fa');
    newElem.className += ' fa-star fa-2x';
    parent.appendChild(newElem);
  }
}

// add half star to span id = 'stars'
function giveHalfStar() {
  var newElem = document.createElement('i');
  var parent = document.getElementById('stars');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-star-half-o fa-2x';
  parent.appendChild(newElem);
}

// add empty star to span id = 'stars'
function giveEmptyStar(number) {
  for (var i = 0; i < number; i++){
    var newElem = document.createElement('i');
    var parent = document.getElementById('stars');
    newElem.setAttribute('class', 'fa');
    newElem.className += ' fa-star-o fa-2x';
    parent.appendChild(newElem);
  }
}

// create star html components
function createStars(stars, half, toId) {
  var count = 5;
  var emptyStar = '';

  // 5 stars total; empty star = count - (stars + half)
  var newElem = document.createElement('span');
  var parent = document.getElementById(toId);
  newElem.setAttribute('id', 'stars');
  parent.appendChild(newElem);

  giveStar(stars);
  // create half star if true, create empty to fill
  if (half === true) {
    giveHalfStar();
    count -= 1;
    emptyStar = count - stars;
    giveEmptyStar(emptyStar);
  } else {
    emptyStar = count - stars;
    giveEmptyStar(emptyStar);
  }
  // removing id for next span
  newElem.removeAttribute('id');
}

// find the average of an array containing numbers
function avgArray(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    // add each array value to sum and divide amount of values
    sum = sum + array[i];
  }
  sum = sum / array.length;
  return sum;
}

// determine how many stars are displayed
function calcStars(rating, toId) {
  var times = ''
  var half = ''
  // times = number of stars, if half = true, give half star
  if (rating > 4.875) {
    times = 5;
  } else if (rating > 4.25) {
    times = 4;
    half = true;
  } else if (rating > 3.875) {
    times = 4;
    half = false;
  } else if (rating > 3.25) {
    times = 3;
    half = true;
  } else if (rating > 2.875) {
    times = 3;
    half = false;
  } else if (rating > 2.25) {
    times = 2;
    half = true;
  } else if (rating > 1.875) {
    times = 2;
    half = false;
  } else if (rating > 1.25) {
    times = 1;
    half = true;
  } else {
    times = 1;
    half = false;
  }
  // console.log for testing, will call another function
  createStars(times, half, toId);
}

// determine how many stars to create for a restaurant
function findStars(name, toId) {
  var ratings = [];
  var average = ''
  for (var prop in restaurant) {
    if (restaurant[prop].reference === name) {
      // determine unique restaurant, push ratings into array
      for (var i = restaurant[prop].reviews.length - 1; i >= 0; i--) {
        ratings.push(restaurant[prop].reviews[i].rating);
      }
    }
  }
  // calculate average of array and quantity of stars
  average = avgArray(ratings);
  return calcStars(average, toId);
}

// variables for filling in stars
var stars = '';
var fill = 0;
var saveFill = 0;
var starsClicked = false

// apply event listeners to make stars interactive
function shiftStar() {
  for (i = 0; i < stars.length; i++) {
    stars[i].addEventListener('mouseenter', fillStar);
    stars[i].addEventListener('mouseleave', emptyStar);
    stars[i].addEventListener('click', saveStars);
  }
}

// fill clicked star and all stars before it
function fillStar() {
  fill = this.getAttribute('data-count');
  // determine which star user is hovering over
  for (i = 0; i < fill; i++) {
    // fill only if user has not clicked a rating
    if (!starsClicked) {
      stars[i].classList.remove('fa-star-o');
      stars[i].classList.add('fa-star');
    }
  }
}

// empty all stars when mouse leaves rating area
function emptyStar() {
  for (i = 0; i < stars.length; i++) {
    // empty only if user has not clicked a rating
    if (!starsClicked) {
      stars[i].classList.remove('fa-star');
      stars[i].classList.add('fa-star-o');
    }
  }
}

// save fill state and save rating value
function saveStars() {
  fill = this.getAttribute('data-count');
  saveFill = fill;
  // save fill state if user has not clicked
  if (!starsClicked) {
    for (i = 0; i < fill; i++) {
      stars[i].classList.remove('fa-star-o');
      stars[i].classList.add('fa-star');
    }
    starsClicked = true;
    saveFill = fill;
  } else if (starsClicked) {
    // click again to reset/remove saved fill state
    starsClicked = false;
    saveFill = 0;
  }
}

// return first three tags (used in add location function)
function threeTags(array) {
  var string = array[0];
  for (var i = 1; i < 3 && array[i] !== undefined; i++) {
    // add comma and space for second and third tags
    // stop if array doesn't have a second or third tag
      string += ', ' + array[i];
    }
  return string;
}

// clear search results and create add location form
function addForm() {
  clearPage();
  // clear page and create columns
  var newElem = document.createElement('div');
	var parent = document.getElementById('query-list');
	newElem.setAttribute('class', 'row');
	newElem.setAttribute('id', 'add-row');
	parent.appendChild(newElem);

  newElem = document.createElement('div');
	parent = document.getElementById('add-row');
	newElem.setAttribute('class', 'col-md-6');
	newElem.setAttribute('id', 'form-col');
	parent.appendChild(newElem);

  newElem = document.createElement('form');
	parent = document.getElementById('form-col');
  newElem.setAttribute('onSubmit', 'return false');
	newElem.setAttribute('id', 'add-form');
	parent.appendChild(newElem);

  // restaurant name
  newElem = document.createElement('div');
	parent = document.getElementById('add-form');
	newElem.setAttribute('class', 'form-group');
	newElem.setAttribute('id', 'form-parent');
	parent.appendChild(newElem);

  newElem = document.createElement('label');
	parent = document.getElementById('form-parent');
  var newText = document.createTextNode('Restaurant Name');
	newElem.setAttribute('for', 'add-name');
  newElem.appendChild(newText);
	parent.appendChild(newElem);

  newElem = document.createElement('input');
	newElem.setAttribute('type', 'text');
  newElem.setAttribute('class', 'form-control');
  newElem.setAttribute('id', 'add-name');
	newElem.setAttribute('placeholder', 'Hipster\'s Delight');
	parent.appendChild(newElem);
  parent.removeAttribute('id');

  // address
  newElem = document.createElement('div');
	parent = document.getElementById('add-form');
	newElem.setAttribute('class', 'form-group');
	newElem.setAttribute('id', 'form-parent');
	parent.appendChild(newElem);

  newElem = document.createElement('label');
	parent = document.getElementById('form-parent');
  newText = document.createTextNode('Address');
	newElem.setAttribute('for', 'add-street');
  newElem.appendChild(newText);
	parent.appendChild(newElem);

  newElem = document.createElement('input');
	newElem.setAttribute('type', 'text');
  newElem.setAttribute('class', 'form-control');
  newElem.setAttribute('id', 'add-street');
	newElem.setAttribute('placeholder', '24 Main Street');
	parent.appendChild(newElem);
  parent.removeAttribute('id');

  // city
  newElem = document.createElement('div');
	parent = document.getElementById('add-form');
	newElem.setAttribute('class', 'form-group');
	newElem.setAttribute('id', 'form-parent');
	parent.appendChild(newElem);

  newElem = document.createElement('label');
	parent = document.getElementById('form-parent');
  newText = document.createTextNode('City');
	newElem.setAttribute('for', 'add-city');
  newElem.appendChild(newText);
	parent.appendChild(newElem);

  newElem = document.createElement('input');
	newElem.setAttribute('type', 'text');
  newElem.setAttribute('class', 'form-control');
  newElem.setAttribute('id', 'add-city');
	newElem.setAttribute('placeholder', 'Tustin');
	parent.appendChild(newElem);
  parent.removeAttribute('id');

  // state
  newElem = document.createElement('div');
	parent = document.getElementById('add-form');
	newElem.setAttribute('class', 'form-group');
	newElem.setAttribute('id', 'form-parent');
	parent.appendChild(newElem);

  newElem = document.createElement('label');
	parent = document.getElementById('form-parent');
  newText = document.createTextNode('State');
	newElem.setAttribute('for', 'add-state');
  newElem.appendChild(newText);
	parent.appendChild(newElem);

  newElem = document.createElement('input');
	newElem.setAttribute('type', 'text');
  newElem.setAttribute('class', 'form-control');
  newElem.setAttribute('id', 'add-state');
	newElem.setAttribute('placeholder', 'CA');
	parent.appendChild(newElem);
  parent.removeAttribute('id');

  // zip code
  newElem = document.createElement('div');
	parent = document.getElementById('add-form');
	newElem.setAttribute('class', 'form-group');
	newElem.setAttribute('id', 'form-parent');
	parent.appendChild(newElem);

  newElem = document.createElement('label');
	parent = document.getElementById('form-parent');
  newText = document.createTextNode('Zip Code');
	newElem.setAttribute('for', 'add-zip');
  newElem.appendChild(newText);
	parent.appendChild(newElem);

  newElem = document.createElement('input');
	newElem.setAttribute('type', 'text');
  newElem.setAttribute('class', 'form-control');
  newElem.setAttribute('id', 'add-zip');
	newElem.setAttribute('placeholder', '92780');
	parent.appendChild(newElem);
  parent.removeAttribute('id');

  // phone number
  newElem = document.createElement('div');
	parent = document.getElementById('add-form');
	newElem.setAttribute('class', 'form-group');
	newElem.setAttribute('id', 'form-parent');
	parent.appendChild(newElem);

  newElem = document.createElement('label');
	parent = document.getElementById('form-parent');
  newText = document.createTextNode('Phone Number');
	newElem.setAttribute('for', 'add-tele');
  newElem.appendChild(newText);
	parent.appendChild(newElem);

  newElem = document.createElement('input');
	newElem.setAttribute('type', 'text');
  newElem.setAttribute('class', 'form-control');
  newElem.setAttribute('id', 'add-tele');
	newElem.setAttribute('placeholder', '714-144-1441');
	parent.appendChild(newElem);
  parent.removeAttribute('id');

  // categories
  newElem = document.createElement('div');
	parent = document.getElementById('add-form');
	newElem.setAttribute('class', 'form-group');
	newElem.setAttribute('id', 'form-parent');
	parent.appendChild(newElem);

  newElem = document.createElement('label');
	parent = document.getElementById('form-parent');
  newText = document.createTextNode('Categories');
	newElem.setAttribute('for', 'add-tags');
  newElem.appendChild(newText);
	parent.appendChild(newElem);

  newElem = document.createElement('p');
  newText = document.createTextNode('Select up to 3 categories. The more specific the better.');
  newElem.setAttribute('class', 'help-block');
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  newElem = document.createElement('input');
	newElem.setAttribute('type', 'text');
  newElem.setAttribute('class', 'form-control');
  newElem.setAttribute('id', 'add-tags');
	newElem.setAttribute('placeholder', 'Japanese, sushi');
	parent.appendChild(newElem);
  parent.removeAttribute('id');

  // description
  newElem = document.createElement('div');
	parent = document.getElementById('add-form');
	newElem.setAttribute('class', 'form-group');
	newElem.setAttribute('id', 'form-parent');
	parent.appendChild(newElem);

  newElem = document.createElement('label');
	parent = document.getElementById('form-parent');
  newText = document.createTextNode('Tell us about this restaurant');
	newElem.setAttribute('for', 'add-desc');
  newElem.appendChild(newText);
	parent.appendChild(newElem);

  newElem = document.createElement('textarea');
  newElem.setAttribute('class', 'form-control');
  newElem.setAttribute('id', 'add-desc');
	newElem.setAttribute('rows', '10');
	parent.appendChild(newElem);
  parent.removeAttribute('id');

  // add location button
  newElem = document.createElement('div');
	parent = document.getElementById('add-form');
	newElem.setAttribute('class', 'form-group');
	newElem.setAttribute('id', 'form-parent');
	parent.appendChild(newElem);

  newElem = document.createElement('button');
	parent = document.getElementById('form-parent');
  newText = document.createTextNode('Add location');
  newElem.setAttribute('class', 'btn');
  newElem.className += ' btn-default';
  newElem.setAttribute('id', 'add-button');
	newElem.setAttribute('type', 'submit');
  newElem.appendChild(newText);
	parent.appendChild(newElem);
  parent.removeAttribute('id');

  newElem.addEventListener('click', addLocation);

  // side image
  newElem = document.createElement('div');
  parent = document.getElementById('add-row');
  newElem.setAttribute('class', 'col-md-6');
  newElem.setAttribute('id', 'form-img');
  parent.appendChild(newElem);

  newElem = document.createElement('img');
  parent = document.getElementById('form-img');
  newElem.setAttribute('src', 'images/add.jpg');
  newElem.setAttribute('class', 'img-responsive');
  newElem.setAttribute('alt', 'image');
  parent.appendChild(newElem);
}

// display location added message
function locationAdded(name) {
  clearPage();
  // clear page and create panel
  var newElem = document.createElement('div');
	var parent = document.getElementById('query-list');
	newElem.setAttribute('class', 'col-md-12');
	newElem.setAttribute('id', 'submit-panel');
	parent.appendChild(newElem);

  newElem = document.createElement('div');
	parent = document.getElementById('submit-panel');
	newElem.setAttribute('class', 'panel');
  newElem.className += ' panel-default';
	newElem.setAttribute('id', 'submit-default');
	parent.appendChild(newElem);

  newElem = document.createElement('div');
	parent = document.getElementById('submit-default');
	newElem.setAttribute('class', 'panel-body');
	newElem.setAttribute('id', 'submit-body');
	parent.appendChild(newElem);

  newElem = document.createElement('h3');
	parent = document.getElementById('submit-body');
  var newText = document.createTextNode(name + ' has been added!');
  newElem.appendChild(newText)
	parent.appendChild(newElem);

  // image
  var newElem = document.createElement('div');
	var parent = document.getElementById('query-list');
	newElem.setAttribute('class', 'col-md-12');
	newElem.setAttribute('id', 'submit-img');
	parent.appendChild(newElem);

  var newElem = document.createElement('img');
	var parent = document.getElementById('submit-img');
	newElem.setAttribute('src', 'images/submitted.jpg');
	newElem.setAttribute('class', 'img-responsive');
	newElem.setAttribute('alt', 'image');
	parent.appendChild(newElem);
}

// create new restaurant object for new location
function addLocation() {
  // define input references
  var name = document.getElementById('add-name').value;
  var reference = name.toLowerCase().replace(/["'-_=+,.\s]+/g, '');
  var number = document.getElementById('add-tele').value;
  var street = document.getElementById('add-street').value;
  var city = document.getElementById('add-city').value;
  var state = document.getElementById('add-state').value;
  var zip = document.getElementById('add-zip').value;
  var desc = document.getElementById('add-desc').value;
  var tags = document.getElementById('add-tags').value;
  var stripped = tags.toLowerCase().replace(/["'-_=+,.]+/g, '');
  var tagArray = intoArray(stripped);

  // create new restaurant object
  restaurant[reference] = {
    reference: reference,
    name: name,
    number: number,
    address: [street, city, state, zip],
    hours: {
      monday: ['Closed'],
      tuesday: ['Closed'],
      wednesday: ['Closed'],
      thursday: ['Closed'],
      friday: ['Closed'],
      saturday: ['Closed'],
      sunday: ['Closed']
    },
    good: threeTags(tagArray),
    tags: tagArray,
    images: ['images/default-one.jpg', 'images/default-two.jpg', 'images/default-three.jpg'],
    description: desc,
    reviews: []
  }

  // create location added message
  locationAdded(name);
}
