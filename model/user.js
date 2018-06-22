const mongoose=require("mongoose")
var userSchema = mongoose.Schema(
    { 
    first: String,    
        last: String,    
        gender: String,    
        dob: { type: Date, default: Date.now },
        startDate: { type: Date, default: Date.now },    
        endDate: { type: Date, default: Date.now },    
        ethnicity: String    }
    ); 
 module.exports = mongoose.model('Consumer', userSchema); 
    