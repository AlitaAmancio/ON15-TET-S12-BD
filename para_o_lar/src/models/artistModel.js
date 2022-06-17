const mongoose = require('mongoose')

const ArtistSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nomeArtistico: {
        type: String,
        required: true
    },
    nome: [String],
    : {
        type: String,
        required: true,
        unique: true
    },
    categoria: [String],
    dataDeNascimento: Date,
    albunsLançados: Number,
}, { timestamps : true })

const Model = mongoose.model('artist', ArtistSchema)
module.exports = Model

// module.exports = mongoose.model('artist', ArtistSchema)
