const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/games')
.then(()=>console.log('connected!'))
.catch((err)=>console.log(err));

let gameSchema = mongoose.Schema(
	{
	_id: {type: Number, required: true, unique: true},
	titleCover: {type: String, required: true},
	tital: {type: String},
	price: {type: String},
	aboutInfo: {type: String},
	requirements: {
		os: {type: String},
		processor: {type: String},
		memory: {type: String},
		graphics: {type: String},
		directX: {type: String},
		storage: {type: String},
		},
	genre: [{type: String}],
	develouper: {type: String},
	publisher: {type: String},
	releaseDate: {type: String},
	SteamAcheivments:[{type: String}],
	languages: [{
		languageName: {type: String},
		interface: {type: Boolean},
		fullAudio:  {type: Boolean},
		subtitles:  {type: Boolean},
		}],
	attributes:{
		controllerSupport:  {type: Boolean},
		partialControllersupport:  {type: Boolean},
		remotePlay: {type: Boolean}
		},
	moreLikeThis: [{type: Number}]
})




