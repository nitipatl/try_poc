import fetch from 'node-fetch'

export interface CategoryAPI {
  list(args: object)
  insert(args: object)
}

export class HTTPCategoryAPI implements CategoryAPI {
  private results = [
      { name: 'Product name 01',
        image: 'Short 01',
        label: {
            "en": "Electronics",
            "th": "อิเล็คทรอนิกส์",
            "cn": "电器"
        },
      },
      { name: 'Product name 02',
        image: 'Short 02',
        label: {
            "en": "Electronics",
            "th": "อิเล็คทรอนิกส์",
            "cn": "电器"
        },
      }
  ];

  public insert(args: object) {
    this.results.push({
        name: args['name'], 
        image: args['image'], 
        label: {en: "OK", th: "ok", cn: "OK"}
    });
    return this.results;
  }
  public list(args: object) {
    
    if( args['id'] ) {
      return [this.results[args['id']]]
    }
    return this.results
  }
}
