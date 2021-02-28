const users = [];

const addUser = ({ idUser, name, room, id, img }) => {
  // name = name.trim().toLowerCase();
  // room = room.trim().toLowerCase();

  // const existingUser = users.find((user) => user.room === room && user.name === name);

  // if(!name || !room) return { error: 'Username and room are required.' };
  // if(existingUser) return { error: 'Tên đã được sử dụng' };

  const user = { idUser, name, room, id, img };

  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.idUser === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.idUser === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };