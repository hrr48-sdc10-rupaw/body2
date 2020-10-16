const { Sequelize, DataTypes } = require('sequelize');
const Game = require('../indexPostgreSQL.js');

const game = Game.build({
	id: 1,
	titleCover: 'https://s3.us-east-2.amazonaws.com/images.for.hrr/header.jpg',
	title: 'Hello Kitty and Sanrio Friends Racing',
	price: '$19,999.99',
	aboutInfo: `Come and join Hello Kitty with her best friends in this action-packed Family Racing Party never before available on Steam!

	Rally, Sail and Fly through 16 exciting new Tours including Hello Kitty’s Happy Town, Chococat’s Tropical Island, Little Twin Stars Galaxy and more… You can select your type of Car, Boat or Plane and have access to tons of different paint jobs for super fancy custom looks!

	Pick up power-ups along the way and use them carefully to distract your racing opponents or get an edge on them.

	Unlock up 20 additional adventures to practice & improve your racing skills including Apple Courses, Cupcake Collects and Time Challenges - they get harder and harder!

	Choose to race as Hello Kitty or her besties including My Melody, Keroppi, Badtz-Maru, Chococat and many others. Select each character’s unique racing outfit to show off your your very own racing style!

	Invite your friends and family to play the super-fun multiplayer split screen mode which support up to 4 players at once!

	USED UNDER LICENSE.
	SANRIO GMBH
	(C) 1976, 1979, 1985, 1988, 1993, 1996, 2001, 2005, 2015 SANRIO CO., LTD
	Scarab Entertainment
	900 Ranch Road 620 South, Suite C-101, #246
	Austin TX 78734 USA`,
	requirements: {
		os: 'Windows XP',
		processor: 'Dual Core 1.8 Ghz',
		memory: '2 GB RAM',
		graphics: '512 Mb',
		directX: 'Version 9.0',
		storage: '900 MB available space',
		},
	genre: ['cats', 'adventure', 'hello', 'kitty', 'racing'],
	developer: 'bethesda',
	publisher: 'bioware',
	releaseDate: 'hopefully never',
	steamAcheivments:['https://s3.us-east-2.amazonaws.com/images.for.hrr/869-100x100.jpg', 'https://s3.us-east-2.amazonaws.com/images.for.hrr/818-100x100.jpg','https://s3.us-east-2.amazonaws.com/images.for.hrr/612-100x100.jpg'],
	languages: [{
		languageName: 'English',
		interface: true,
		fullAudio: false,
		subtitles: false,
		}, {
			languageName: 'French',
			interface: true,
			fullAudio: false,
			subtitles: false,
			},{
				languageName: 'Italian',
				interface: true,
				fullAudio: false,
				subtitles: false,
				},{
					languageName: 'German',
					interface: true,
					fullAudio: false,
					subtitles: false,
					},{
						languageName: 'Spanish-Spain',
						interface: true,
						fullAudio: false,
						subtitles: false,
						},{
							languageName: 'Russian',
							interface: true,
							fullAudio: false,
							subtitles: false,
							}],
	attributes:{
		achievements:  true,
		partialControllersupport:  true,
		remotePlay: true
		},
	moreLikeThis: [{titleImage:'https://s3.us-east-2.amazonaws.com/images.for.hrr/869-100x100.jpg', price: '$19.99'}, {titleImage:'https://s3.us-east-2.amazonaws.com/images.for.hrr/818-100x100.jpg', price:'$19.99'},{titleImage:'https://s3.us-east-2.amazonaws.com/images.for.hrr/612-100x100.jpg', price:'$15.99'}]
})