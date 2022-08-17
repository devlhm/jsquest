const {
	save,
	db,
	getDocById,
	update,
	getAllFromCollection,
	getDocRefById,
} = require("../../firestore.js");

const userCollectionName = "users";

async function create(username, email, password) {
	const userExists = await getByEmail(email);

	if (!userExists)
		await save(userCollectionName, {
			username,
			email,
			password,
			emailConfirmed: false,
		});
	else throw "User already exists";
}

async function getByEmail(email) {
	const snapshot = await db
		.collection(userCollectionName)
		.where("email", "==", email)
		.get();

	if (snapshot.empty) return false;
	else return snapshot.docs[0];
}

async function getById(id) {
	const user = await getDocById(userCollectionName, id);
	if (user.exists) return user;
	else return false;
}

async function getRefById(id) {
	const userRef = await getDocRefById(userCollectionName, id);
	return userRef;
}

async function getAll() {
	return await getAllFromCollection(userCollectionName);
}

async function updateById(id, data) {
	await update(userCollectionName, data, id);
}

async function isEmailConfirmed(id) {
	const user = await getById(id);
	const userData = user.data();
	return userData.emailConfirmed;
}

async function confirmEmail(id) {
	await updateById(id, { emailConfirmed: true });
}

module.exports = {
	create,
	getByEmail,
	getById,
	updateById,
	getAll,
	isEmailConfirmed,
	confirmEmail,
	getRefById,
};
