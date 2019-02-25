/*
 * Authorization
 */

//Permits access to some role or range of roles
exports.permission = function( role, roleLevelLimit = null){

	return function(req,res,next){
		if( roleLevelLimit ){
			if( req.user.role >= role || req.user.role <= roleLevelLimit ){
				return next();
			}else{
				res.status(401).send('Unauthorized to perform the operation');
			}
		}else{
			if( req.user.role == role ){
				return next();
			}else{
				res.status(401).send('Unauthorized to perform the operation');
			}
		}
	};
};

//Checks if users logged in
exports.isLoggedIn = function(){
	return function(req, res, next) {
	  if(req.isAuthenticated()) {
		return next();
	  }
	  return res.status(401).send("Can't authenticate user");
	};
};
