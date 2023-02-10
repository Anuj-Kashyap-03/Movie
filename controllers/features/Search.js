class Search {
    constructor(query, search_str) {
        this.search_str = search_str
        this.query = query
    }
    search() {
        this.query=this.query.find({name : new RegExp('^' +this.search_str , 'i')})
        // console.log('yes')
        return this
    }
}

module.exports = Search