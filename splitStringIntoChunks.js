function splitStringIntoChunks(string, chunkLength) {
  const result = [];
  for (let index = 0; index < string.length; index += chunkLength) {
    result.push(string.substr(index, chunkLength));
  }

  return result;
}

module.exports = splitStringIntoChunks;
