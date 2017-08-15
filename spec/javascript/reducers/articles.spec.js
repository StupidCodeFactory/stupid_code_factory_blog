import { expect } from 'chai';
import { articles } from '../../../app/javascript/reducers/articles'

describe('reducers/articles.js', () => {
  describe('createArticle', () => {
    const article = {
      title: 'Some Article', body: 'Some interesting article'
    };
    const beforeState = [];
    const action = {
      type: 'CREATE_ARTICLE',
      article
    };
    const afterState = [article];

    it('adds the article', () =>  {
      expect(articles(beforeState, action)).to.eql(afterState)
    })
  })
})
