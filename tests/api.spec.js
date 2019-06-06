// Mocks
import * as RequestMock from './__mocks__/Request.mock.json'
import * as ResponseMock from './__mocks__/Response.mock.json'

// Utility functions
import { request } from '../src/utilities/global.utilities'

/**
 * @file API connection unit tests
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// Tests default call to the API
describe('https://api.dbknews.com/salary', () => {
  it('Returns the first page of results.', async () => {
    console.warn('Requesting /year/2019?sortby=salary&order=desc&page=1')

    try {
      const { default_config } = RequestMock
      const { default_resp } = ResponseMock

      const req = await request(default_config)

      expect(req.status).toBe(200)
      expect(req.data.data).toEqual(expect.arrayContaining(default_resp))
    } catch (err) {
      console.error('Error testing API call ->', err.message)
    }
  })

  it('Returns the second page of results.', async () => {
    console.warn('Requesting /year/2019?sortby=salary&order=desc&page=2')

    try {
      const { default_config_2 } = RequestMock
      const { default_resp_2 } = ResponseMock

      const req = await request(default_config_2)

      expect(req.status).toBe(200)
      expect(req.data.data).toEqual(expect.arrayContaining(default_resp_2))
    } catch (err) {
      console.error('Error testing API call ->', err.message)
    }
  })
})
