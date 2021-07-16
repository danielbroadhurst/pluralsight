import axios from 'axios'
import config from './config'

function authenticateUser() {
  return axios.post('/api/auth', { userId: config.defaultUserId }).then(res => res.data)
}

function getList(listId) {
  let url = '/api/list'
  if (listId) url += `/${listId}`
  return axios.get(url)
    .then(res => {
      if (!res.data)
        return createList()
      return res.data
    })
}

function getLists() {
  return axios.get('/api/lists')
  .then(res => {
    return res.data
  })
}

function createList(name) {
  return axios.post('/api/createList', {name}).then(res => {
    return axios.get('/api/list').then(res => res.data)
  })
}

function addItem(listId, newItemName) {
  const data = { listId, newItemName }
  return axios.post('/api/addItem', data).then(res => res.data)
}

function removeItem(listId, itemId) {
  return axios.delete(`/api/removeItem/${listId}/${itemId}`)
}

function checkItem(itemId, completedAt) {
  const data = { itemId, completedAt }
  return axios.put('/api/checkItem', data)
}

function uncheckItem(itemId) {
  return axios.put('/api/uncheckItem', { itemId })
}

export default { authenticateUser, getList, createList, getLists, checkItem, uncheckItem, addItem, removeItem }
