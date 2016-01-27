
String.prototype.format = function () {
	var args = arguments;
	return this.replace(/{(\d+)}/g, function (match, number) {
		return typeof args[number] != 'undefined'
		  ? args[number]
		  : match
		;
	});
};

var Staff = [
	{ Name: "Dave Moore", Image: -350, Title: "President", Group: "leadership" },
	{ Name: "Adam Oakley", Image: 0, Title: "Director of Operations", Group: "leadership" },
	{ Name: "Fumi Kelleher", Image: -450, Title: "Office Manager", Group: "leadership" },
// 	{ Name: "Heidi Moore", Image: -3068, Title: "Finance/Accounting", Group: "leadership" },

	{ Name: "Adam Davis", Image: -50, Title: "Developer", Group: "development" },
    { Name: "Alex Behlen", Image: -2000, Title: "Developer", Group: "development" },
    { Name: "Alex Bolinder", Image: -2350, Title: "Developer", Group: "development" },
	{ Name: "Alex Weitzer", Image: -1950, Title: "Developer", Group: "development" },
    { Name: "Andrew Sunada", Image: -2700, Title: "Front-End Developer", Group: "development" },
    { Name: "Bill Salisbury", Image: -150, Title: "Quality Assurance", Group: "development" },
	{ Name: "Bobby Driggs", Image: -200, Title: "Developer", Group: "development" },
    { Name: "Caitlin Breen", Image: -2250, Title: "Quality Assurance", Group: "development" },
    { Name: "Carlos Alvarez", Image: -2400, Title: "Developer", Group: "development" },
	{ Name: "Curtis Ruecker", Image: -1900, Title: "Developer", Group: "development" },
    { Name: "Hilary Carson", Image: -2450, Title: "Jr. Developer", Group: "development" },
	{ Name: "Jack Olsen", Image: -550, Title: "Team Lead", Group: "development" },
    { Name: "Jarom Jones", Image: -2650, Title: "Developer", Group: "development" },
 	{ Name: "Jeff Conradt", Image: -2500, Title: "Developer", Group: "development" },
    { Name: "Jered Thommen", Image: -1550, Title: "Team Lead", Group: "development" },
	{ Name: "John Doroshenk", Image: -700, Title: "Team Lead", Group: "development" },
    { Name: "Justin Soden", Image: -2300, Title: "Developer", Group: "development" },
    { Name: "Kenna Conklin", Image: -600, Title: "Product Owner", Group: "development" },
	{ Name: "Kim Lyles", Image: -800, Title: "Quality Assurance", Group: "development" },
	{ Name: "Lewis Notestine", Image: -1750, Title: "Developer", Group: "development" },
	{ Name: "Liam Moriarty", Image: -900, Title: "Product Owner", Group: "development" },
	{ Name: "Michael Rivers", Image: -1400, Title: "Developer", Group: "development" },
    { Name: "Nagisa Day", Image: -2550, Title: "Developer", Group: "development" },
	{ Name: "Nathan Prado", Image: -1100, Title: "Developer", Group: "development" },
 	{ Name: "Noah Cooper", Image: -1150, Title: "Team Lead", Group: "development" },
	{ Name: "Patrick Huneke", Image: -1200, Title: "Quality Assurance", Group: "development" },
    { Name: "Rita Webb", Image: -2600, Title: "Quality Assurance", Group: "development" },
	{ Name: "Robert Gale", Image: -1300, Title: "Developer", Group: "development" },
    { Name: "Ryan Hansen", Image: -1650, Title: "Product Owner", Group: "development" },
    { Name: "Shawn Forgie", Image: -2750, Title: "Developer", Group: "development" },
	{ Name: "Sean Marek", Image: -1350, Title: "Developer", Group: "development" },
    { Name: "Taylor Fisher", Image: -2800, Title: "Sr. Developer", Group: "development" },
	{ Name: "Trisha Bingham", Image: -1450, Title: "Quality Assurance", Group: "development" },
    { Name: "Tyler Pendleton", Image: -1700, Title: "Quality Assurance", Group: "development" },
	{ Name: "Zak Schulhoff ", Image: -1500, Title: "Developer", Group: "development" },

	{ Name: "Caleb Jacobson", Image: -300, Title: "Team Lead", Group: "operations" },
 	{ Name: "Carlos Prado", Image: -1600, Title: "IT Support Engineer", Group: "operations" },
    { Name: "Jason Brady", Image: -2850, Title: "Operations Engineer", Group: "operations" },
	{ Name: "Larry Asakura", Image: -850, Title: "SysAdmin", Group: "operations" },
	{ Name: "Matt Smith", Image: -1050, Title: "Database Developer", Group: "operations" },
    { Name: "Nick Horner", Image: -650, Title: "Developer", Group: "operations" },
	{ Name: "Ted Moore", Image: -1800, Title: "Developer", Group: "operations" },
    { Name: "Ted Wriggle", Image: -250, Title: "Operations Manager", Group: "operations" },

    { Name: "Issac Wycoff", Image: -2050, Title: "Developer", Group: "architecture" },
	{ Name: "Matt Bellamy", Image: -950, Title: "Senior Developer", Group: "architecture" },
	{ Name: "Mike Payne", Image: -1000, Title: "Principal SQL DBA", Group: "architecture" },
	{ Name: "Tom Gugg", Image: -1850, Title: "MS SQL DBA", Group: "architecture" },


    //***************Sales*****************
    { Name: "Ryan Ettinger", Image: -2150, Title: "Marketing Specialist", Email: "ryan@altsrc.net", Group: "busdev" },
    { Name: "Marcel deLisser", Image: -2100, Title: "Business Outreach Coordinator", Email: "marcel.delisser@altsrc.net", Group: "busdev" },
    { Name: "Scott Ostby", Image: -2200, Title: "Senior Business Coordinator", Email: "scott.ostby@altsrc.net", Group: "busdev" },
]

var ShowText = function (texts, buttons, i) {
	texts.add(buttons).filter(".active").removeClass("active");
	texts.eq(i).add(buttons.eq(i)).addClass("active");
}
var InitiateCycler = function (textName, buttonName, cycler) {
	var texts = $(textName);
	var buttons = $(buttonName);
	var count = texts.length;
	var i = 0;
	var cycler = setInterval(function () {
		if (++i >= count) {
			i = 0;
		}
		ShowText(texts, buttons, i);
	}, 6000);

	$("body").on("click", buttonName, function () {
		var i = $(this).index();
		ShowText(texts, buttons, i);
		clearInterval(cycler);
	})
}

//*************** Contact Form *****************


var whatTextFlipper = null;
var whyTextFlipper = null;
$(document).ready(function () {
    // Mobile menu icon...
    document.querySelector(".mobileIcon").addEventListener("click", function () {
        this.classList.toggle("active");
    });

	// Staff Buttons...
	$('.showTeam').click(function () {
		$(this).next().slideToggle(400);
		var newText = $(this).text() == "Hide the Team" ? "Meet the Team" : "Hide the Team";
		$(this).text(newText);
	});


	$('.aboutButton').on('click', function (e) {
		$(".aboutButton").removeClass("active");
		$(this).toggleClass("active");
		var team = $(this).attr('data-team');
		if (team === "all") {
			$('.staffPics').hide();
			$(".teamLeft").slideDown(300);
			$('.showTeam').text("Meet the Team");
		}
		else {
			$('.staffPics').hide();
			$(".teamLeft").hide();
			$(".teamLeft[data-team='" + team + "']").slideDown(300);
			$('.showTeam').text("Meet the Team");
		}

	});

	function slide() {
		$('.slideshow').animate({ backgroundPosition: '-=2000px' }, 90000, 'linear', slide);
	}
	slide();


	// Shrinking Header...

	$(window).load(function () {
		// $("#header").removeClass("large");
		// $("#header").addClass("large");
		//flippers
		if ($(".whatButtons").visible() && whatTextFlipper == null) {
			whatTextFlipper = setInterval(function () { });
			InitiateCycler(".whatText", ".whatButton", whatTextFlipper);
		}

		if ($("#whyFlipButtons").visible() && whyTextFlipper == null) {
			whyTextFlipper = setInterval(function () { });
			InitiateCycler(".whyText", ".whyButton", whyTextFlipper);
		}
	});

	$(window).scroll(function () {
		//navheader resize
		if ($(document).scrollTop() > 0) {
			$("#header").removeClass("large")
		}
		else {
			$("#header").addClass("large")
		}

		//flippers
		if ($(".whatButtons").visible() && whatTextFlipper == null) {
			whatTextFlipper = setInterval(function () { });
			InitiateCycler(".whatText", ".whatButton", whatTextFlipper);
		}

		if ($("#whyFlipButtons").visible() && whyTextFlipper == null) {
			whyTextFlipper = setInterval(function () { });
			InitiateCycler(".whyText", ".whyButton", whyTextFlipper);
		}
	});

	//smooth scroll
	$('.pageNav').on('click', function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 60
		}, 900, 'swing');
	});

	//staff
	$.each(Staff, function (x, person) {
	    var staffTemplate;
	    var template;
	    if (person.Group == "busdev") {
	        staffTemplate = $("#busDevTemplate").html();
	        template = staffTemplate.format("", person.Group, person.Image, person.Name, person.Title, person.Email);
	    } else {
	        staffTemplate = $("#staffTemplate").html();
	        template = staffTemplate.format("", person.Group, person.Image, person.Name, person.Title);
	    }

		switch(person.Group)
		{
			case "leadership":
				$("#leaderPics").append(template);
				break;
			case "development":
				$("#devPics").append(template);
				break;
			case "operations":
				$("#operationsPics").append(template);
				break;
			case "architecture":
				$("#architecturePics").append(template);
				break;
			case "quality":
				$("#qualityPics").append(template);
				break;
		    case "busdev":
		        $("#busDevPics").append(template);
		        break;
		}
	})




	//Tool tip
	$("a[data-toggle='tooltip']").tooltip()

    //Popover
	$('html').on('mouseup', function (e) {
	    if (!$(e.target).closest('.popover').length) {
	        $('.popover').each(function () {
	            $(this.previousSibling).popover('hide');
	        });
	    }
	});

	$('[data-toggle="popover"]').popover()



});
