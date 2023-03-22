
async function Paginated(page, model) {
  const limit = 6;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

 
  if (endIndex < (await model.find({})).length) {
    results.next = page + 1;
  }

  if (startIndex > 0) {
    results.previous = page - 1;

  }

  try {
    results.results = await model.find({}).limit(limit).skip(startIndex).exec();
    results.currentPage = page;
    
    return results;
  } catch (error) {
    
  }
}

module.exports = Paginated;