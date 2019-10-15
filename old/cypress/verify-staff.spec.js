/// <reference types="Cypress" />

var staffMembersAll = [{
		firstName: "Jules",
		lastName: "Damey-Fernandez",
		campsWorking: ["sw-camp1", "sw-camp2"],
		position1: "STL",
		position2: ""
	},
	{
		firstName: "Gary",
		lastName: "Clack",
		campsWorking: ["sw-camp1", "sw-camp2"],
		position1: "TL",
		position2: ""
	},
	{
		firstName: "Kayla",
		lastName: "Miller",
		campsWorking: ["sw-camp1", "sw-camp2"],
		position1: "TL",
		position2: ""
	},
	{
		firstName: "Yolanda",
		lastName: "Drew",
		campsWorking: ["sw-camp1", "sw-camp2", "stan-camp5", "stan-camp6"],
		position1: "LC",
		position2: ""
	},
	{
		firstName: "Jordan",
		lastName: "Wesson",
		campsWorking: ["sw-camp1"],
		position1: "WP",
		position2: ""
	},
	{
		firstName: "Jamila",
		lastName: "Ford",
		campsWorking: ["stan-camp1", "stan-camp2", "stan-camp3", "stan-camp4", "stan-camp5"],
		position1: "STL",
		position2: ""
	},
	{
		firstName: "Divine",
		lastName: "Rolle",
		campsWorking: ["stan-camp1", "stan-camp2", "stan-camp3", "stan-camp4", "stan-camp5", "stan-camp6"],
		position1: "TL",
		position2: ""
	},
	{
		firstName: "Noah",
		lastName: "Fedler",
		campsWorking: ["stan-camp1", "stan-camp2", "stan-camp3", "stan-camp4"],
		position1: "TL",
		position2: ""
	},
	{
		firstName: "Trenton",
		lastName: "Barnett",
		campsWorking: ["stan-camp1", "stan-camp3", "stan-camp5", "stan-camp6"],
		position1: "TL",
		position2: ""
	},
	{
		firstName: "Desmond",
		lastName: "Yalom",
		campsWorking: ["stan-camp1", "stan-camp2", "stan-camp3", "stan-camp4", "stan-camp5"],
		position1: "TL",
		position2: ""
	},
	{
		firstName: "Douglas",
		lastName: "Hearns",
		campsWorking: ["stan-camp1"],
		position1: "TL",
		position2: ""
	},
	{
		firstName: "Derrick",
		lastName: "Celestine",
		campsWorking: ["stan-camp1", "stan-camp2", "stan-camp3", "stan-camp4"],
		position1: "TL",
		position2: ""
	},
	{
		firstName: "James",
		lastName: "McDonald",
		campsWorking: ["stan-camp1", "stan-camp2", "stan-camp3"],
		position1: "TL",
		position2: ""
	},
	{
		firstName: "Claire",
		lastName: "Levenson",
		campsWorking: ["stan-camp1", "stan-camp2", "stan-camp3", "stan-camp4", "stan-camp5", "stan-camp6"],
		position1: "TL",
		position2: ""
	},
	{
		firstName: "Elise",
		lastName: "Simmons",
		campsWorking: ["stan-camp1", "stan-camp2", "stan-camp3", "stan-camp4", "stan-camp5", "stan-camp6"],
		position1: "TL",
		position2: ""
	},
	{
		firstName: "Nina",
		lastName: "Fleck",
		campsWorking: ['stan-camp1', 'stan-camp2', 'stan-camp3', 'stan-camp4', 'stan-camp5', 'stan-camp6'],
		position1: "TL",
		position2: ""
	},
	{
		firstName: "Alina",
		lastName: "Briley",
		campsWorking: ["stan-camp1", "stan-camp2"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Kate",
		lastName: "Ward",
		campsWorking: ["stan-camp1", "stan-camp2", "stan-camp3", "stan-camp4", "stan-camp5"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Erin",
		lastName: "Janov",
		campsWorking: ["stan-camp1", "stan-camp3", "stan-camp4", "stan-camp5"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Frederique",
		lastName: "Desrosiers",
		campsWorking: ["stan-camp1"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Alexandra",
		lastName: "Desrosiers",
		campsWorking: ["stan-camp1"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Nikta",
		lastName: "Shahbaz",
		campsWorking: ["stan-camp1", "stan-camp2", "stan-camp3", "stan-camp5", "stan-camp6"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Raqqayah",
		lastName: "Simmons",
		campsWorking: ["stan-camp1", "stan-camp2", "stan-camp3", "stan-camp4"],
		position1: "LC",
		position2: ''
	},
	{
		firstName: "Flora",
		lastName: "Moore",
		campsWorking: ["stan-camp1", "stan-camp2", "stan-camp3"],
		position1: "OC",
		position2: ''
	},
	{
		firstName: "Elizabeth",
		lastName: "Fung",
		campsWorking: ["stan-camp4", "stan-camp5", "stan-camp6"],
		position1: "OC",
		position2: ''
	},
	{
		firstName: "Shayla",
		lastName: "Nary",
		campsWorking: ['stan-camp1', 'stan-camp2', 'stan-camp3', 'stan-camp4', 'stan-camp5'],
		position1: "WP",
		position2: ''
	},
	{
		firstName: "Luis",
		lastName: "Luevanos",
		campsWorking: ["stan-camp2", "stan-camp3", "stan-camp4", "stan-camp5"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Michael",
		lastName: "Andrade",
		campsWorking: ['stan-camp2', 'stan-camp3', 'stan-camp4', 'stan-camp5', 'stan-camp6'],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Molly",
		lastName: "Brantingham",
		campsWorking: ["stan-camp2", "stan-camp3", "stan-camp4"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Isabella",
		lastName: "Borbolla",
		campsWorking: ["stan-camp2", "stan-camp3"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Lauren",
		lastName: "Ihle",
		campsWorking: ["stan-camp2", "stan-camp3", "stan-camp4"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Laci",
		lastName: "Jackson",
		campsWorking: ["stan-camp4", "stan-camp5", "stan-camp6"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Nathan",
		lastName: "Tung",
		campsWorking: ["stan-camp4", "stan-camp5"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Nathan",
		lastName: "Tung",
		campsWorking: ["stan-camp6"],
		position1: "STL",
		position2: ''
	},
	{
		firstName: "Jennifer",
		lastName: "Gerardi",
		campsWorking: ["stan-camp3", "stan-camp4", "stan-camp5", "stan-camp6"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Alexis",
		lastName: "Hagan",
		campsWorking: ["stan-camp5"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Isabella",
		lastName: "Stenz",
		campsWorking: ["stan-camp5", "stan-camp6"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Alexis",
		lastName: "Hagan",
		campsWorking: ["ucf-camp1", "ucf-camp2"],
		position1: "STL",
		position2: ''
	},
	{
		firstName: "Alexis",
		lastName: "Hagan",
		campsWorking: ["sw-camp1"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Alex",
		lastName: "Abbott",
		campsWorking: ["ucf-camp1", "ucf-camp2"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Charles",
		lastName: "Garza",
		campsWorking: ["ucf-camp1", "ucf-camp2"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Laci",
		lastName: "Jackson",
		campsWorking: ["ucf-camp1", "ucf-camp2"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Kayla",
		lastName: "Jackson",
		campsWorking: ["ucf-camp1", "ucf-camp2"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Alicyn",
		lastName: "Kitamura",
		campsWorking: ["ucf-camp1", "ucf-camp2"],
		position1: "LC",
		position2: ''
	},
	{
		firstName: "Luzmaria",
		lastName: "Estalla",
		campsWorking: ["ucf-camp1", "ucf-camp2"],
		position1: "WP",
		position2: ''
	},
	{
		firstName: "Isabella",
		lastName: "Stenz",
		campsWorking: ["villa-camp1", "villa-camp2"],
		position1: "STL",
		position2: ''
	},
	{
		firstName: "Trace",
		lastName: "Craver",
		campsWorking: ["villa-camp1", "villa-camp2"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Trace",
		lastName: "Craver",
		campsWorking: ["sw-camp1"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Adam",
		lastName: "Chan",
		campsWorking: ["villa-camp1", "villa-camp2"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Maxwell",
		lastName: "Little",
		campsWorking: ["villa-camp1"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Katrina",
		lastName: "Hoefflinger",
		campsWorking: ["villa-camp1", "villa-camp2"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Deja",
		lastName: "Washington",
		campsWorking: ["villa-camp1", "villa-camp2"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Rachel",
		lastName: "Dillman",
		campsWorking: ["villa-camp1"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Kelly",
		lastName: "Castleberry",
		campsWorking: ["villa-camp1"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Viva",
		lastName: "Sandoval",
		campsWorking: ["villa-camp1"],
		position1: "TL",
		position2: ''
	},
	{
		firstName: "Jordan",
		lastName: "Wesson",
		campsWorking: ["villa-camp1", "villa-camp2"],
		position1: "WP",
		position2: ''
	}
];

var hourlyStaffReportArray = [{
		"First Name": "Adam",
		"Last Name": "Chan",
		"Division": "Villanova University, Villanova, PA",
		"Camp1Code": "PAS118",
		"Camp2Code": "PSJ118",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Alex",
		"Last Name": "Abbott",
		"Division": "University of Central Florida, Orlando, FL",
		"Camp1Code": "FLJ118",
		"Camp2Code": "FLS118",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Alexandra",
		"Last Name": "Desrosiers",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Alexis",
		"Last Name": "Hagan",
		"Division": "University of Central Florida, Orlando, FL",
		"Camp1Code": "FLJ118",
		"Camp2Code": "FLS118",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "STS318",
		"Camp6Code": "",
		"Camp1Code(2)": "TXS118 / TXJ118",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Alicyn",
		"Last Name": "Kitamura",
		"Division": "University of Central Florida, Orlando, FL",
		"Camp1Code": "FLJ118",
		"Camp2Code": "FLS218",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Alina",
		"Last Name": "Briley",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Anthony",
		"Last Name": "Nakashima",
		"Division": "International",
		"Camp1Code": "HKQLS1",
		"Camp2Code": "HKQLS2",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Charles",
		"Last Name": "Garza",
		"Division": "University of Central Florida, Orlando, FL",
		"Camp1Code": "FLJ118",
		"Camp2Code": "FLS118",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Claire",
		"Last Name": "Levenson",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "STS418",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Deja",
		"Last Name": "Washington",
		"Division": "Villanova University, Villanova, PA",
		"Camp1Code": "PAS118",
		"Camp2Code": "PAJ118",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Derrick",
		"Last Name": "Celestine",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Desmond",
		"Last Name": "Yalom",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Divine",
		"Last Name": "Rolle",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "STS418",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Douglas",
		"Last Name": "Hearns",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Elise",
		"Last Name": "Simmons",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "STS418",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Elizabeth",
		"Last Name": "Fung",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "",
		"Camp2Code": "",
		"Camp3Code": "",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "STS418",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Erin",
		"Last Name": "Janov",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Flora",
		"Last Name": "Moore",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Frederique",
		"Last Name": "Desrosiers",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Gary",
		"Last Name": "Clack",
		"Division": "Southwestern University, Georgetown, TX",
		"Camp1Code": "TXS118 / TXJ118",
		"Camp2Code": "TXQA118",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Isabella",
		"Last Name": "Borbolla",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Isabella",
		"Last Name": "Stenz",
		"Division": "Villanova University, Villanova, PA",
		"Camp1Code": "PAS118",
		"Camp2Code": "PAJ118",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "STS318",
		"Camp6Code": "STS418",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "James",
		"Last Name": "McDonald",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Jamila",
		"Last Name": "Ford",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Jennifer",
		"Last Name": "Gerardi",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "",
		"Camp2Code": "",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "STS418",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Jordan",
		"Last Name": "Wesson",
		"Division": "Villanova University, Villanova, PA",
		"Camp1Code": "TXS118 / TXJ118",
		"Camp2Code": "",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "PAS118",
		"Camp2Code(2)": "PAJ118"
	},
	{
		"First Name": "Jules",
		"Last Name": "Damey-Fernandez",
		"Division": "Southwestern University, Georgetown, TX",
		"Camp1Code": "TXS118 / TXJ118",
		"Camp2Code": "TXQA118",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Kate",
		"Last Name": "Ward",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Katrina",
		"Last Name": "Hoefflinger",
		"Division": "Villanova University, Villanova, PA",
		"Camp1Code": "PAS118",
		"Camp2Code": "PAJ118",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Kayla",
		"Last Name": "Miller",
		"Division": "Southwestern University, Georgetown, TX",
		"Camp1Code": "TXS118 / TXJ118",
		"Camp2Code": "TXQA118",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Kayla",
		"Last Name": "Sadler",
		"Division": "University of Central Florida, Orlando, FL",
		"Camp1Code": "FLJ118",
		"Camp2Code": "FLS118",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Kelly",
		"Last Name": "Castleberry",
		"Division": "Villanova University, Villanova, PA",
		"Camp1Code": "PAS118",
		"Camp2Code": "",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Laci",
		"Last Name": "Jackson",
		"Division": "University of Central Florida, Orlando, FL",
		"Camp1Code": "FLJ118",
		"Camp2Code": "FLS118",
		"Camp3Code": "",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "STS418",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Lauren",
		"Last Name": "Ihle",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "STS418",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Leslie",
		"Last Name": "Braff",
		"Division": "Villanova University, Villanova, PA",
		"Camp1Code": "PAS118",
		"Camp2Code": "PAJ118",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Luis",
		"Last Name": "Luevanos",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Luzmaria",
		"Last Name": "Estala",
		"Division": "University of Central Florida, Orlando, FL",
		"Camp1Code": "FLJ118",
		"Camp2Code": "FLS218",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Maxwell",
		"Last Name": "Little",
		"Division": "Villanova University, Villanova, PA",
		"Camp1Code": "PAS118",
		"Camp2Code": "",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Michael",
		"Last Name": "Andrade",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "STS418",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Michael",
		"Last Name": "Pineda-O'Donnell",
		"Division": "Villanova University, Villanova, PA",
		"Camp1Code": "PAS118",
		"Camp2Code": "",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Molly",
		"Last Name": "Brantingham",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Mykaella",
		"Last Name": "Rhame",
		"Division": "International",
		"Camp1Code": "HKJF118",
		"Camp2Code": "HKQLS118",
		"Camp3Code": "HKQLS218",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Nathan",
		"Last Name": "Tung",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "",
		"Camp2Code": "",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "STS418",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Nikta",
		"Last Name": "Shahbaz",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "",
		"Camp5Code": "STS318",
		"Camp6Code": "STS418",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Nina",
		"Last Name": "Fleck",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "STS418",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Noah",
		"Last Name": "Fedler",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Rachel",
		"Last Name": "Dillman",
		"Division": "Villanova University, Villanova, PA",
		"Camp1Code": "PAS118",
		"Camp2Code": "",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Raqqayah",
		"Last Name": "Simmons",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "STSSIX118",
		"Camp4Code": "STJ218",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Sarah",
		"Last Name": "Kelley",
		"Division": "International",
		"Camp1Code": "HKJ118",
		"Camp2Code": "HKQLS118",
		"Camp3Code": "HKQLS218",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Shayla",
		"Last Name": "Nary",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "STJ118",
		"Camp3Code": "STS218",
		"Camp4Code": "STJ218",
		"Camp5Code": "STS318",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Trace",
		"Last Name": "Craver",
		"Division": "Villanova University, Villanova, PA",
		"Camp1Code": "PAS118",
		"Camp2Code": "PAJ118",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Trenton",
		"Last Name": "Barnett",
		"Division": "Stanford University, Palo Alto, CA",
		"Camp1Code": "STS118",
		"Camp2Code": "",
		"Camp3Code": "STS218",
		"Camp4Code": "",
		"Camp5Code": "STS318",
		"Camp6Code": "ST418",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Viva",
		"Last Name": "Sandoval",
		"Division": "Villanova University, Villanova, PA",
		"Camp1Code": "PAS118",
		"Camp2Code": "",
		"Camp3Code": "",
		"Camp4Code": "",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "",
		"Camp2Code(2)": ""
	},
	{
		"First Name": "Yolanda",
		"Last Name": "Drew",
		"Division": "Southwestern University, Georgetown, TX",
		"Camp1Code": "TXS118 / TXJ118",
		"Camp2Code": "TXQA118",
		"Camp3Code": "STS318",
		"Camp4Code": "STS418",
		"Camp5Code": "",
		"Camp6Code": "",
		"Camp1Code(2)": "Canada",
		"Camp2Code(2)": ""
	}
];


Cypress.Commands.add("fillSiteInfo", (site, camp, month, day) => {
	cy.visit('/');
	cy.get('#firstName').type("CypressTest");
	cy.get('#lastName').type("CypressTest");
	cy.get(`#${site}`).check({
		force: true
	});
	cy.get(`#${camp}`).check({
		force: true
	});
	cy.get('#date-month').select(month);
	cy.get('#date-day').select(day);
	cy.get('#site-info-continue-button').click();
});

// Start Tests
/*
context("Verify Staff Members", function () {
	testCamp("Southwestern University", 1);
	testCamp("Southwestern University", 2);
	testCamp("Stanford University", 1);
	testCamp("Stanford University", 2);
	testCamp("Stanford University", 3);
	testCamp("Stanford University", 4);
	testCamp("Stanford University", 5);
	testCamp("Stanford University", 6);
	testCamp("University of Central Florida", 1);
	testCamp("University of Central Florida", 2);
	testCamp("Villanova University", 1);
	testCamp("Villanova University", 2);
});
*/
context("Generate Test Data", function () {
	context("Southwestern University", function () {
		context("Camp 1", function () {
			it("June 19th", function () {
				cy.fillSiteInfo("site-sw", "sw-camp1", "6", "19");
				cy.get('#preview-button').click();
				cy.get('#send-data-button').click();
				cy.wait(5000);
				cy.contains("Success");
			});
			it("June 20th", function () {
				cy.fillSiteInfo("site-sw", "sw-camp1", "6", "20");
				cy.get('#preview-button').click();
				cy.get('#send-data-button').click();
				cy.wait(5000);
			});
			it("June 21st", function () {
				cy.fillSiteInfo("site-sw", "sw-camp1", "6", "21");
				cy.get('#preview-button').click();
				cy.get('#send-data-button').click();
				cy.wait(5000);
			});
			it("June 22nd", function () {
				cy.fillSiteInfo("site-sw", "sw-camp1", "6", "22");
				cy.get('#preview-button').click();
				cy.get('#send-data-button').click();
				cy.wait(5000);
			});
			it("June 23rd", function () {
				cy.fillSiteInfo("site-sw", "sw-camp1", "6", "23");
				cy.get('#preview-button').click();
				cy.get('#send-data-button').click();
				cy.wait(5000);
			});
			it("June 24th", function () {
				cy.fillSiteInfo("site-sw", "sw-camp1", "6", "24");
				cy.get('#preview-button').click();
				cy.get('#send-data-button').click();
				cy.wait(5000);
			});
			it("June 25th", function () {
				cy.fillSiteInfo("site-sw", "sw-camp1", "6", "25");
				cy.get('#preview-button').click();
				cy.get('#send-data-button').click();
				cy.wait(5000);
			});
			it("June 26th", function () {
				cy.fillSiteInfo("site-sw", "sw-camp1", "6", "26");
				cy.get('#preview-button').click();
				cy.get('#send-data-button').click();
				cy.wait(5000);
			});
			it("June 27th", function () {
				cy.fillSiteInfo("site-sw", "sw-camp1", "6", "27");
				cy.get('#preview-button').click();
				cy.get('#send-data-button').click();
				cy.wait(5000);
			});
			it("June 28th", function () {
				cy.fillSiteInfo("site-sw", "sw-camp1", "6", "28");
				cy.get('#preview-button').click();
				cy.get('#send-data-button').click();
				cy.wait(5000);
			});
			/*
			it("June 29th", function () {
				cy.fillSiteInfo("site-sw", "sw-camp1", "6", "29");
				cy.get('#preview-button').click();
				cy.get('#send-data-button').click();
				cy.wait(5000);
			});
			*/
			it("June 30th", function () {
				cy.fillSiteInfo("site-sw", "sw-camp1", "6", "30");
				cy.get('#preview-button').click();
				cy.get('#send-data-button').click();
				cy.wait(5000);
			});
		});
	});
});




function testCamp(site, camp) {
	var fillParam1 = "";
	var fillParam2 = "";
	var campCode = "";
	var otherCampCode = "";
	var campCodeValue = "";

	if (camp === 1) {
		campCode = "Camp1Code";
		otherCampCode = "Camp1Code(2)";
	} else if (camp === 2) {
		campCode = "Camp2Code";
		otherCampCode = "Camp2Code(2)";
	} else if (camp === 3) {
		campCode = "Camp3Code";
	} else if (camp === 4) {
		campCode = "Camp4Code";
	} else if (camp === 5) {
		campCode = "Camp5Code";
	} else {
		campCode = "Camp6Code";
	}

	if (site === "Southwestern University") {
		fillParam1 = "site-sw";
		if (camp === 1) {
			campCodeValue = "TXS118 / TXJ118";
			fillParam2 = "sw-camp1";
		} else {
			campCodeValue = "TXQA118";
			fillParam2 = "sw-camp2";
		}
	} else if (site === "Stanford University") {
		fillParam1 = "site-stan";
		if (camp === 1) {
			campCodeValue = "STS118";
			fillParam2 = "stan-camp1";
		} else if (camp === 2) {
			campCodeValue = "STJ118";
			fillParam2 = "stan-camp2";
		} else if (camp === 3) {
			campCodeValue = "STS218";
			fillParam2 = "stan-camp3";
		} else if (camp === 4) {
			campCodeValue = "STJ218";
			fillParam2 = "stan-camp4";
		} else if (camp === 5) {
			campCodeValue = "STS318";
			fillParam2 = "stan-camp5";
		} else {
			campCodeValue = "STS418";
			fillParam2 = "stan-camp6";
		}
	} else if (site === "University of Central Florida") {
		fillParam1 = "site-ucf";
		if (camp === 1) {
			campCodeValue = "FLJ118";
			fillParam2 = "ucf-camp1";
		} else {
			campCodeValue = "FLS118";
			fillParam2 = "ucf-camp2";
		}
	} else {
		fillParam1 = "site-villa";
		if (camp === 1) {
			campCodeValue = "PAS118";
			fillParam2 = "villa-camp1";
		} else {
			campCodeValue = "PAJ118";
			fillParam2 = "villa-camp2";
		}
	}

	context(site, function () {
		context(campCodeValue, function () {
			// To verify the same number of staff on the page as in the array
			var numberOfCreatedStaff = 0;
			var numberOfReportStaff = 0;

			// Add a test for each confirmed staff member
			hourlyStaffReportArray.forEach(function (staffMember) {
				if (staffMember[`${campCode}`] === campCodeValue || staffMember[`${otherCampCode}`] === campCodeValue) {
					it(`${staffMember["First Name"]}` + " " + `${staffMember["Last Name"]}` + " should appear on the page.", function () {
						cy.fillSiteInfo(fillParam1, fillParam2);
						cy.contains(`${staffMember["First Name"]}` + " " + `${staffMember["Last Name"]}`);
					});
					numberOfReportStaff++;
				}
			});

			staffMembersAll.forEach(function (staffMember) {
				if (staffMember.campsWorking.includes(fillParam2)) {
					numberOfCreatedStaff++;
				}
			});

			it("There should be the same number of staff on the page and in the report", function () {
				expect(numberOfCreatedStaff).to.equal(numberOfReportStaff);
			});
		});
	});
}