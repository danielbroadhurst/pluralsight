'use strict';

const mongoose = require('mongoose');
const { ToDoList, Item } = require('./schema');

module.exports = {
  getList(userId, listId) {
    let query = { userId: userId };
    if (listId) query._id = listId;

    return new Promise((resolve, reject) => {
      ToDoList.findOne(query)
        .populate('items')
        .exec((err, toDoList) => {
          if (err) return console.error('ERROR!', err);
          return resolve(toDoList);
        });
    });
  },

  getListsForUser(userId) {
    return new Promise((resolve, reject) => {
      return ToDoList.find({ userId: userId })
        .select('_id name')
        .then((lists) => {
          console.log(lists);
          return resolve({ userId: userId, lists });
        });
    });
  },

  createEmptyList(userId, listName) {
    const toDoList = new ToDoList({
      name: listName,
      userId,
      items: [],
    });
    return toDoList.save();
  },

  addItem(userId, listId, newItemName) {
    const item = new Item({ name: newItemName, complete: false });

    return ToDoList.findOne({ _id: listId }).then((toDoList) => {
      if (!toDoList) return {};

      if (toDoList.userId !== userId)
        return Promise.reject('Unable to find the list for that user');

      return item
        .save()
        .then(() => {
          toDoList.items.push(item._id);

          return toDoList
            .save()
            .then(() => {
              return ToDoList.findOne({ userId: userId, _id: listId })
                .populate('items')
                .then((list) => list)
                .catch((err) =>
                  console.error('ERROR finding list just saved', err)
                );
            })
            .catch((err) =>
              console.error('ERROR saving list with new item ref', err)
            );
        })
        .catch((err) => console.error('ERROR saving item', err));
    });
  },

  checkItem(itemId, completedAt) {
    return Item.findById(itemId).then((item) => {
      if (!item) return Promise.reject('Unable to find item with id ' + itemId);

      item.set({ complete: true, completedAt });
      return item
        .save()
        .then(() => Promise.resolve())
        .catch((err) => console.error('ERROR saving completed item', err));
    });
  },

  uncheckItem(itemId) {
    return Item.findById(itemId).then((item) => {
      if (!item) return Promise.reject('Unable to find item with id ' + itemId);

      item.set({ complete: false, completedAt: null });
      return item
        .save()
        .then(() => Promise.resolve())
        .catch((err) => console.error('ERROR saving completed item', err));
    });
  },

  removeItem(userId, listId, itemId) {
    return ToDoList.findOne({ _id: listId }).then((toDoList) => {
      if (!toDoList) return;

      const itemIndexToRemove = toDoList.items.indexOf(itemId);
      if (itemIndexToRemove > -1) {
        toDoList.items.splice(itemIndexToRemove, 1);
      }
      return toDoList
        .save()
        .then(() =>
          Item.findByIdAndRemove(itemId).then(() => Promise.resolve())
        );
    });
  },

  deleteList(userId, listId) {
    return ToDoList.findOne({ userId: userId, _id: listId }).exec(
      (err, toDoList) => {
        if (err) {
          console.error('ERROR retrieving list to delete', err);
          return Promise.reject();
        }

        if (!toDoList) {
          console.log('To do list not found for removal');
          return Promise.resolve();
        }

        Promise.all(
          toDoList.items.map((itemId) =>
            Item.findByIdAndRemove(itemId, () => Promise.resolve())
          )
        ).then(toDoList.remove());
      }
    );
  },
};
