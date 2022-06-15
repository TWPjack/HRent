var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Equipment = new Schema({
    value: { 
        type: String,
        enum: ['BED', 'WIFI', 'A/C']
    }
});

var Item = new Schema({
	name: { type: String },
	photos: { type: [String] },
    monthly_rental: { type: Number },
    security_deposit: {
        category: { 
            type: String,
            enum: ['MONTH', 'COST'],
            default: 'MONTH'
        },
        months: { type: Number },
        cost: { type: Number }
    },
    location: {
        area: { 
            type: String,
            enum: ['TAIPEI', 'TAICHUNG', 'KAOHSIUNG'],
            default: 'KAOHSIUNG'
        },
        address: { type: String },
        floor: { type: Number },
        note: { type: String }
    },
    property_type: { 
        type: String,
        enum: ['HOUSE', 'CONDO'],
        default: 'HOUSE'
    },
    description: { type: String },
    rule: { type: String },
    equipments: { type: [Equipment] },
    contact_person: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Item', Item);