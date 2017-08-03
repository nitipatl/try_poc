*** Settings ***
Library   RequestsLibrary
Library   Collections

*** Testcases ***
See product detail
  List of all product in system

See partial product detail
  List of all product in system with SKU


*** Keywords ***
List of all product in system
  Create Session   api-gateway    http://localhost:9000
  &{headers}=   Create Dictionary   Content-Type=application/json
  &{data}=   Create Dictionary   query={getProductList {productName shortDescription longDescription sku}}
  ${response}=   Post Request    api-gateway   /graphql   data=${data}  headers=${headers}
  Should Be Equal As Strings    ${response.status_code}    200

  ${json}=   Set Variable  ${response.json()}
  ${length}=  Get Length    ${json['data']['getProductList']}
  Should Be Equal as Integers  ${length}  2

  Should Be Equal As Strings    ${json['data']['getProductList'][0]['productName']}    Product name 01
  Should Be Equal As Strings    ${json['data']['getProductList'][0]['shortDescription']}    Short 01
  Should Be Equal As Strings    ${json['data']['getProductList'][0]['longDescription']}    Long 01
  Should Be Equal As Integers    ${json['data']['getProductList'][0]['sku']}    1

List of all product in system with SKU
  Create Session   api-gateway    http://localhost:9000
  &{headers}=   Create Dictionary   Content-Type=application/json
  &{data}=   Create Dictionary   query={getProductList {sku}}
  ${response}=   Post Request    api-gateway   /graphql   data=${data}  headers=${headers}
  Should Be Equal As Strings    ${response.status_code}    200

  ${json}=   Set Variable  ${response.json()}
  ${length}=  Get Length    ${json['data']['getProductList']}
  Should Be Equal as Integers  ${length}  2

  Dictionary Should Not Contain Key   ${json['data']['getProductList'][0]}   productName
  Dictionary Should Not Contain Key   ${json['data']['getProductList'][0]}   shortDescription
  Dictionary Should Not Contain Key   ${json['data']['getProductList'][0]}   longDescription
  Should Be Equal As Integers    ${json['data']['getProductList'][0]['sku']}    1
