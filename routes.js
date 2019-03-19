/* 
 * Routes
 */

module.exports = {
	userRoute: require('./server/routes/user.route'),
	messageRoute: require('./server/routes/message.route'),
	messageStateRoute: require('./server/routes/messageState.route'),
	fileRoute: require('./server/routes/file.route'),
	groupRoute: require('./server/routes/group.route'),
};