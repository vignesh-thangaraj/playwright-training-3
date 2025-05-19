import { expect, test } from '@playwright/test'

let url = 'https://jsonplaceholder.typicode.com/posts'

interface responseContent1 {
    "id": number, 
}

interface responseContent2 {
    "title": string, 
}

type getResponseData = responseContent1 & responseContent2

test.describe('jsonplaceholder - ', () =>{

test('GET request', async ({request}) => {
    let get = await request.get(url)
    let getResponse: getResponseData = await get.json()
    let userId = getResponse[0].title

    let patchResponse = await request.patch(url+'/4', {
        data: {
            userId,
        },
        headers: {
            Cookie: 'random-cookie-example'
        },
    })
    expect(patchResponse.status()).toBe(200)
    let result: responseContent = await patchResponse.json()
    console.log(result.id)

    let deleteResponse = await request.delete(url+'/4')
    expect(patchResponse.status()).toBe(200)

})


})