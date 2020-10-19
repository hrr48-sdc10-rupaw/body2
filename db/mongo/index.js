const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/games', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(()=>console.log('connected!'))
.catch((err)=>console.log(err));

let gameSchema = mongoose.Schema(
	{
		id:{type: Number},
		titleCover: {type: String, required: true},
		title: {type: String},
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
		developer: {type: String},
		publisher: {type: String},
		releaseDate: {type: String},
		steamAcheivments:[{type: String}],
		languages: [{
			languageName: {type: String},
			interface: {type: Boolean},
			fullAudio:  {type: Boolean},
			subtitles:  {type: Boolean},
			}],
		attributes:{
			achievements:  {type: Boolean},
			controllerSupport:  {type: Boolean},
			partialControllersupport:  {type: Boolean},
			remotePlay: {type: Boolean}
			},
		moreLikeThis: [{titleImage:{type: String}, price: {type: String}}]
	})


let Game = mongoose.model('Game', gameSchema);

module.exports = Game;

