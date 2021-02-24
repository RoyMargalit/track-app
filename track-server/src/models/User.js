const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    }
})

userSchema.pre('save', function (next) {
    const user = this
    if (!user.isModified('password')) {
        console.log('failed line 19');
        return next
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            console.log('failed line 24');
            return next
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                console.log('failed line 29');
                return next
            }
            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePassword = function (candidatePassword) {
    const user = this;
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                console.log('failed line 42');
                return reject
            }
            if (!isMatch) {
                console.log('failed line 46');
                return reject(false)
            }
            resolve(true);
        })
    })
}

mongoose.model('User', userSchema);
