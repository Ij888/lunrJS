var documents = [{
  "name": "Lunr",
  "text": "Like Solr, but much smaller, and not as bright."
}, {
  "name": "React",
  "text": "A JavaScript library for building user interfaces."
}, {
  "name": "Lodash",
  "text": "A modern JavaScript utility library delivering modularity, performance & extras."
}]

//We will use the above array of documents to build our index. We want to search the text field, and the name field will be our identifier. Let’s define our index and add these documents to it.

var idx = lunr(function () {
  this.ref('name')
  this.field('text')

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
})

//Now that we have created our index we can try out a search:

idx.search("bright")