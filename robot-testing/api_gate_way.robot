*** Settings ***
Library   RequestsLibrary
Library   Collections

*** Testcases ***
See category list
  List of all categories

Show only category id = 1
  Show category id = 1

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

  Should Be Equal As Strings    ${json['data']['getCategoryList'][0]['name']}    Product name 01
  Should Be Equal As Strings    ${json['data']['getCategoryList'][0]['image']}    Short 01
  Should Be Equal As Strings    ${json['data']['getCategoryList'][1]['name']}    Product name 02
  Should Be Equal As Strings    ${json['data']['getCategoryList'][1]['image']}    Short 02

Show category id = 1

  Create Session   api-gateway    http://localhost:9000
  &{headers}=   Create Dictionary   Content-Type=application/json
  ${id}=  Set Variable  1
  &{data}=   Create Dictionary   query={getCategoryList(id: ${id}) {name image label {en th cn}}}
  ${response}=   Post Request    api-gateway   /graphql   data=${data}  headers=${headers}
  Should Be Equal As Strings    ${response.status_code}    200

  ${json}=   Set Variable  ${response.json()}
  ${length}=  Get Length    ${json['data']['getCategoryList']}
  Should Be Equal as Integers  ${length}  1

  Should Be Equal As Strings    ${json['data']['getCategoryList'][0]['name']}    Product name 01
  Should Be Equal As Strings    ${json['data']['getCategoryList'][0]['image']}    Short 01