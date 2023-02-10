class MovieFeatures {
    constructor(quary, querystr) {
        this.quary = quary,
        this.querystr = querystr
    }

    send_document_according_page() {
        const current_page = this.querystr.page || 1
        const skip = current_page * 60 - 60
        this.quary = this.quary.limit(60).skip(skip)
        return this
    }    


}

module.exports = MovieFeatures