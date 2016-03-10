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
    tags: ['mogi','lunch','mexican','burritos','burrito','tacos','taco','food'],
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
    tags: ['santana','lunch','mexican','burritos','burrito','tacos','taco','food'],
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
    good: 'American, brunch',
    tags: ['jupiter','cafe','brunch','lunch','burritos','burrito','food'],
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
        username: 'Andy M',
        date: '2/2/2016',
				rating: 4,
        review: 'Get the breakfast burrito. Ham, sausage, bacon, three eggs, cheese and a tray of hash browns. It can be your breakfast, lunch and dinner. Seriously',
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
    good: 'American, trendy',
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
        review: 'Fantastic food. Get the chicken and waffles. You won\'t regret it! Crunchy on the outside and fluffy in the middle. Chicken is well seasoned and moist.',
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
        review: 'The decor is nice and homey, slightly pretentious, but not enough to feel intimidated. They bring out all their cuts on a platter to show you the difference in marbling. They even let us take a picture with the platter! John got the Japanese wagyu and I got the lamb chops. Instant regret.',
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

// variables for sorting
var saveQuery = [];
var saveRev = [];
var lowRev = [];
var sorted = [];
var removed = [];

// create search header
function searchHeader(search) {
  var landing = document.getElementById('landing');
  var list = document.getElementById('query-list');
  var panel = document.createElement('div');
  var heading = document.createElement('div');
  var query = document.createElement('i');
  var queryText = document.createTextNode('showing results for: ' + search);
  var body = document.createElement('div');
  var sort = document.createElement('span');
  var alphaAsc = document.createElement('button');
  var ascIcon = document.createElement('i');
  var alphaDesc = document.createElement('button');
  var descIcon = document.createElement('i');
  var high = document.createElement('button');
  var highIcon = document.createElement('i');
  var low = document.createElement('button');
  var lowIcon = document.createElement('i');
  var add = document.createElement('button');
  var addText = document.createTextNode('Add location');

  landing.setAttribute('class', 'hidden');
  // panel
  panel.setAttribute('class', 'panel');
  panel.className += ' panel-default text-center';
  list.appendChild(panel);
  heading.setAttribute('class', 'panel-heading');
  panel.appendChild(heading);
  query.appendChild(queryText);
  heading.appendChild(query);
  body.setAttribute('class', 'panel-body');
  panel.appendChild(body);
  // buttons
  body.appendChild(sort);
  // sort alpha asc
  alphaAsc.setAttribute('class', 'btn');
  alphaAsc.className += ' btn-default spacing';
  alphaAsc.setAttribute('type', 'submit');
  alphaAsc.setAttribute('id', 'alpha-asc');
  alphaAsc.setAttribute('data-sort', 0);
  sort.appendChild(alphaAsc);
  ascIcon.setAttribute('class', 'fa');
  ascIcon.className += ' fa-sort-alpha-asc fa-2x';
  alphaAsc.appendChild(ascIcon);
  // sort alpha desc
  alphaDesc.setAttribute('class', 'btn');
  alphaDesc.className += ' btn-default spacing';
  alphaDesc.setAttribute('type', 'submit');
  alphaDesc.setAttribute('id', 'alpha-desc');
  alphaDesc.setAttribute('data-sort', 0);
  sort.appendChild(alphaDesc);
  descIcon.setAttribute('class', 'fa');
  descIcon.className += ' fa-sort-alpha-desc fa-2x';
  alphaDesc.appendChild(descIcon);
  // sort high
  high.setAttribute('class', 'btn');
  high.className += ' btn-default spacing';
  high.setAttribute('type', 'submit');
  high.setAttribute('id', 'high');
  high.setAttribute('data-sort', 0);
  sort.appendChild(high);
  highIcon.setAttribute('class', 'fa');
  highIcon.className += ' fa-sort-amount-desc fa-2x';
  high.appendChild(highIcon);
  // sort low
  low.setAttribute('class', 'btn');
  low.className += ' btn-default spacing';
  low.setAttribute('type', 'submit');
  low.setAttribute('id', 'low');
  low.setAttribute('data-sort', 0);
  sort.appendChild(low);
  lowIcon.setAttribute('class', 'fa');
  lowIcon.className += ' fa-sort-amount-asc fa-2x';
  low.appendChild(lowIcon);
  // add location button
  add.setAttribute('class', 'btn');
  add.className += ' btn-default spacing';
  add.setAttribute('type', 'submit');
  add.setAttribute('id', 'add-location');
  add.appendChild(addText);
  sort.appendChild(add);
  // event listeners
  alphaAsc.addEventListener('click', arrangeAZ);
  alphaDesc.addEventListener('click', arrangeZA);
  high.addEventListener('click', arrangeHigh);
  low.addEventListener('click', arrangeLow);
  add.addEventListener('click', addForm);
}

// convert search input to array
function intoArray(string) {
	return string.toString().split(' ');
}

// modified from findStars() to sort queries
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
  var list = document.getElementById('query-list');
  var panel = document.createElement('div');
  var body = document.createElement('div');
  var media = document.createElement('div');
  var imageDiv = document.createElement('div');
  var imageLink = document.createElement('a');
  var mediaImage = document.createElement('img');
  var content = document.createElement('div');
  var header = document.createElement('h4');
	var headerText = document.createTextNode(name);
  var goodFor = document.createElement('p');
  var goodText = document.createTextNode(good);
  var br = document.createElement('br');
  var revCount = document.createTextNode('Reviews: ' + count);
  var description = document.createElement('p');
	var descText = document.createTextNode(desc);
  // panel
	panel.setAttribute('class', 'panel');
  panel.className += ' panel-default';
	list.appendChild(panel);
	body.setAttribute('class', 'panel-body');
	panel.appendChild(body);
	media.setAttribute('class', 'media');
	body.appendChild(media);
  // image
	imageDiv.setAttribute('class', 'media-left');
	media.appendChild(imageDiv);
	imageLink.setAttribute('href', '#');
	imageDiv.appendChild(imageLink);
  mediaImage.setAttribute('class', 'media-object');
	mediaImage.setAttribute('src', image);
	mediaImage.setAttribute('alt', 'image');
	imageLink.appendChild(mediaImage);
  // content
	content.setAttribute('class', 'media-body');
	content.setAttribute('id', 'stars-here');
	media.appendChild(content);
	header.setAttribute('class', 'media-header');
  header.className += ' inline';
	header.appendChild(headerText);
	content.appendChild(header);
  // convert and display ratings to stars
  findStars(reference, 'stars-here');
  // content text
  goodFor.appendChild(goodText);
  goodFor.appendChild(br);
  goodFor.appendChild(revCount);
  content.appendChild(goodFor);
	description.setAttribute('class', 'description');
	description.appendChild(descText);
	content.appendChild(description);
  // click image to call initRestaurant() for this restaurant
  imageLink.addEventListener('click', function(e) {
    sendRef(reference);
    initRestaurant();
  })
  // click header to call initRestaurant() for this restaurant
  header.addEventListener('click', function(e) {
    sendRef(reference);
    initRestaurant();
  })
	// remove ID for next iteration
  content.removeAttribute('id');
}

// splice out lowest rating into sorted array
function minRating(array) {
  var cut = 0;
  var lowest = 6;
  var alpha = 'zzz'
  for (var i = 0; i < array.length; i++) {
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

// loop splice function until array length = 0
// for sorting reviews
function revLow(array) {
  sorted = [];
  removed = [];
  while (array.length > 0) {
    minRating(array);
  }
  lowRev = sorted;
}

// sort by newest reviews
function reviewNew() {
  clearReviews();
  reviewSorter();
  // loop saved array through populate function
  for (var i = 0; i < saveRev.length; i++) {
    reviewer = saveRev[i][0];
    date = saveRev[i][1];
    rate = saveRev[i][2];
    review = saveRev[i][3];
    useful = saveRev[i][4];
    funny = saveRev[i][5];
    cool = saveRev[i][6];
    thisReview = saveRev[i][7];
    showReviews(reviewer, date, review, thisReview);
  }
  // indicate sort option
  document.getElementById('date-desc').setAttribute('data-sort', 1);
  document.getElementById('date-asc').setAttribute('data-sort', 0);
  document.getElementById('rev-high').setAttribute('data-sort', 0);
  document.getElementById('rev-low').setAttribute('data-sort', 0);
}

// sort by oldest reviews
function reviewOld() {
  clearReviews();
  reviewSorter();
  // loop saved array through populate function
  for (var i = saveRev.length - 1; i > -1; i--) {
    reviewer = saveRev[i][0];
    date = saveRev[i][1];
    rate = saveRev[i][2];
    review = saveRev[i][3];
    useful = saveRev[i][4];
    funny = saveRev[i][5];
    cool = saveRev[i][6];
    thisReview = saveRev[i][7];
    showReviews(reviewer, date, review, thisReview);
  }
  // indicate sort option
  document.getElementById('date-desc').setAttribute('data-sort', 0);
  document.getElementById('date-asc').setAttribute('data-sort', 1);
  document.getElementById('rev-high').setAttribute('data-sort', 0);
  document.getElementById('rev-low').setAttribute('data-sort', 0);
}

// sort by highest rated reviews
function reviewHigh() {
  clearReviews();
  reviewSorter();
  // loop saved array through populate function
  for (var i = lowRev.length - 1; i > -1; i--) {
    reviewer = lowRev[i][0];
    date = lowRev[i][1];
    rate = lowRev[i][2];
    review = lowRev[i][3];
    useful = lowRev[i][4];
    funny = lowRev[i][5];
    cool = lowRev[i][6];
    thisReview = lowRev[i][7];
    showReviews(reviewer, date, review, thisReview);
  }
  // indicate sort option
  document.getElementById('date-desc').setAttribute('data-sort', 0);
  document.getElementById('date-asc').setAttribute('data-sort', 0);
  document.getElementById('rev-high').setAttribute('data-sort', 1);
  document.getElementById('rev-low').setAttribute('data-sort', 0);
}

// sort by lowest rated reviews
function reviewLow() {
  clearReviews();
  reviewSorter();
  // loop saved array through populate function
  for (var i = 0; i < lowRev.length; i++) {
    reviewer = lowRev[i][0];
    date = lowRev[i][1];
    rate = lowRev[i][2];
    review = lowRev[i][3];
    useful = lowRev[i][4];
    funny = lowRev[i][5];
    cool = lowRev[i][6];
    thisReview = lowRev[i][7];
    showReviews(reviewer, date, review, thisReview);
  }
  // indicate sort option
  document.getElementById('date-desc').setAttribute('data-sort', 0);
  document.getElementById('date-asc').setAttribute('data-sort', 0);
  document.getElementById('rev-high').setAttribute('data-sort', 0);
  document.getElementById('rev-low').setAttribute('data-sort', 1);
}

// clear current results and/or restaurant content
function clearPage() {
	var anchor = document.getElementById('anchor');
	var list = document.getElementById('query-list');
  var content = document.getElementById('restaurant-content');
  var newContent = document.createElement('div');
	var newList = document.createElement('div');
	anchor.removeChild(list);
  anchor.removeChild(content);
	newList.setAttribute('class', 'col-md-12');
	newList.setAttribute('id', 'query-list');
	anchor.appendChild(newList);
  newContent.setAttribute('class', 'col-md-12');
  newContent.setAttribute('id', 'restaurant-content');
  anchor.appendChild(newContent);
}

// clear review section
function clearReviews() {
  // remove list of reviews
  var content = document.getElementById('restaurant-content');
  var list = document.getElementById('review-list');
  var row = document.getElementById('write-row');
  var newList = document.createElement('div');
  if (row) { content.removeChild(row) }
  content.removeChild(list);
  newList.setAttribute('class', 'col-md-9');
  newList.className += ' col-xs-8 float-left';
  newList.setAttribute('id', 'review-list');
  content.appendChild(newList);
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
  var row = document.createElement('div');
	var restaurant = document.getElementById('restaurant-content');
  var panel = document.createElement('div');
  var body = document.createElement('div');
  var header = document.createElement('div');
  var heading = document.createElement('h4');
  var headingText = document.createTextNode(name);
  var tag = document.createElement('p');
  var tagLabel = document.createTextNode('tags: ');
  var tagValues = document.createTextNode(good);
  var addy = document.createElement('p');
	var streetText = document.createTextNode(street);
  var addyBr = document.createElement('br');
  var cityText = document.createTextNode(city);
  var teleBr = document.createElement('br');
  var teleText = document.createTextNode(telephone);
  var button = document.createElement('button');
  var buttonText = document.createTextNode('Write a Review');
  var images = document.createElement('div');
  var imageOne = document.createElement('img');
  var imageTwo = document.createElement('img');
  var imageThree = document.createElement('img');
  var hours = document.createElement('div');
  var hoursPanel = document.createElement('div');
  var hoursBody = document.createElement('div');
  var monday = document.createElement('p');
  var monLabel = document.createTextNode('Mon: ');
  var monValue = document.createTextNode(mon);
  var tuesday = document.createElement('p');
  var tueLabel = document.createTextNode('Tue: ');
  var tueValue = document.createTextNode(tue);
  var wednesday = document.createElement('p');
  var wedLabel = document.createTextNode('Wed: ');
  var wedText = document.createTextNode(wed);
  var thursday = document.createElement('p');
  var thuLabel = document.createTextNode('Thu: ');
  var thuText = document.createTextNode(thu);
  var friday = document.createElement('p');
  var friLabel = document.createTextNode('Fri: ');
  var friText = document.createTextNode(fri);
  var saturday = document.createElement('p');
  var satLabel = document.createTextNode('Sat: ');
  var satText = document.createTextNode(sat);
  var sund = document.createElement('p');
  var sunLabel = document.createTextNode('Sun: ');
  var sunText = document.createTextNode(sunday);
  var reviews = document.createElement('div');
	// set query-list to hidden
	query.setAttribute('class', 'hidden');
	row.setAttribute('class', 'row');
	restaurant.appendChild(row);
  // panel
	panel.setAttribute('class', 'panel');
  panel.className += ' panel-default';
	row.appendChild(panel);
	body.setAttribute('class', 'panel-body');
	panel.appendChild(body);
  // restaurant info
	header.setAttribute('class', 'col-md-3');
	header.setAttribute('id', 'stars-here');
	body.appendChild(header);
	heading.setAttribute('class', 'media-heading');
  heading.appendChild(headingText)
	header.appendChild(heading);
  findStars (storeRef, 'stars-here');
	tag.appendChild(tagLabel);
	tag.appendChild(tagValues);
	header.appendChild(tag);
	addy.appendChild(streetText);
  addy.appendChild(addyBr);
	addy.appendChild(cityText);
  addy.appendChild(teleBr);
	addy.appendChild(teleText);
  header.appendChild(addy);
  // write review button
  button.setAttribute('type', 'submit');
  button.setAttribute('class', 'btn');
  button.className += ' btn-default';
  button.setAttribute('id', 'write-review');
  button.appendChild(buttonText);
  header.appendChild(button);
  // restaurant images
	images.setAttribute('class', 'col-md-9');
	body.appendChild(images);
	imageOne.setAttribute('class', 'img-thumbnail');
  imageOne.className += ' review-img float-right';
	imageOne.setAttribute('src', picThree);
	imageOne.setAttribute('alt', 'image');
	images.appendChild(imageOne);
  imageTwo.setAttribute('class', 'img-thumbnail');
  imageTwo.className += ' review-img float-right';
  imageTwo.setAttribute('src', picTwo);
  imageTwo.setAttribute('alt', 'image');
  images.appendChild(imageTwo);
  imageThree.setAttribute('class', 'img-thumbnail');
  imageThree.className += ' review-img float-right';
  imageThree.setAttribute('src', picOne);
  imageThree.setAttribute('alt', 'image');
  images.appendChild(imageThree);
  // hours
	hours.setAttribute('class', 'col-md-3');
  hours.className += ' col-xs-4 float-right';
	hours.setAttribute('id', 'hours-box');
	restaurant.appendChild(hours);
	hoursPanel.setAttribute('class', 'panel');
  hoursPanel.className += ' panel-default';
	hours.appendChild(hoursPanel);
	hoursBody.setAttribute('class', 'panel-body');
	hoursPanel.appendChild(hoursBody);
	monday.appendChild(monLabel);
  monday.appendChild(monValue);
	hoursBody.appendChild(monday);
  tuesday.appendChild(tueLabel);
	tuesday.appendChild(tueValue);
	hoursBody.appendChild(tuesday);
  wednesday.appendChild(wedLabel);
	wednesday.appendChild(wedText);
	hoursBody.appendChild(wednesday);
  thursday.appendChild(thuLabel);
  thursday.appendChild(thuText);
  hoursBody.appendChild(thursday);
  friday.appendChild(friLabel);
  friday.appendChild(friText);
  hoursBody.appendChild(friday);
  saturday.appendChild(satLabel);
  saturday.appendChild(satText);
  hoursBody.appendChild(saturday);
  sund.appendChild(sunLabel);
  sund.appendChild(sunText);
  hoursBody.appendChild(sund);
  // reviews
  reviews.setAttribute('class', 'col-md-9');
  reviews.className += ' col-xs-8 float-left';
  reviews.setAttribute('id', 'review-list');
  restaurant.appendChild(reviews);

  header.removeAttribute('id');
  button.addEventListener('click', writeReview);
}

// generate review sort bar
function reviewSorter() {
  // row
  var sortRow = document.createElement('div');
  var reviews = document.getElementById('review-list');
  var panel = document.createElement('div');
  var body = document.createElement('div');
  var buttons = document.createElement('span');
  var newest = document.createElement('button');
  var newIcon = document.createElement('i');
  var newText = document.createTextNode(' date');
  var oldest = document.createElement('button');
  var oldIcon = document.createElement('i');
  var oldText = document.createTextNode(' date');
  var high = document.createElement('button');
  var highIcon = document.createElement('i');
  var low = document.createElement('button');
  var lowIcon = document.createElement('i');

  sortRow.setAttribute('class', 'row');
  reviews.appendChild(sortRow);
  // panel
  panel.setAttribute('class', 'panel');
  panel.className += ' panel-default text-center';
  sortRow.appendChild(panel);
  body.setAttribute('class', 'panel-body');
  panel.appendChild(body);
  // sort buttons
  body.appendChild(buttons);
  // sort date desc
  newest.setAttribute('class', 'btn');
  newest.className += ' btn-default spacing';
  newest.setAttribute('type', 'submit');
  newest.setAttribute('id', 'date-desc');
  newest.setAttribute('data-review', 0);
  buttons.appendChild(newest);
  newIcon.setAttribute('class', 'fa');
  newIcon.className += ' fa-arrow-circle-down fa-2x';
  newIcon.appendChild(newText);
  newest.appendChild(newIcon);
  // sort date asc
  oldest.setAttribute('class', 'btn');
  oldest.className += ' btn-default spacing';
  oldest.setAttribute('type', 'submit');
  oldest.setAttribute('id', 'date-asc');
  oldest.setAttribute('data-review', 0);
  buttons.appendChild(oldest);
  oldIcon.setAttribute('class', 'fa');
  oldIcon.className += ' fa-arrow-circle-up fa-2x';
  oldIcon.appendChild(oldText);
  oldest.appendChild(oldIcon);
  // sort high
  high.setAttribute('class', 'btn');
  high.className += ' btn-default spacing';
  high.setAttribute('type', 'submit');
  high.setAttribute('id', 'rev-high');
  high.setAttribute('data-review', 0);
  buttons.appendChild(high);
  highIcon.setAttribute('class', 'fa');
  highIcon.className += ' fa-sort-amount-desc fa-2x';
  high.appendChild(highIcon);
  // sort low
  low.setAttribute('class', 'btn');
  low.className += ' btn-default spacing';
  low.setAttribute('type', 'submit');
  low.setAttribute('id', 'rev-low');
  low.setAttribute('data-review', 0);
  buttons.appendChild(low);
  lowIcon.setAttribute('class', 'fa');
  lowIcon.className += ' fa-sort-amount-asc fa-2x';
  low.appendChild(lowIcon);

  newest.addEventListener('click', reviewNew);
  oldest.addEventListener('click', reviewOld);
  high.addEventListener('click', reviewHigh);
  low.addEventListener('click', reviewLow);
}

// loop function for every entry in object review
// create separate div container for each review
function showReviews(reviewer, date, review, ref) {
	var reviewRow = document.createElement('div');
	var reviews = document.getElementById('review-list');
  var panel = document.createElement('div');
  var body = document.createElement('div');
  var user = document.createElement('p');
	var userName = document.createTextNode(reviewer);
  var nameBreak = document.createElement('br');
  var userDate = document.createTextNode(date);
  var userReview = document.createElement('p');
  var reviewText = document.createTextNode(review);
  var usefulButton = document.createElement('button');
  var usefulText = document.createTextNode('useful');
  var funnyButton = document.createElement('button');
  var funnyText = document.createTextNode('funny');
  var coolButton = document.createElement('button');
  var coolText = document.createTextNode('cool');

	reviewRow.setAttribute('class', 'row');
	reviews.appendChild(reviewRow);
	panel.setAttribute('class', 'panel');
  panel.className += ' panel-default';
	reviewRow.appendChild(panel);
	body.setAttribute('class', 'panel-body');
	body.setAttribute('id', 'stars-here');
	panel.appendChild(body);
  calcStars(rate, 'stars-here');
	user.appendChild(userName);
  user.appendChild(nameBreak);
	user.appendChild(userDate);
  body.appendChild(user);
	userReview.appendChild(reviewText);
  body.appendChild(userReview);
  // add useful badge
  usefulButton.setAttribute('class', 'btn');
  usefulButton.className += ' btn-default useful-badge inline';
  usefulButton.setAttribute('type', 'button');
  usefulButton.setAttribute('data-useful', ref.useful);
  usefulButton.setAttribute('data-clicked', ref.plusUseful);
  usefulButton.appendChild(usefulText);
  body.appendChild(usefulButton);
  // add funny badge
  funnyButton.setAttribute('class', 'btn');
  funnyButton.className += ' btn-default funny-badge inline';
  funnyButton.setAttribute('type', 'button');
  funnyButton.setAttribute('data-funny', ref.funny);
  funnyButton.setAttribute('data-clicked', ref.plusFunny);
  funnyButton.appendChild(funnyText);
  body.appendChild(funnyButton);
  // add cool badge
  coolButton.setAttribute('class', 'btn');
  coolButton.className += ' btn-default cool-badge inline';
  coolButton.setAttribute('type', 'button');
  coolButton.setAttribute('data-cool', ref.cool);
  coolButton.setAttribute('data-clicked', ref.plusCool);
  coolButton.appendChild(coolText);
  body.appendChild(coolButton);
  // add useful badge event listener
  usefulButton.addEventListener('click', function(e) {
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
  // add funny badge event listener
  funnyButton.addEventListener('click', function(e) {
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
  // add cool badge event listener
  coolButton.addEventListener('click', function(e) {
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
	body.removeAttribute('id');
}

// store reference ID to be used in initRestaurant()
function sendRef(reference) {
  storeRef = reference;
}

// match variable storeRef to unique restaurant
// call showRestaurant() and showReviews()
function initRestaurant() {
  clearPage();
  saveRev = [];
  lowRev = [];
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
      reviewSorter();
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
        // push into saveRev for sorting manipulation
        saveRev.push([reviewer, date, rate, review, useful, funny, cool, thisReview]);
        lowRev.push([reviewer, date, rate, review, useful, funny, cool, thisReview]);
        // call showReviews() for each review
        showReviews(reviewer, date, review, thisReview);
      }
		}
	}
  revLow(lowRev);
  document.getElementById('date-desc').setAttribute('data-review', 1);
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
  document.getElementById('hours-box').className += " hidden";
  var content = document.getElementById('restaurant-content');
  var row = document.createElement('div');
  var reviewCol = document.createElement('div');
  var panel = document.createElement('div');
  var body = document.createElement('div');
  var form = document.createElement('form');
  var userDiv = document.createElement('div');
  var nameLabel = document.createElement('label');
  var nameText = document.createTextNode('Name');
  var nameInput = document.createElement('input');
  var ratingLabel = document.createElement('label');
  var ratingText = document.createTextNode('Rating');
  var ratingBreak = document.createElement('br');
  var starSpan = document.createElement('span');
  var starOne = document.createElement('i');
  var starTwo = document.createElement('i');
  var starThree = document.createElement('i');
  var starFour = document.createElement('i');
  var starFive = document.createElement('i');
  var starBreak = document.createElement('br');
  var reviewDiv = document.createElement('div');
  var reviewLabel = document.createElement('label');
  var reviewText = document.createTextNode('Review');
  var reviewInput = document.createElement('textarea');
  var button = document.createElement('button');
  var buttonText = document.createTextNode('Submit');
  var imageCol = document.createElement('div');
  var image = document.createElement('img');
  // row
  row.setAttribute('class', 'row');
  row.setAttribute('id', 'write-row');
  content.appendChild(row);
  // form column
  reviewCol.setAttribute('class', 'col-md-6');
  row.appendChild(reviewCol);
  // form panel
  panel.setAttribute('class', 'panel');
  panel.className += ' panel-default';
  reviewCol.appendChild(panel);
  body.setAttribute('class', 'panel-body');
  panel.appendChild(body);
  // form
  form.setAttribute('onSubmit', 'return false');
  body.appendChild(form);
  userDiv.setAttribute('class', 'form-group');
  form.appendChild(userDiv);
  nameLabel.setAttribute('for', 'username');
  nameLabel.appendChild(nameText);
  userDiv.appendChild(nameLabel);
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('class', 'form-control');
  nameInput.setAttribute('id', 'username');
  userDiv.appendChild(nameInput);
  ratingLabel.setAttribute('for', 'rating');
  ratingLabel.appendChild(ratingText);
  form.appendChild(ratingLabel);
  form.appendChild(ratingBreak);
  // add star icons
  starSpan.setAttribute('id', 'rating');
  form.appendChild(starSpan);
  starOne.setAttribute('class', 'fa');
  starOne.className += ' fa-star-o fa-3x';
  starOne.setAttribute('data-count', 1);
  starSpan.appendChild(starOne);
  starTwo.setAttribute('class', 'fa');
  starTwo.className += ' fa-star-o fa-3x';
  starTwo.setAttribute('data-count', 2);
  starSpan.appendChild(starTwo);
  starThree.setAttribute('class', 'fa');
  starThree.className += ' fa-star-o fa-3x';
  starThree.setAttribute('data-count', 3);
  starSpan.appendChild(starThree);
  starFour.setAttribute('class', 'fa');
  starFour.className += ' fa-star-o fa-3x';
  starFour.setAttribute('data-count', 4);
  starSpan.appendChild(starFour);
  starFive.setAttribute('class', 'fa');
  starFive.className += ' fa-star-o fa-3x';
  starFive.setAttribute('data-count', 5);
  starSpan.appendChild(starFive);
  form.appendChild(starBreak);

  stars = document.querySelectorAll('[data-count]');
  shiftStar();
  // continue form
  reviewDiv.setAttribute('class', 'form-group');
  form.appendChild(reviewDiv);
  reviewLabel.setAttribute('for', 'review');
  reviewLabel.appendChild(reviewText);
  reviewDiv.appendChild(reviewLabel);
  reviewInput.setAttribute('class', 'form-control');
  reviewInput.setAttribute('id', 'review');
  reviewInput.setAttribute('rows', '6');
  reviewDiv.appendChild(reviewInput);
  button.setAttribute('type', 'submit');
  button.setAttribute('class', 'btn');
  button.className += ' btn-default';
  button.setAttribute('id' ,'submit-button');
  button.appendChild(buttonText);
  form.appendChild(button);
  // image column
  imageCol.setAttribute('class', 'col-md-6');
  row.appendChild(imageCol);
  image.setAttribute('src', 'images/write.jpg');
  image.setAttribute('class', 'img-responsive');
  image.setAttribute('alt', 'image');
  imageCol.appendChild(image);

  // event listener to push review
  button.addEventListener('click', submitReview);
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
  if (newReview.review === '') { newReview.review = 'I forgot to write a review...' }
  if (newReview.username === '') { newReview.username = 'Anonymous' }
  if (newReview.rating === 0) { newReview.rating = 1 }
  if (starsClicked === false) { newReview.rating = 1 }
  // match reference (assigned when clicking on restaurant)
  // push new review into targeted restaurant's review array
  for (var prop in restaurant) {
    if (restaurant[prop].reference === storeRef) {
      restaurant[prop].reviews.push(newReview);
    }
  }
  document.getElementById('hours-box').className -= " hidden";
  updateReviews();
}

// add star to span id = 'stars'
function giveStar(number) {
  for (var i = 0; i < number; i++){
    var newStar = document.createElement('i');
    var parent = document.getElementById('stars');
    newStar.setAttribute('class', 'fa');
    newStar.className += ' fa-star fa-2x';
    parent.appendChild(newStar);
  }
}

// add half star to span id = 'stars'
function giveHalfStar() {
  var newStar = document.createElement('i');
  var parent = document.getElementById('stars');
  newStar.setAttribute('class', 'fa');
  newStar.className += ' fa-star-half-o fa-2x';
  parent.appendChild(newStar);
}

// add empty star to span id = 'stars'
function giveEmptyStar(number) {
  for (var i = 0; i < number; i++){
    var newStar = document.createElement('i');
    var parent = document.getElementById('stars');
    newStar.setAttribute('class', 'fa');
    newStar.className += ' fa-star-o fa-2x';
    parent.appendChild(newStar);
  }
}

// create star html components
function createStars(stars, half, toId) {
  var count = 5;
  var emptyStar = '';

  // 5 stars total; empty star = count - (stars + half)
  var group = document.createElement('span');
  var parent = document.getElementById(toId);
  group.setAttribute('id', 'stars');
  parent.appendChild(group);

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
  group.removeAttribute('id');
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
  } else if (rating < 1.25) {
    times = 1;
    half = false;
  } else {
    // give new restaurants 5 empty stars
    times = 0;
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
  var row = document.createElement('div');
	var list = document.getElementById('query-list');
  var formCol = document.createElement('div');
  var form = document.createElement('form');
  var nameDiv = document.createElement('div');
  var nameLabel = document.createElement('label');
  var nameText = document.createTextNode('Restaurant Name');
  var nameInput = document.createElement('input');
  var streetDiv = document.createElement('div');
  var streetLabel = document.createElement('label');
  var streetText = document.createTextNode('Address');
  var streetInput = document.createElement('input');
  var cityDiv = document.createElement('div');
  var cityLabel = document.createElement('label');
  var cityText = document.createTextNode('City');
  var cityInput = document.createElement('input');
  var stateDiv = document.createElement('div');
  var stateLabel = document.createElement('label');
  var stateText = document.createTextNode('State');
  var stateInput = document.createElement('input');
  var zipDiv = document.createElement('div');
  var zipLabel = document.createElement('label');
  var zipText = document.createTextNode('Zip Code');
  var zipInput = document.createElement('input');
  var phoneDiv = document.createElement('div');
  var phoneLabel = document.createElement('label');
  var phoneText = document.createTextNode('Phone Number');
  var phoneInput = document.createElement('input');
  var cateDiv = document.createElement('div');
  var cateLabel = document.createElement('label');
  var cateText = document.createTextNode('Categories');
  var cateHelp = document.createElement('p');
  var helpText = document.createTextNode('Select up to 3 categories. The more specific the better.');
  var cateInput = document.createElement('input');
  var descDiv = document.createElement('div');
  var descLabel = document.createElement('label');
  var descText = document.createTextNode('Tell us about this restaurant');
  var descInput = document.createElement('textarea');
  var buttonDiv = document.createElement('div');
  var button = document.createElement('button');
  var buttonText = document.createTextNode('Add location');
  var imageCol = document.createElement('div');
  var image = document.createElement('img');
	row.setAttribute('class', 'row');
	list.appendChild(row);
	formCol.setAttribute('class', 'col-md-6');
	row.appendChild(formCol);
  form.setAttribute('onSubmit', 'return false');
	formCol.appendChild(form);
  // restaurant name
	nameDiv.setAttribute('class', 'form-group');
	form.appendChild(nameDiv);
	nameLabel.setAttribute('for', 'add-name');
  nameLabel.appendChild(nameText);
	nameDiv.appendChild(nameLabel);
	nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('class', 'form-control');
  nameInput.setAttribute('id', 'add-name');
	nameInput.setAttribute('placeholder', 'Hipster\'s Delight');
	nameDiv.appendChild(nameInput);
  // address
	streetDiv.setAttribute('class', 'form-group');
	form.appendChild(streetDiv);
	streetLabel.setAttribute('for', 'add-street');
  streetLabel.appendChild(streetText);
	streetDiv.appendChild(streetLabel);
	streetInput.setAttribute('type', 'text');
  streetInput.setAttribute('class', 'form-control');
  streetInput.setAttribute('id', 'add-street');
	streetInput.setAttribute('placeholder', '24 Main Street');
	streetDiv.appendChild(streetInput);
  // city
	cityDiv.setAttribute('class', 'form-group');
	form.appendChild(cityDiv);
	cityLabel.setAttribute('for', 'add-city');
  cityLabel.appendChild(cityText);
	cityDiv.appendChild(cityLabel);
	cityInput.setAttribute('type', 'text');
  cityInput.setAttribute('class', 'form-control');
  cityInput.setAttribute('id', 'add-city');
	cityInput.setAttribute('placeholder', 'Tustin');
	cityDiv.appendChild(cityInput);
  // state
	stateDiv.setAttribute('class', 'form-group');
	form.appendChild(stateDiv);
	stateLabel.setAttribute('for', 'add-state');
  stateLabel.appendChild(stateText);
	stateDiv.appendChild(stateLabel);
	stateInput.setAttribute('type', 'text');
  stateInput.setAttribute('class', 'form-control');
  stateInput.setAttribute('id', 'add-state');
	stateInput.setAttribute('placeholder', 'CA');
	stateDiv.appendChild(stateInput);
  // zip code
	zipDiv.setAttribute('class', 'form-group');
	form.appendChild(zipDiv);
	zipLabel.setAttribute('for', 'add-zip');
  zipLabel.appendChild(zipText);
	zipDiv.appendChild(zipLabel);
	zipInput.setAttribute('type', 'text');
  zipInput.setAttribute('class', 'form-control');
  zipInput.setAttribute('id', 'add-zip');
	zipInput.setAttribute('placeholder', '92780');
	zipDiv.appendChild(zipInput);
  // phone number
	phoneDiv.setAttribute('class', 'form-group');
	form.appendChild(phoneDiv);
	phoneLabel.setAttribute('for', 'add-tele');
  phoneLabel.appendChild(phoneText);
	phoneDiv.appendChild(phoneLabel);
	phoneInput.setAttribute('type', 'text');
  phoneInput.setAttribute('class', 'form-control');
  phoneInput.setAttribute('id', 'add-tele');
	phoneInput.setAttribute('placeholder', '714-144-1441');
	phoneDiv.appendChild(phoneInput);
  // categories
	cateDiv.setAttribute('class', 'form-group');
	form.appendChild(cateDiv);
	cateLabel.setAttribute('for', 'add-tags');
  cateLabel.appendChild(cateText);
	cateDiv.appendChild(cateLabel);
  cateHelp.setAttribute('class', 'help-block');
  cateHelp.appendChild(helpText);
  cateDiv.appendChild(cateHelp);
	cateInput.setAttribute('type', 'text');
  cateInput.setAttribute('class', 'form-control');
  cateInput.setAttribute('id', 'add-tags');
	cateInput.setAttribute('placeholder', 'Japanese, sushi');
	cateDiv.appendChild(cateInput);
  // description
	descDiv.setAttribute('class', 'form-group');
	form.appendChild(descDiv);
	descLabel.setAttribute('for', 'add-desc');
  descLabel.appendChild(descText);
	descDiv.appendChild(descLabel);
  descInput.setAttribute('class', 'form-control');
  descInput.setAttribute('id', 'add-desc');
	descInput.setAttribute('rows', '10');
	descDiv.appendChild(descInput);
  // add location button
	buttonDiv.setAttribute('class', 'form-group');
	form.appendChild(buttonDiv);
  button.setAttribute('class', 'btn');
  button.className += ' btn-default';
  button.setAttribute('id', 'add-button');
	button.setAttribute('type', 'submit');
  button.appendChild(buttonText);
	buttonDiv.appendChild(button);
  // image
  imageCol.setAttribute('class', 'col-md-6');
  row.appendChild(imageCol);
  image.setAttribute('src', 'images/add.jpg');
  image.setAttribute('class', 'img-responsive');
  image.setAttribute('alt', 'image');
  imageCol.appendChild(image);

  button.addEventListener('click', addLocation);
}

// display location added message
function locationAdded(name) {
  clearPage();
  // clear page and create panel
	var list = document.getElementById('query-list');
  var panel = document.createElement('div');
  var body = document.createElement('div');
  var header = document.createElement('h3');
  var headerText = document.createTextNode(name + ' has been added!');
  var image = document.createElement('img');
  // panel
	panel.setAttribute('class', 'panel');
  panel.className += ' panel-default';
	list.appendChild(panel);
	body.setAttribute('class', 'panel-body');
	panel.appendChild(body);
  header.appendChild(headerText)
	body.appendChild(header);
  // image
	image.setAttribute('src', 'images/submitted.jpg');
	image.setAttribute('class', 'img-responsive');
	image.setAttribute('alt', 'image');
	list.appendChild(image);
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
  var good = threeTags(tagArray);
  var addName = intoArray(name.toLowerCase());
  tagArray = tagArray.concat(addName);
  // pushing default tag 'food' into new restaurant
  // removing empty tag if no tags were entered
  if (tagArray.indexOf('food') === -1) { tagArray.push('food') }
  if (tagArray[0] === '') { tagArray.splice(tagArray[0], 1) }

  if (name === '') { name = 'Untitled' }
  if (reference === '') { reference = 'untitled' }
  if (number === '') { number = 'Phone Number' }
  if (street === '') { street = 'Street' }
  if (city === '') { city = 'City' }
  if (state === '') { state = 'State' }
  if (zip === '') { zip = 'Zip' }
  if (desc === '') { desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' }

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
    good: good,
    tags: tagArray,
    images: ['images/default-one.jpg', 'images/default-two.jpg', 'images/default-three.jpg'],
    description: desc,
    reviews: []
  }
  // create location added message
  locationAdded(name);
}

var showScroll = false;
// add back to top icon if user has scrolled away from search bar
function onScroll() {
  var scroll = document.getElementById('scroll')
  var currentY = window.scrollY;
  if (currentY > 60 && showScroll === false) {
    showScroll = true;
    scroll.removeAttribute('class');
  } else if (currentY < 60 && showScroll === true) {
    showScroll = false;
    scroll.setAttribute('class', 'hidden');
  }
}

window.document.addEventListener('scroll', onScroll);
