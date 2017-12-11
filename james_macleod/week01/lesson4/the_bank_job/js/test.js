const records = [];
const RecordLabel = function(artist, tracks) {
  let record = {};

  records.artist = artist;
  records.tracks = tracks;

  records.push(record);
};

const blackEyedPeas = RecordLabel("BEP", 23);
const redHotChilli = RecordLabel("Red Hot Chilli Peppers", 43);
const kingOfLeon = RecordLabel("Kings of Leon", 21);
const pinkFloyd = RecordLabel("Pink Floyd", 14);
const fiftyCent = RecordLabel("50 Cent", 13);
