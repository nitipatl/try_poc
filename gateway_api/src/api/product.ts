import fetch from 'node-fetch'

export interface ProductAPI {
  list(args: object)
}

export class HTTPProductAPI implements ProductAPI {
  public list(args: object) {
    var results = [
      { productName: 'Product name 01',
        shortDescription: 'Short 01',
        longDescription: 'Long 01',
        sku: 1
      },
      { productName: 'Product name 02',
        shortDescription: 'Short 02',
        longDescription: 'Long 02',
        sku: 2
      }
    ]
    if( args['id'] ) {
      return [results[args['id']]]
    }
    return results
  }
}
