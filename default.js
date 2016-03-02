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
    tags: ['mogi','lunch','burritos','burrito','tacos','taco'],
    images: ['images/mogitacos/img001.jpg','images/mogitacos/img002.jpg','images/mogitacos/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
			{
      	username: 'Fat Joe',
        date: '02/10/16',
				rating: 10,
        review: 'They have the best tacos in the OC! Try the short rib tacos or the spicy pork wet burrito. You might have to take a nap after but it\'s worth it!'
      },
      {
        username: 'Sandra T',
        date: '02/13/16',
				rating: 6,
        review: 'I\'ve been wanting to try this place for a long time. The boyfriend finally took me and... It was okay - overhyped for sure. The flavors were good but the meat was a little dry. I\'d be willing to give it another try.'
      },
      {
        username: 'Wendy Eats',
        date: '03/02/16',
				rating: 8,
        review: 'Fantastic food. Place was packed when we walked in but the wait wasn\'t bad. Tom, who took our order, was really helpful! He explained the menu and gave us his recommendations. I got the spicy pork burrito and I couldn\'t even finish it! I\'m going to have to make a few trips to try all of the other stuff!'
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
    tags: ['santana','lunch','burritos','burrito','tacos','taco'],
    images: ['images/santana/img001.jpg','images/santana/img002.jpg','images/santana/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'ocEats',
        date: '01/23/16',
				rating: 8,
        review: 'They have the best burritos in the OC! Try the lengua tacos or the carnitas wet burrito. You might have to take a nap after but it\'s worth it!'
      },
      {
        username: 'I hate vegetarians',
        date: '02/01/16',
				rating: 6,
        review: 'I\'ve been wanting to try this place for a long time. The boyfriend finally took me and... It was okay - overhyped for sure. The flavors were good but the meat was a little dry. I\'d be willing to give it another try.'
      },
      {
        username: 'sweetguy2201',
        date: '02/02/16',
				rating: 8,
        review: 'Fantastic food. Place was packed when we walked in but the wait wasn\'t bad. Tom, who took our order, was really helpful! He explained the menu and gave us his recommendations. I got the carne asada burrito and I couldn\'t even finish it! I\'m going to have to make a few trips to try all of the other stuff!'
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
    tags: ['jupiter','cafe','lunch','burritos','burrito'],
    images: ['images/jupitercafe/img001.jpg','images/jupitercafe/img002.jpg','images/jupitercafe/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'Salty Chicken',
        date: '01/13/16',
				rating: 8,
        review: 'Yo, the breakfast burritos here are the size of your head! I\'d trade my first-born for a burrito and a cherry coke any day. ANY.'
      },
      {
        username: 'Andy Min',
        date: '02/02/16',
				rating: 8,
        review: 'The reviewer below me is an idiot. How are you gonna go and eat a tray of hash browns on a low carb diet. Seriously though, get the breakfast burrito. It can be your breakfast, lunch and dinner.'
      },
      {
        username: 'Paleo Princess',
        date: '02/27/16',
				rating: 6,
        review: 'If you order the burrito without the tortilla, they\'ll put everything in a big to-go box for you breakfast platter style. Good if you\'re low carbing.'
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
      thursday: ['10:00 am - 2:00 pm','5:00 pm - 11:00 pm'],
      friday: ['10:00 am - 2:00 pm','5:00 pm - 11:00 pm'],
      saturday: ['10:00 am - 2:00 pm'],
      sunday: ['10:00 am - 2:00 pm']
    },
    tags: ['burger','bar','lunch','dinner','burgers'],
    images: ['images/burgerbar/img001.jpg','images/burgerbar/img002.jpg','images/burgerbar/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'Get Money Eat Bacon',
        date: '01/26/16',
				rating: 10,
        review: 'Pastrami burger, add fried egg, add avocado. You\'re welcome.'
      },
      {
        username: 'Matt B',
        date: '02/16/16',
				rating: 10,
        review: 'The pastrami burger is ridiculous. If that\'s too much, get a classic burger. It comes with avocado, bacon and cheese. Seriously, if this isn\'t the best burger you\'ve ever had, go back to Average Burgers.'
      },
      {
        username: 'Janet M',
        date: '02/27/16',
				rating: 8,
        review: 'Forget the burgers, get the greek fries. Double fried and topped with a HEFTY amount of gyro, some kinda cheese, onions and tomatoes. Best fries ever.'
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
    tags: ['average','burgers','lunch','burger'],
    images: ['images/averageburgers/img001.jpg','images/averageburgers/img002.jpg','images/averageburgers/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'Rose',
        date: '01/18/16',
				rating: 2,
        review: 'They really live up to their name. Go to Pete\'s down the street. They make much better burgers.'
      },
      {
        username: 'Joe Crusher',
        date: '01/27/16',
				rating: 6,
        review: 'Cheap and fast. Not the best but sometimes... you just want an average burger.'
      },
      {
        username: 'Princess',
        date: '02/12/16',
				rating: 10,
        review: 'So my boyfriend of ten years took me here for our anniversary. I was skeptical at first, but after walking in and being greeted by the acne-faced boy at the counter, all of my worries were laid to rest. My boyfriend got the special "Average Burger" and I just got a cheeseburger. I wanted the "Average Burger" too but my boyfriend said it\'d be better if we got different things so we would have more variety. The food was okay but the service was top-notch. They gave us table markers and brought the food to our table as soon as it was prepared. I think we\'ll come back again for special occasions.'
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
      saturday: ['10:00 am - 2:00 pm','5:00 pm - 11:00 pm'],
      sunday: ['10:00 am - 2:00 pm','5:00 pm - 11:00 pm']
    },
    tags: ['county','lunch','dinner'],
    images: ['images/county/img001.jpg','images/county/img002.jpg','images/county/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'codeMonkey',
        date: '01/18/16',
				rating: 10,
        review: 'Fantastic food. Get the chicken and waffles. You won\'t regret it! Crunchy on the outside and fluffy in the middle. Chicken is well seasoned and moist. Guy below me is on crack.'
      },
      {
        username: 'i luv buffets',
        date: '02/14/16',
				rating: 4,
        review: 'I guess this is the new thing. Charge an arm and a leg for a plate with a tiny piece of meat, some sauce puddles and a few sprigs of crap I think they found in some guy\'s backyard. Sorry but I\'m sticking to Hometown Buffet.'
      },
      {
        username: 'I thought this was Tinder',
        date: '02/23/16',
				rating: 8,
        review: 'They just opened but I think they\'re here to stay. Had dinner with the family. Service was good, entrees came out on time, and most importantly, food was fantastic.'
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
    tags: ['stone','marble','dinner','steaks','steak'],
    images: ['images/stoneandmarble/img001.jpg','images/stoneandmarble/img002.jpg','images/stoneandmarble/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'Adam L',
        date: '01/11/16',
				rating: 10,
        review: 'Fine dining at it\'s best. Elegant yet inviting - never pretentious. Impeccable service and incomparable food. We opted for the wagyu steak (real/imported, $160, 8oz). Tasted like butter, a reflection of how perfectly marbled it was. Make sure you save room for dessert. You won\'t regret it.'
      },
      {
        username: 'Joyce Y',
        date: '01/28/16',
				rating: 8,
        review: 'The decor is nice and homey, slightly pretentious, but not enough to feel intimidated. They bring out all their cuts on a platter to show you difference in marbling. They even let us take a picture with the platter! John got the Japanese wagyu and I got the lamb chops. Instant regret.'
      },
      {
        username: 'LadysMan7263',
        date: '02/27/16',
				rating: 10,
        review: 'THE place to bring a date. They will be impressed with how expensive your steak is.'
      }
    ]
  }
};

// variables for populating search results
var queryRef = '';
var queryName = '';
var queryImage = '';
var queryDesc = '';

// convert search input to array
function intoArray(string) {
	return string.toString().split(' ');
}

// loop through each restaurant's tags against search array
// call function populate for all matches
function matchTags(obj, array) {
	var dupe = [];
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
					queryRef = obj[prop].reference;
          queryName = obj[prop].name;
          queryImage = obj[prop].images[0];
          queryDesc = obj[prop].description;
          populate(queryRef, queryName, queryImage, queryDesc);
					// push matching restaurant to dupe array before repeating loop
          dupe.push(obj[prop].name);
        }
      }
    }
  }
}

// populate function will create and append media boxes per query result
function populate(reference, name, image, description) {
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
	newImage.setAttribute('src', image);
	newImage.setAttribute('alt', 'image');
	toImageLink.appendChild(newImage);

	var newMediaBody = document.createElement('div');
	newMediaBody.setAttribute('class', 'media-body');
	newMediaBody.setAttribute('id', 'rest-body');
	toRestBox.appendChild(newMediaBody);

	var newHeading = document.createElement('h4');
	var restName = document.createTextNode(name);
	var toRestBody = document.getElementById('rest-body');
	newHeading.setAttribute('class', 'media-header');
	newHeading.setAttribute('id', 'rest-name');
	newHeading.appendChild(restName);
	toRestBody.appendChild(newHeading);

	var newRestDesc = document.createElement('p');
	var restDesc = document.createTextNode(description);
	newRestDesc.setAttribute('class', 'description');
	newRestDesc.setAttribute('id', 'rest-desc');
	newRestDesc.appendChild(restDesc);
	toRestBody.appendChild(newRestDesc);

	// remove IDs for next iteration
	document.getElementById('rest-desc').removeAttribute('id');
	document.getElementById('rest-name').removeAttribute('id');
	document.getElementById('rest-body').removeAttribute('id');
	document.getElementById('rest-thumb').removeAttribute('id');
	document.getElementById('rest-box').removeAttribute('id');
	// set reference to unique restaurant by replacing link ID with reference ID
  // add event listener to each search result
  // click to save reference ID in storeRef and call showRestaurant()
	toImageLink.setAttribute('id', reference);
  var toReference = document.getElementById(reference);
  toReference.addEventListener('click', function(e) {
    sendRef(this.id);
    showRestaurant();
  })
}

// clear current results and/or restaurant content
// remove parent div containers
// create empty query container and restaurant container
function clearResults() {
	var toAnchor = document.getElementById('anchor');
	var toQueryList = document.getElementById('query-list');
  var toRestaurant = document.getElementById('restaurant-content');
	toAnchor.removeChild(toQueryList);
  toAnchor.removeChild(toRestaurant);
	// remove current ontainers, create new containers
	var newResults = document.createElement('div');
	newResults.setAttribute('class', 'col-md-12');
	newResults.setAttribute('id', 'query-list');
	toAnchor.appendChild(newResults);
  var newRestaurant = document.createElement('div');
  newRestaurant.setAttribute('class', 'col-md-12');
  newRestaurant.setAttribute('id', 'restaurant-content');
  toAnchor.appendChild(newRestaurant);
}

// convert search input into an array by calling function intoArray;
// loop through each restaurant's tags against the search array;
// return any matches and appends them via function populate;
function searchFood() {
	clearResults();
	return matchTags(restaurant, intoArray(searchInput.value.toLowerCase()));
}

// search event listener
var search = document.getElementById('submit-button');
var searchInput = document.getElementById('search-input');
search.addEventListener('click', searchFood);

// variables for generating restaurant page
// assign values in showRestaurant(), use in setRestaurant() and showReviews()
var storeRef = '';
var name = '';
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
var review = '';

// set up restaurant page (info, photos) and create container for reviews
// !!! FOR LATER: function to clear restaurant page for new search
function setRestaurant() {
	var anchor = document.getElementById('anchor');
	var query = document.getElementById('query-list');
	// set query-list to hidden
	query.setAttribute('class', 'hidden');

	// create skeleton for review section
	var restContent = document.getElementById('restaurant-content');
	var newRestHeader = document.createElement('div');
	newRestHeader.setAttribute('class', 'media');
	newRestHeader.setAttribute('id', 'rest-header');
	restContent.appendChild(newRestHeader);

	var newRestHeading = document.createElement('div');
	var toRestHeader = document.getElementById('rest-header');
	newRestHeading.setAttribute('class', 'media-body');
	newRestHeading.setAttribute('id', 'rest-heading');
	toRestHeader.appendChild(newRestHeading);

	var newRestName = document.createElement('h4');
	var toRestHeading = document.getElementById('rest-heading');
  var restName = document.createTextNode(name);
	newRestName.setAttribute('class', 'media-heading');
	newRestName.setAttribute('id', 'rest-name');
  newRestName.appendChild(restName)
	toRestHeading.appendChild(newRestName);

  // note: hiding tags for now
	//var newTags = document.createElement('p');
	//var newTagText = document.createTextNode(tags);
	//newTags.appendChild(newTagText);
	//toRestHeading.appendChild(newTags);

	var newStreet = document.createElement('p');
	var newStreetText = document.createTextNode(street);
	newStreet.appendChild(newStreetText);
	toRestHeading.appendChild(newStreet);

	var newCity = document.createElement('p');
	var newCityText = document.createTextNode(city);
	newCity.appendChild(newCityText);
	toRestHeading.appendChild(newCity);

	var newTele = document.createElement('p');
	var newTeleText = document.createTextNode(telephone);
	newTele.appendChild(newTeleText);
	toRestHeading.appendChild(newTele);

	var newRestImg = document.createElement('div');
	newRestImg.setAttribute('class', 'media-right');
	newRestImg.setAttribute('id', 'rest-img');
	toRestHeader.appendChild(newRestImg);

	var newLinkOne = document.createElement('a');
	var toRestImg = document.getElementById('rest-img');
	newLinkOne.setAttribute('id', 'img-link-one');
	newLinkOne.setAttribute('href', '#');
	toRestImg.appendChild(newLinkOne);

	var newImgOne = document.createElement('img');
	var toLinkOne = document.getElementById('img-link-one');
	newImgOne.setAttribute('class', 'media-object');
  newImgOne.className += ' review-img';
	newImgOne.setAttribute('id', 'img-one');
	newImgOne.setAttribute('src', picOne);
	newImgOne.setAttribute('alt', 'image');
	toLinkOne.appendChild(newImgOne);

	var newLinkTwo = document.createElement('a');
	newLinkTwo.setAttribute('id', 'img-link-two');
	newLinkTwo.setAttribute('href', '#');
	toRestImg.appendChild(newLinkTwo);

	var newImgTwo = document.createElement('img');
	var toLinkTwo = document.getElementById('img-link-two');
	newImgTwo.setAttribute('class', 'media-object');
	newImgTwo.className += ' review-img';
	newImgTwo.setAttribute('id', 'img-two');
	newImgTwo.setAttribute('src', picTwo);
	newImgTwo.setAttribute('alt', 'image');
	toLinkTwo.appendChild(newImgTwo);

	var newLinkThree = document.createElement('a');
	newLinkThree.setAttribute('id', 'img-link-three');
	newLinkThree.setAttribute('href', '#');
	toRestImg.appendChild(newLinkThree);

	var newImgThree = document.createElement('img');
	var toLinkThree = document.getElementById('img-link-three');
	newImgThree.setAttribute('class', 'media-object');
	newImgThree.className += ' review-img';
	newImgThree.setAttribute('id', 'img-three');
	newImgThree.setAttribute('src', picThree);
	newImgThree.setAttribute('alt', 'image');
	toLinkThree.appendChild(newImgThree);

	var newReviewBox = document.createElement('div');
	newReviewBox.setAttribute('class', 'reviews');
	newReviewBox.setAttribute('id', 'review-box');
	restContent.appendChild(newReviewBox);

	var newHoursBox = document.createElement('div');
	var toReviewBox = document.getElementById('review-box');
	newHoursBox.setAttribute('class', 'col-md-2');
  newHoursBox.className += ' float-right';
	newHoursBox.setAttribute('id', 'hours-box');
	toReviewBox.appendChild(newHoursBox);

	var newMon = document.createElement('p');
	var monText = document.createTextNode(mon);
  var newDay = document.createTextNode('Mon: ')
	var toHoursBox = document.getElementById('hours-box');
	newMon.setAttribute('id', 'monday');
  newMon.appendChild(newDay);
	newMon.appendChild(monText);
	toHoursBox.appendChild(newMon);

	var newTue = document.createElement('p');
	var tueText = document.createTextNode(tue);
  newDay = document.createTextNode('Tue: ')
	newTue.setAttribute('id', 'tuesday');
  newTue.appendChild(newDay);
	newTue.appendChild(tueText);
	toHoursBox.appendChild(newTue);

	var newWed = document.createElement('p');
	var wedText = document.createTextNode(wed);
  newDay = document.createTextNode('Wed: ')
	newWed.setAttribute('id', 'wednesday');
  newWed.appendChild(newDay);
	newWed.appendChild(wedText);
	toHoursBox.appendChild(newWed);

	var newThu = document.createElement('p');
	var thuText = document.createTextNode(thu);
  newDay = document.createTextNode('Thu: ')
	newThu.setAttribute('id', 'thursday');
  newThu.appendChild(newDay);
	newThu.appendChild(thuText);
	toHoursBox.appendChild(newThu);

	var newFri = document.createElement('p');
	var friText = document.createTextNode(fri);
  newDay = document.createTextNode('Fri: ')
	newFri.setAttribute('id', 'friday');
  newFri.appendChild(newDay);
	newFri.appendChild(friText);
	toHoursBox.appendChild(newFri);

	var newSat = document.createElement('p');
	var satText = document.createTextNode(sat);
  newDay = document.createTextNode('Sat: ')
	newSat.setAttribute('id', 'saturday');
  newSat.appendChild(newDay);
	newSat.appendChild(satText);
	toHoursBox.appendChild(newSat);

	var newSun = document.createElement('p');
	var sunText = document.createTextNode(sunday);
  newDay = document.createTextNode('Sun: ')
	newSun.setAttribute('id', 'sunday');
  newSun.appendChild(newDay);
	newSun.appendChild(sunText);
	toHoursBox.appendChild(newSun);

  var newList = document.createElement('div');
  newList.setAttribute('class', 'col-md-10');
  newList.className += ' float-left';
  newList.setAttribute('id', 'review-list');
  toReviewBox.appendChild(newList);
}

// loop function for every entry in object review
// create separate div container for each review
function showReviews(reviewer, date, review) {
	var newRow = document.createElement('div');
	var toList = document.getElementById('review-list');
	newRow.setAttribute('class', 'row');
	newRow.setAttribute('id', 'review-row');
	toList.appendChild(newRow);

	var newReviewer = document.createElement('div');
	var toRow = document.getElementById('review-row');
	newReviewer.setAttribute('class', 'col-md-2');
	newReviewer.setAttribute('id', 'reviewer');
	toRow.appendChild(newReviewer);

	var newName = document.createElement('p');
	var nameText = document.createTextNode(reviewer);
	var toReviewer = document.getElementById('reviewer');
	newName.appendChild(nameText);
	toReviewer.appendChild(newName);

	var newDate = document.createElement('p');
	var dateText = document.createTextNode(date);
	newDate.appendChild(dateText);
	toReviewer.appendChild(newDate);

	var reviewCol = document.createElement('div');
	reviewCol.setAttribute('class', 'col-md-8');
	reviewCol.setAttribute('id', 'review-col');
	toRow.appendChild(reviewCol);

	var reviewBody = document.createElement('p');
	var bodyText = document.createTextNode(review);
	var toReviewCol = document.getElementById('review-col');
	reviewBody.appendChild(bodyText);
	toReviewCol.appendChild(reviewBody);

	// remove IDs for next iteration
	document.getElementById('review-row').removeAttribute('id');
	document.getElementById('reviewer').removeAttribute('id');
	document.getElementById('review-col').removeAttribute('id');
}

// store reference ID to be used in showRestaurant()
function sendRef(reference) {
  storeRef = reference;
}

// match variable storeRef to unique restaurant
// call setRestaurant() and showReviews()
function showRestaurant() {
  clearResults();
	for (var prop in restaurant) {
		// loop through each restaurant
		if (restaurant[prop].reference === storeRef) {
			// match reference from search result
      // pass matching restaurant details to variables
      name = restaurant[prop].name;
      tags = restaurant[prop].tags.join(', ');
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
      setRestaurant();
      // loop through reviews backwards to show most recent reviews first
      for (var i = restaurant[prop].reviews.length - 1; i >= 0; i--) {
        reviewer = restaurant[prop].reviews[i].username;
        date = restaurant[prop].reviews[i].date;
        review = restaurant[prop].reviews[i].review;
        // call showReviews() for each review
        showReviews(reviewer, date, review);
      }
		}
	}
}
