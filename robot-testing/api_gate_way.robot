*** Settings ***
Library   RequestsLibrary
Library   Collections

*** Testcases ***
See category list
  List of all categories

*** Keywords ***
List of all categories
  Create Session   api-gateway    http://localhost:9000
  &{headers}=   Create Dictionary   Content-Type=application/json
  &{data}=   Create Dictionary   query={getCategoryList {name image label {en th cn}}}
  ${response}=   Post Request    api-gateway   /graphql   data=${data}  headers=${headers}
  Should Be Equal As Strings    ${response.status_code}    200

  ${json}=   Set Variable  ${response.json()}
  ${length}=  Get Length    ${json['data']['getCategoryList']}
  Should Be Equal as Integers  ${length}  2

  Should Be Equal As Strings    ${json['data']['getProductList'][0]['productName']}    Product name 01
  Should Be Equal As Strings    ${json['data']['getProductList'][0]['shortDescription']}    Short 01
  Should Be Equal As Strings    ${json['data']['getProductList'][0]['longDescription']}    Long 01
  Should Be Equal As Integers    ${json['data']['getProductList'][0]['sku']}    1
