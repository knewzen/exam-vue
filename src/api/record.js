import fetch from '@/utils/fetch'

const baseUri = '/record'
const baseUriWithLine = '/record/'

// 列表
export function getRecordListFromApi(params) {
  return fetch({
    url: baseUri,
    method: 'GET',
    params
  })
}

// 详情
export function getRecordItemFromApi(id) {
  return fetch({
    url: baseUriWithLine + id,
    method: 'GET'
  })
}

// 创建
export function addRecordItemToApi(data) {
  return fetch({
    url: baseUri,
    method: 'POST',
    data
  })
}

// 更新
export function updateRecordItemToApi(id, data) {
  return fetch({
    url: baseUriWithLine + id,
    method: 'PUT',
    data
  })
}

// 删除
export function deleteRecordItemToApi(id) {
  return fetch({
    url: baseUriWithLine + id,
    method: 'DELETE'
  })
}
