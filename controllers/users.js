const User = require('../models/user')

module.exports.profile = function(req,res){
    return res.render('users',{
        title: "Profile"
    });
}

module.exports.signUp = function(req,res){
    return res.render('signUp', {
        title: "Codiel | Sign Up"
    }) 
}


module.exports.signIn = function(req,res){
    return res.render('signIn', {
        title: "Codiel | Sign In"
    }) 
}

// get the sign up data

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email : req.body.email}, function(err,user){
        if(err){console.log('Error in finding the user'); return}

        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return;}

                return res.redirect('users/sign-in')
            })
        }else{
            return res.redirect('back');
        }
    })
}


module.exports.createSession = function(req,res){
    //TODO later
}